import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-rh-muted-dark/20 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group hover:opacity-80 transition-opacity"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-lg md:text-xl flex-1">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-6 h-6 flex-shrink-0 text-rh-orange transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-rh-text-light/80 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};
