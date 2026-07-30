import React, { useState } from 'react';
import { FAQS_LIST } from '../data/faqs';
import { FAQItem } from '../types';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeTab, setActiveTab] = useState<string>('All');
  const [query, setQuery] = useState<string>('');

  const filteredFaqs = FAQS_LIST.filter(item => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = item.question.toLowerCase().includes(query.toLowerCase()) ||
                          item.answer.toLowerCase().includes(query.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#FDFBF7] dark:bg-[#121110] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-amber-700 dark:text-amber-400 font-semibold">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Clarity & Guidance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-neutral-900 dark:text-neutral-100">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light">
            Everything you need to know about wall texture durability, waterproofing, heat reflection, and sample mockups.
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search questions e.g. waterproof, samples, villa..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-xs font-mono bg-[#F5F2EB] dark:bg-neutral-900 border border-[#E5DFD5] dark:border-neutral-800 rounded-xs text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-amber-600"
          />
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-[#E5DFD5] dark:border-neutral-800 rounded-xs overflow-hidden transition-all bg-[#F5F2EB]/50 dark:bg-neutral-900/50"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed border-t border-[#E5DFD5]/50 dark:border-neutral-800/50">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
