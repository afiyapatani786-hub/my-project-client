import { Card } from "@/components/ui/card";
import { Brain, Palette, Briefcase, Heart, Zap } from "lucide-react";

const personalities = {
  thinker: { icon: Brain, emoji: "🧠", title: "The Thinker", color: "from-blue-500/20 to-cyan-500/20" },
  creator: { icon: Palette, emoji: "🎨", title: "The Creator", color: "from-purple-500/20 to-pink-500/20" },
  builder: { icon: Briefcase, emoji: "💼", title: "The Builder", color: "from-orange-500/20 to-red-500/20" },
  healer: { icon: Heart, emoji: "🌱", title: "The Healer", color: "from-green-500/20 to-emerald-500/20" },
  visionary: { icon: Zap, emoji: "⚡", title: "The Visionary", color: "from-yellow-500/20 to-amber-500/20" }
};

interface PersonalityBadgeProps {
  type: keyof typeof personalities;
  description: string;
}

export function PersonalityBadge({ type, description }: PersonalityBadgeProps) {
  const personality = personalities[type];
  const Icon = personality.icon;

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <span>🧭</span>
          Your Personality Type
        </h3>
        
        <div className={`relative rounded-lg bg-gradient-to-br ${personality.color} p-6 border border-primary/20`}>
          <div className="flex items-center gap-4 mb-3">
            <div className="text-5xl">{personality.emoji}</div>
            <div>
              <h4 className="text-2xl font-bold">{personality.title}</h4>
              <Icon className="h-5 w-5 text-primary mt-1" />
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}
