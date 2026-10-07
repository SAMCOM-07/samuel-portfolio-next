'use client';

import { useState } from 'react';
import { faqs } from './../lib/data/data';
import Card from './Card';
import { ChevronDown, HelpCircle } from 'lucide-react';

const Faqs = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="w-full max-w-xl mx-auto py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brand mb-3">
          <HelpCircle size={13} />
          <span>FAQ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq) => {
          const isOpen = selected === faq.id;

          return (
            <Card key={faq.id} className="!p-0 overflow-hidden">
              <button
                type="button"
                onClick={() => setSelected(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left transition-colors hover:bg-secondary/40 focus:outline-none"
              >
                <span className="font-semibold text-sm sm:text-base text-foreground">
                  {faq.question}
                </span>

                <span
                  className={`p-1.5 rounded-full bg-secondary text-muted-foreground transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-brand bg-brand/10' : ''
                  }`}
                >
                  <ChevronDown size={16} />
                </span>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
