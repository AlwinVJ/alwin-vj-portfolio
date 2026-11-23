import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqs } from '../data/faqs';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="py-6 scroll-mt-20">
      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-[#D8FFE8] font-mono mb-2">
        FAQs
      </h2>
      <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-[#B8DCC8] font-mono mb-6">
        Frequently asked questions about my background, AI engineering capabilities, and projects.
      </p>

      <div className="space-y-3 font-mono">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.id}
              className={`rounded-lg border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-[#15803D] dark:border-[#00FF88] bg-white dark:bg-[#061A10] shadow-sm dark:shadow-[0_0_14px_rgba(0,230,118,0.18)]'
                  : 'border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)] bg-[#F5F7F5] dark:bg-[#061A10]/90 hover:border-[#15803D] dark:hover:border-[#00FF88] dark:hover:shadow-[0_0_12px_rgba(0,230,118,0.15)]'
              }`}
            >
              {/* Question Trigger Button */}
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-question-${item.id}`}
                className="w-full flex items-center justify-between text-left px-3.5 py-3 sm:px-4 sm:py-3.5 gap-3 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15803D] dark:focus-visible:ring-[#00E676] rounded-lg transition-colors"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
                  {/* Badge-style Icon Pill */}
                  <span className="p-1.5 rounded-md border border-[#E5E7EB] dark:border-[rgba(0,230,118,0.3)] bg-white dark:bg-[rgba(0,230,118,0.08)] text-[#15803D] dark:text-[#00E676] group-hover:scale-105 transition-transform shrink-0">
                    <HelpCircle size={14} strokeWidth={2} />
                  </span>
                  <span className="text-xs sm:text-[13px] font-mono font-medium tracking-tight text-neutral-900 dark:text-[#D8FFE8] leading-snug">
                    {item.question}
                  </span>
                </div>

                {/* Dropdown Chevron Indicator */}
                <span
                  className={`p-1 rounded-md text-[#15803D] dark:text-[#00E676] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown size={16} strokeWidth={2.5} />
                </span>
              </button>

              {/* Collapsible Answer Panel */}
              {isOpen && (
                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className="px-3.5 pb-4 sm:px-4 sm:pb-4 pt-3 border-t border-[#E5E7EB] dark:border-[rgba(0,230,118,0.15)] text-xs sm:text-[13px] font-mono leading-relaxed text-neutral-600 dark:text-[#B8DCC8]"
                >
                  <p className="leading-relaxed">{item.answer}</p>

                  {item.bulletPoints && (
                    <ul className="mt-2.5 space-y-2 pl-4 list-disc list-outside marker:text-[#15803D] dark:marker:text-[#00E676]">
                      {item.bulletPoints.map((bp, i) => (
                        <li key={i} className="pl-0.5 leading-relaxed">
                          <strong className="text-neutral-900 dark:text-[#D8FFE8] font-semibold">
                            {bp.label}:
                          </strong>{' '}
                          {bp.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Thin Horizontal Separator */}
      <hr className="mt-10 sm:mt-12 border-[#E5E7EB] dark:border-[rgba(0,230,118,0.25)]" />
    </section>
  );
};
