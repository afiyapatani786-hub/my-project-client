import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { useLocation } from "wouter";

// Mock chat data for prototype
const initialMessages: Array<{ role: "ai" | "user"; content: string; timestamp: string }> = [
  {
    role: "ai",
    content: "Hello! I'm your AI Life Strategist and mentor. I'm here to help you discover your perfect career path and create a personalized roadmap to success. 😊\n\nLet's start with getting to know you better. What's your full name and age?",
    timestamp: "Just now"
  }
];

export default function Chat() {
  const [, setLocation] = useLocation();
  const [messages, setMessages] = useState(initialMessages);
  const [currentSection] = useState(1); // Mock: tracking interview section

  const handleSendMessage = (content: string) => {
    // Add user message
    setMessages(prev => [...prev, { 
      role: "user" as const, 
      content, 
      timestamp: "Just now" 
    }]);

    // Simulate AI response after a brief delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "ai" as const,
        content: "Great! Thank you for sharing. Which country or city are you from? This helps me understand your local market opportunities.",
        timestamp: "Just now"
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setLocation('/')}
              data-testid="button-back"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Life Direction AI</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button 
              variant="outline"
              onClick={() => setLocation('/dashboard')}
              data-testid="button-dashboard"
            >
              My Sessions
            </Button>
          </div>
        </div>
      </header>

      {/* Progress */}
      <ProgressIndicator currentSection={currentSection} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="container max-w-4xl mx-auto px-6 py-8 space-y-6">
          {messages.map((msg, index) => (
            <ChatMessage key={index} {...msg} />
          ))}
        </div>
      </div>

      {/* Input */}
      <ChatInput onSend={handleSendMessage} />
    </div>
  );
}
