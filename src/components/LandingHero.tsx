import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export function LandingHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      
      <div className="container relative z-10 px-6 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Life Strategy</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Discover Your
                <span className="block text-primary">Perfect Life Path</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get personalized career guidance, business predictions, and a step-by-step roadmap to success—crafted by AI, designed for you.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" data-testid="button-start-analysis">
                Start Your Free Analysis
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-learn-more">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-muted-foreground">Paths Discovered</div>
              </div>
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/20 p-8 backdrop-blur-sm border border-primary/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/5 to-transparent" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="text-6xl">🎯</div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold">Your Future Awaits</div>
                    <div className="text-muted-foreground">Let AI guide your journey</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
