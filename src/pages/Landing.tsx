import { Button } from "@/components/ui/button";
import { LandingHero } from "@/components/LandingHero";
import { HowItWorks } from "@/components/HowItWorks";
import { PersonalityTypes } from "@/components/PersonalityTypes";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLocation } from "wouter";

export default function Landing() {
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
              onClick={() => setLocation('/chat')}
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <LandingHero />
        <HowItWorks />
        <PersonalityTypes />
        
        {/* CTA Section */}
        <section className="py-24 px-6 md:px-8">
          <div className="container max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Discover Your Path?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands who've found clarity and direction with AI guidance
            </p>
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => setLocation('/chat')}
              data-testid="button-start-free"
            >
              Start Free Analysis
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 px-6 md:px-8">
        <div className="container max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Life Direction AI. Empowering futures through intelligent guidance.</p>
        </div>
      </footer>
    </div>
  );
}
