import React, { useEffect, useRef } from 'react';
import { SwatchItem } from '../data/swatches';

interface SwatchPatchProps {
  swatch: SwatchItem;
  className?: string;
}

export const SwatchPatch: React.FC<SwatchPatchProps> = ({ swatch, className = 'w-full h-28' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high resolution for crisp rendering
    const width = 300;
    const height = 180;
    canvas.width = width;
    canvas.height = height;

    // Base background fill
    ctx.fillStyle = swatch.colorHex;
    ctx.fillRect(0, 0, width, height);

    // Seeded random helper
    let seed = parseInt(swatch.code.replace(/\D/g, '') || '1', 10) * 1234567;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    // Render texture according to category
    const cat = swatch.category;
    const code = swatch.code;

    if (cat === 'Rustic') {
      // Draw troweled grooves and rough plaster depth
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      for (let i = 0; i < 40; i++) {
        const x = random() * width;
        const w = 4 + random() * 12;
        const h = height;
        ctx.fillRect(x, 0, w, h);
      }
      // Light highlights
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      for (let i = 0; i < 30; i++) {
        const x = random() * width;
        const w = 2 + random() * 6;
        ctx.fillRect(x, 0, w, height);
      }
      // Fine plaster noise
      for (let i = 0; i < 2000; i++) {
        const x = random() * width;
        const y = random() * height;
        const size = 1 + random() * 2;
        ctx.fillStyle = random() > 0.5 ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.18)';
        ctx.fillRect(x, y, size, size);
      }
    } else if (cat === 'Parlina') {
      // Metallic pearl sheen with soft gradient waves
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
      grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.1)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0.3)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Fine metallic shimmer particles
      for (let i = 0; i < 3000; i++) {
        const x = random() * width;
        const y = random() * height;
        ctx.fillStyle = random() > 0.3 ? 'rgba(255, 255, 255, 0.35)' : 'rgba(180, 150, 100, 0.25)';
        ctx.fillRect(x, y, 1.5, 1.5);
      }
    } else if (cat === 'Spray') {
      // Sprayed stipple droplet texture
      for (let i = 0; i < 4000; i++) {
        const x = random() * width;
        const y = random() * height;
        const radius = 1 + random() * 3;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = random() > 0.5 ? 'rgba(0, 0, 0, 0.18)' : 'rgba(255, 255, 255, 0.25)';
        ctx.fill();
      }
    } else if (cat === 'Super Fine') {
      // Micro-roller velvet grain / compact stucco
      for (let i = 0; i < 5000; i++) {
        const x = random() * width;
        const y = random() * height;
        ctx.fillStyle = random() > 0.5 ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.15)';
        ctx.fillRect(x, y, 1.2, 1.2);
      }
    } else if (cat === 'Concrete') {
      // Smooth microcement mottling + concrete pores
      for (let i = 0; i < 15; i++) {
        const x = random() * width;
        const y = random() * height;
        const r = 20 + random() * 50;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, random() > 0.5 ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.12)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      // Pores
      for (let i = 0; i < 300; i++) {
        const x = random() * width;
        const y = random() * height;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(x, y, 1, 1);
      }
    } else if (cat === 'Granules') {
      // Crushed quartz aggregate stone chips (Dense pebble particles)
      let chipColors = ['#FFFFFF', '#1A1A1A', '#808080', '#D4AF37'];
      
      // Customize chip colors based on swatch code
      if (code === '09' || code === '12' || code === '14' || code === '23') {
        chipColors = ['#151516', '#2A2A2C', '#3F4042', '#FFFFFF'];
      } else if (code === '11' || code === '16' || code === '18' || code === '20' || code === '28') {
        chipColors = ['#FFFFFF', '#1C1C1E', '#9E9E9E', '#E0E0E0'];
      } else if (code === '13' || code === '33' || code === '39') {
        chipColors = ['#D4AF37', '#E5C158', '#F5E6AD', '#8C6D1F', '#222222'];
      } else if (code === '29' || code === '31' || code === '37' || code === '38') {
        chipColors = ['#88221B', '#B2443B', '#D9827B', '#222222', '#F0EFE9'];
      } else if (code === '30' || code === '36') {
        chipColors = ['#253B56', '#4A698A', '#89A8CC', '#FFFFFF', '#111111'];
      } else if (code === '24') {
        chipColors = ['#6B8E78', '#A2C4AE', '#E2EFE7', '#333333', '#FFFFFF'];
      }

      // Dense stone chip drawing
      for (let i = 0; i < 3500; i++) {
        const x = random() * width;
        const y = random() * height;
        const w = 1.5 + random() * 3.5;
        const h = 1.5 + random() * 3.5;
        const color = chipColors[Math.floor(random() * chipColors.length)];
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
      }
    }

    // Outer subtle bevel border for sample board look
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, width, height);

  }, [swatch]);

  return (
    <div className={`relative overflow-hidden rounded-xs border border-stone-800 shadow-md ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover block"
      />
      {/* Code overlay tag */}
      <span className="absolute top-1.5 right-1.5 text-[10px] font-mono font-bold bg-neutral-950/85 text-amber-400 px-2 py-0.5 rounded-xs shadow-xs border border-stone-800">
        {swatch.code}
      </span>
    </div>
  );
};
