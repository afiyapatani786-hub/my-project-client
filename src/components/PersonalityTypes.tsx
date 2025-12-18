import { Brain, Palette, Briefcase, Heart, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const personalities = [
  {
    icon: Brain,
    emoji: "🧠",
    title: "The Thinker",
    description: "Logical, analytical, and tech-minded. Perfect for strategic roles and technical fields.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Palette,
    emoji: "🎨",
    title: "The Creator",
    description: "Design-focused, artistic, and emotion-driven. Ideal for creative and expressive careers.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Briefcase,
    emoji: "💼",
    title: "The Builder",
    description: "Entrepreneurial, action-oriented doer. Built for business and leadership.",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Heart,
    emoji: "🌱",
    title: "The Healer",
    description: "Empathetic guide focused on teaching, helping, and making a difference.",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "The Visionary",
    description: "Bold risk-taker and innovator. Dreams big and makes it happen.",
    color: "from-yellow-500/20 to-amber-500/20"
  }
];

export function PersonalityTypes() {
  return (
    <section className="py-24 px-6 md:px-8 bg-card/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">Discover Your Type</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Which personality archetype resonates with your journey?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalities.map((type, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate active-elevate-2 cursor-pointer transition-all"
              data-testid={`card-personality-${index}`}
            >
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${type.color} opacity-50`} />
              <div className="relative space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{type.emoji}</div>
                  <type.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{type.description}</p>
              </div>
            </Card>
          ))}
          
          {/* CTA Card */}
          <Card className="p-6 bg-primary text-primary-foreground hover-elevate active-elevate-2 cursor-pointer flex items-center justify-center">
            <div className="text-center space-y-3">
              <div className="text-3xl">❓</div>
              <h3 className="text-xl font-semibold">Not Sure Yet?</h3>
              <p className="opacity-90">Take the assessment to find out!</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
