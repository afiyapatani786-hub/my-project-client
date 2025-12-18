import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const sections = [
  { id: 1, name: "Personal Core" },
  { id: 2, name: "Skills & Talents" },
  { id: 3, name: "Passions & Interests" },
  { id: 4, name: "Goals & Vision" },
  { id: 5, name: "Reality Check" }
];

interface ProgressIndicatorProps {
  currentSection: number;
}

export function ProgressIndicator({ currentSection }: ProgressIndicatorProps) {
  return (
    <div className="py-6 px-6 border-b bg-card/50">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {sections.map((section, index) => (
            <div key={section.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center border-2 transition-all",
                  currentSection > section.id 
                    ? "bg-primary border-primary text-primary-foreground"
                    : currentSection === section.id
                    ? "border-primary text-primary"
                    : "border-border text-muted-foreground"
                )}>
                  {currentSection > section.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-medium">{section.id}</span>
                  )}
                </div>
                <span className={cn(
                  "text-xs mt-2 hidden md:block",
                  currentSection >= section.id ? "text-foreground" : "text-muted-foreground"
                )}>
                  {section.name}
                </span>
              </div>
              {index < sections.length - 1 && (
                <div className={cn(
                  "h-0.5 flex-1 mx-2",
                  currentSection > section.id ? "bg-primary" : "bg-border"
                )} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
