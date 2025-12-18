import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  role: "ai" | "user";
  content: string;
  timestamp?: string;
}

export function ChatMessage({ role, content, timestamp }: ChatMessageProps) {
  const isAI = role === "ai";

  return (
    <div className={cn(
      "flex gap-4 items-start",
      isAI ? "justify-start" : "justify-end"
    )}>
      {isAI && (
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
          <Bot className="h-5 w-5 text-primary" />
        </div>
      )}
      
      <div className={cn(
        "max-w-[80%] space-y-2",
        isAI ? "items-start" : "items-end"
      )}>
        <div className={cn(
          "rounded-2xl px-6 py-4",
          isAI 
            ? "bg-card border-l-4 border-l-primary" 
            : "bg-primary text-primary-foreground ml-auto"
        )}>
          <p className="leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
        {timestamp && (
          <p className="text-xs text-muted-foreground px-2">{timestamp}</p>
        )}
      </div>

      {!isAI && (
        <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
          <User className="h-5 w-5" />
        </div>
      )}
    </div>
  );
}
