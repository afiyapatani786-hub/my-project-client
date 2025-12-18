import { SessionCard } from "@/components/SessionCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Plus } from "lucide-react";
import { useLocation } from "wouter";

// Mock session data for prototype
const mockSessions = [
  {
    date: "Dec 14, 2024",
    personalityType: "The Creator",
    personalityEmoji: "🎨",
    topDirection: "AI Content Creator & Educator",
    successRate: 85
  },
  {
    date: "Dec 10, 2024",
    personalityType: "The Thinker",
    personalityEmoji: "🧠",
    topDirection: "No-Code SaaS Builder",
    successRate: 78
  }
];

export default function Dashboard() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Life Direction AI</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button 
              onClick={() => setLocation('/')}
              variant="outline"
              data-testid="button-home"
            >
              Home
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Welcome Header */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Welcome back, Sarah! 👋</h1>
            <div className="flex items-center gap-3">
              <p className="text-muted-foreground">Your personality type:</p>
              <Badge className="text-base px-3 py-1">
                <span className="mr-2">🎨</span>
                The Creator
              </Badge>
            </div>
          </div>
          <Button 
            size="lg" 
            className="gap-2"
            onClick={() => setLocation('/chat')}
            data-testid="button-new-analysis"
          >
            <Plus className="h-5 w-5" />
            Start New Analysis
          </Button>
        </div>

        {/* Sessions */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Your Sessions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {mockSessions.map((session, index) => (
              <SessionCard key={index} {...session} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <div className="p-6 rounded-lg bg-card border">
            <div className="text-3xl font-bold text-primary">2</div>
            <p className="text-sm text-muted-foreground mt-1">Total Sessions</p>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <div className="text-3xl font-bold text-primary">6</div>
            <p className="text-sm text-muted-foreground mt-1">Career Paths Explored</p>
          </div>
          <div className="p-6 rounded-lg bg-card border">
            <div className="text-3xl font-bold text-primary">82%</div>
            <p className="text-sm text-muted-foreground mt-1">Avg Success Rate</p>
          </div>
        </div>
      </main>
    </div>
  );
}
