import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Agent {
  name: string;
  description: string;
}

interface ModuleCardProps {
  icon: string;
  title: string;
  agents: Agent[];
}

export const ModuleCard = ({ icon, title, agents }: ModuleCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-rh-text-light/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between gap-4 hover:bg-rh-light/50 transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 flex-1 text-left">
          <span className="text-3xl">{icon}</span>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-rh-text-light">
            {title}
          </h3>
        </div>
        <ChevronDown
          className={cn(
            "w-6 h-6 flex-shrink-0 text-rh-magenta transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[2000px]" : "max-h-0"
        )}
      >
        <div className="px-6 pb-6 space-y-4">
          <p className="text-sm text-rh-text-light/70 font-semibold mb-3">
            Agentes inclusos:
          </p>
          {agents.map((agent, idx) => (
            <div
              key={idx}
              className="flex gap-3 items-start p-4 bg-rh-light/50 rounded-xl"
            >
              <div className="w-2 h-2 rounded-full bg-rh-magenta mt-2 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-rh-text-light mb-1">
                  {agent.name}
                </h4>
                <p className="text-sm text-rh-text-light/70">
                  {agent.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
