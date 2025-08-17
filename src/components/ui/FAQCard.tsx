'use client';

import { useState } from "react";
import { MinusIcon, PlusIcon } from "../Icons";

interface FAQCardProps {
  question: string;
  answer: string;
}

export const FAQCard = ({ question, answer }: FAQCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-6">
      <dt>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-start text-left text-text-primary"
          aria-controls={`faq-${question.replace(/\s+/g, '-')}`}
          aria-expanded={isOpen}
        >
          <span className="text-lg font-semibold">{question}</span>
          <span className="ml-6 flex h-7 items-center">
            {isOpen ? (
              <MinusIcon className="h-6 w-6 text-action-button-blue" />
            ) : (
              <PlusIcon className="h-6 w-6 text-text-secondary" />
            )}
          </span>
        </button>
      </dt>

      <dd
        id={`faq-${question.replace(/\s+/g, '-')}`}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
      >
        <div className="min-h-0">
          <p className="text-base text-text-secondary pt-4">
            {answer}
          </p>
        </div>
      </dd>
    </div>
  );
};