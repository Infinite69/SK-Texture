export interface SwatchItem {
  code: string;
  name: string;
  category: 'Rustic' | 'Parlina' | 'Spray' | 'Super Fine' | 'Granules' | 'Concrete' | 'Specialty';
  applicationMode: 'Trowel' | 'Spray' | 'Roller';
  colorHex: string;
  texturePattern: string; // CSS or desc
  image?: string;
}

export const PHYSICAL_SWATCHES: SwatchItem[] = [
  { code: '01', name: 'Rustic Trowel Finish', category: 'Rustic', applicationMode: 'Trowel', colorHex: '#EAE6DF', texturePattern: 'Deep grooved trowel plaster' },
  { code: '02', name: 'Parnila Pearl Stucco', category: 'Parlina', applicationMode: 'Trowel', colorHex: '#E2DEC9', texturePattern: 'Fine metallic pearlescent grain' },
  { code: '03', name: 'Ultra Spray Stucco', category: 'Spray', applicationMode: 'Spray', colorHex: '#C9A97A', texturePattern: 'Fine pneumatic sprayed droplet texture' },
  { code: '04', name: 'Super Fine Roller Velvet', category: 'Super Fine', applicationMode: 'Roller', colorHex: '#F7F6F0', texturePattern: 'Subtle micro-roller leather grain' },
  { code: '05', name: 'Super Fine Compact Shield', category: 'Super Fine', applicationMode: 'Spray', colorHex: '#E0DDD5', texturePattern: 'Compressed dense stucco matrix' },
  { code: '06', name: 'Light Concrete Fairface', category: 'Concrete', applicationMode: 'Trowel', colorHex: '#D8D8D0', texturePattern: 'Smooth architectural microcement' },
  { code: '07', name: 'Smooth Slate Grey', category: 'Concrete', applicationMode: 'Trowel', colorHex: '#9E9E9B', texturePattern: 'Uniform grey stone plaster' },
  { code: '08', name: 'Dark Slate Grey', category: 'Concrete', applicationMode: 'Trowel', colorHex: '#686866', texturePattern: 'Smoked cement finish' },
  { code: '09', name: 'Black Granite Stucco', category: 'Granules', applicationMode: 'Trowel', colorHex: '#1E1E20', texturePattern: 'Deep onyx black mineral' },
  { code: '10', name: 'Smoked Microcement', category: 'Concrete', applicationMode: 'Trowel', colorHex: '#8C8C88', texturePattern: 'Industrial satin concrete' },

  { code: '11', name: 'Salt & Pepper White Granules', category: 'Granules', applicationMode: 'Spray', colorHex: '#E2E0D8', texturePattern: 'Graded white quartz & black chip mix' },
  { code: '12', name: 'Black Onyx Granules', category: 'Granules', applicationMode: 'Spray', colorHex: '#252426', texturePattern: 'Crushed black marble quartz chips' },
  { code: '13', name: 'Champagne Quartz Granules', category: 'Granules', applicationMode: 'Spray', colorHex: '#EAD7BA', texturePattern: 'Warm gold quartz sand' },
  { code: '14', name: 'Night Sparkle Granules', category: 'Granules', applicationMode: 'Spray', colorHex: '#1A1A1C', texturePattern: 'Dark granite with white quartz specks' },
  { code: '15', name: 'Silver Granite Granules', category: 'Granules', applicationMode: 'Spray', colorHex: '#A5A7A6', texturePattern: 'Pure grey granite chip matrix' },
  { code: '16', name: 'White & Black Granules Mix', category: 'Granules', applicationMode: 'Spray', colorHex: '#B0B0AF', texturePattern: 'High-contrast granite pebble' },
  { code: '17', name: 'Olive Sand Granules', category: 'Granules', applicationMode: 'Spray', colorHex: '#8D8C7A', texturePattern: 'Earth tone quartz aggregate' },
  { code: '18', name: 'Midnight Salt Granules', category: 'Granules', applicationMode: 'Spray', colorHex: '#2C2D2F', texturePattern: 'Black & salt quartz blend' },
  { code: '19', name: 'Bronzed Quartz Granules', category: 'Granules', applicationMode: 'Spray', colorHex: '#6E6255', texturePattern: 'Deep bronze mineral chip' },
  { code: '20', name: 'Black & White Multi Granules', category: 'Granules', applicationMode: 'Spray', colorHex: '#808283', texturePattern: 'Balanced multi-stone chip' },

  { code: '21', name: 'White Stucco Grain', category: 'Super Fine', applicationMode: 'Trowel', colorHex: '#F0EFE9', texturePattern: 'Refined white mineral plaster' },
  { code: '22', name: 'Slate Dust Stucco', category: 'Concrete', applicationMode: 'Trowel', colorHex: '#9FA2A0', texturePattern: 'Fine stone dust finish' },
  { code: '23', name: 'Charcoal Grain Stucco', category: 'Concrete', applicationMode: 'Trowel', colorHex: '#3D3D3F', texturePattern: 'Matte dark charcoal' },
  { code: '24', name: 'Mint Quartz Stucco', category: 'Granules', applicationMode: 'Trowel', colorHex: '#D3DDD4', texturePattern: 'Subtle sage quartz specks' },
  { code: '25', name: 'Cream Sand Stucco', category: 'Rustic', applicationMode: 'Trowel', colorHex: '#E5DCB8', texturePattern: 'Tuscan cream sand plaster' },
  { code: 'RD 26', name: 'Tuscan Ochre RD-26', category: 'Rustic', applicationMode: 'Trowel', colorHex: '#D0B683', texturePattern: 'Rich golden ochre earth finish' },
  { code: 'RD 27', name: 'Grey Stone RD-27', category: 'Concrete', applicationMode: 'Trowel', colorHex: '#858788', texturePattern: 'Neutral architectural stone grey' },
  { code: '28', name: 'Salt Pepper Grain 28', category: 'Granules', applicationMode: 'Trowel', colorHex: '#D5D5CE', texturePattern: 'Light grey peppered aggregate' },
  { code: '29', name: 'Terracotta Red Speckle 29', category: 'Rustic', applicationMode: 'Trowel', colorHex: '#B26F5D', texturePattern: 'Clay red brick speckle plaster' },
  { code: '30', name: 'Denim Blue Granule 30', category: 'Granules', applicationMode: 'Trowel', colorHex: '#586772', texturePattern: 'Slate blue granite chips' },

  { code: '31', name: 'Ruby Red Granules 31', category: 'Granules', applicationMode: 'Trowel', colorHex: '#88312B', texturePattern: 'Deep ruby red aggregate chips' },
  { code: '32', name: 'Multi Beige Granules Mix 32', category: 'Granules', applicationMode: 'Trowel', colorHex: '#C5B5A1', texturePattern: 'Warm multi-sand stone mix' },
  { code: '33', name: 'Gold Quartz Granules 33', category: 'Granules', applicationMode: 'Trowel', colorHex: '#CBB271', texturePattern: 'Shimmering gold mineral aggregate' },
  { code: '34', name: 'Silver Dust Granules 34', category: 'Granules', applicationMode: 'Trowel', colorHex: '#B3B5B7', texturePattern: 'Bright silver granite chips' },
  { code: '35', name: 'Dark Graphite Granules 35', category: 'Granules', applicationMode: 'Trowel', colorHex: '#2E3236', texturePattern: 'Graphite black & white flecks' },
  { code: '36', name: 'Royal Blue Granules 36', category: 'Granules', applicationMode: 'Trowel', colorHex: '#253B56', texturePattern: 'Navy & white quartz chips' },
  { code: '37', name: 'Coral Multi Granules 37', category: 'Granules', applicationMode: 'Trowel', colorHex: '#A85248', texturePattern: 'Rust coral & beige mix' },
  { code: '38', name: 'Brick Red Granules 38', category: 'Granules', applicationMode: 'Trowel', colorHex: '#7B2A26', texturePattern: 'Exposed brick red mineral chips' },
  { code: '39', name: 'Gold Sand Granules 39', category: 'Granules', applicationMode: 'Trowel', colorHex: '#BD9E60', texturePattern: 'Golden sandstone chips' },
  { code: '40', name: 'Speckled Platinum Granules 40', category: 'Granules', applicationMode: 'Trowel', colorHex: '#919495', texturePattern: 'Platinum grey multi specks' }
];
