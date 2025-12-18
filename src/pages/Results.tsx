import { DirectionCard } from "@/components/DirectionCard";
import { EarningsTable } from "@/components/EarningsTable";
import { PersonalityBadge } from "@/components/PersonalityBadge";
import { GrowthPlan } from "@/components/GrowthPlan";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Download, Share2, Sparkles } from "lucide-react";
import { useLocation } from "wouter";

export default function Results() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b">
        <div className="container max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setLocation('/chat')}
              data-testid="button-back-chat"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Your Personalized Roadmap</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" data-testid="button-download">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" size="sm" data-testid="button-share">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* User Summary */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <span>🧾</span>
              Your Profile Summary
            </h2>
            <p className="text-lg leading-relaxed">
              You're a creative and analytical individual with strong technical skills and a passion for helping others. Your ability to communicate complex ideas simply, combined with your desire for flexibility and impact, makes you uniquely positioned for modern digital careers. With 4-6 hours daily and moderate risk tolerance, you're ready to build something meaningful.
            </p>
          </div>
        </Card>

        {/* Personality Type */}
        <PersonalityBadge
          type="creator"
          description="You belong here because your passion for design and emotional intelligence shine through. Creators like you thrive in environments where they can express themselves and connect with audiences on a deeper level. This means your journey will be about building something beautiful and meaningful."
        />

        {/* Directions */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">🔮 Your Top 3 Future Directions</h2>
          
          <DirectionCard
            number={1}
            title="AI Content Creator & Educator"
            concept="Build a personal brand by creating educational content about AI and technology. Monetize through courses, consulting, and content sponsorships."
            earningMethod="Course sales, consulting, affiliate marketing"
            whyItFits="Your technical skills combined with communication ability make you perfect for translating complex topics into digestible content."
            steps={[
              "Learn content creation fundamentals and choose your niche",
              "Build your base on YouTube/LinkedIn with consistent posting",
              "Market yourself through SEO and community engagement",
              "Scale with courses, templates, and automation tools"
            ]}
            successRate={85}
            tools={["Notion", "Canva", "Teachable"]}
            bonusTip="Start by solving one specific problem your audience faces. Document your learning journey—people love authentic growth stories!"
          />

          <DirectionCard
            number={2}
            title="No-Code SaaS Builder"
            concept="Create and sell software solutions without traditional coding using no-code platforms. Build tools that solve real problems for specific niches."
            earningMethod="Subscription revenue, one-time sales, custom development"
            whyItFits="Your logical thinking and creativity allow you to design solutions while no-code tools handle the technical implementation."
            steps={[
              "Master no-code platforms like Bubble, Webflow, or Softr",
              "Identify a specific pain point in a niche market",
              "Build MVP and get early user feedback",
              "Scale through marketing automation and customer success"
            ]}
            successRate={78}
            tools={["Bubble", "Airtable", "Stripe"]}
            bonusTip="Talk to 10 potential customers before building anything. Their feedback will save you months of wasted effort!"
          />

          <DirectionCard
            number={3}
            title="Digital Product Designer & Consultant"
            concept="Help businesses create better user experiences through design consulting and selling design resources like templates and UI kits."
            earningMethod="Consulting fees, template sales, design subscriptions"
            whyItFits="Your eye for aesthetics and understanding of user needs positions you perfectly for high-value design work."
            steps={[
              "Build a strong portfolio with case studies",
              "Network in design communities and LinkedIn",
              "Offer free value to build credibility and leads",
              "Productize services and create passive income streams"
            ]}
            successRate={82}
            tools={["Figma", "Gumroad", "Framer"]}
            bonusTip="Specialize in one industry (e.g., SaaS, e-commerce) to become the go-to expert and charge premium rates."
          />
        </div>

        {/* Earnings */}
        <EarningsTable />

        {/* Growth Plan */}
        <GrowthPlan />

        {/* Discipline Advice */}
        <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/5">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <span>🔋</span>
              Focus & Discipline Advice
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium mb-2">Morning Energy Booster:</p>
                <p className="text-muted-foreground">Start with 10 minutes of focused breathing, followed by writing down your top 3 priorities for the day. This primes your mind for deep work.</p>
              </div>
              <div>
                <p className="font-medium mb-2">Work Pattern:</p>
                <p className="text-muted-foreground">Use 90-minute deep work blocks with 20-minute breaks. Your creative brain needs uninterrupted time to enter flow state.</p>
              </div>
              <div className="bg-primary/10 border-l-4 border-l-primary p-4 rounded">
                <p className="italic">"Success is not final, failure is not fatal: it is the courage to continue that counts." — Winston Churchill</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-8">
          <Button size="lg" onClick={() => setLocation('/dashboard')} data-testid="button-save-results">
            Save to Dashboard
          </Button>
          <Button size="lg" variant="outline" onClick={() => setLocation('/chat')} data-testid="button-new-analysis">
            Start New Analysis
          </Button>
        </div>
      </main>
    </div>
  );
}
