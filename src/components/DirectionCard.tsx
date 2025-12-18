import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface DirectionCardProps {
  number: number;
  title: string;
  concept: string;
  earningMethod: string;
  whyItFits: string;
  steps: string[];
  successRate: number;
  tools: string[];
  bonusTip: string;
}

export function DirectionCard({
  number,
  title,
  concept,
  earningMethod,
  whyItFits,
  steps,
  successRate,
  tools,
  bonusTip
}: DirectionCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="p-8 space-y-6" data-testid={`card-direction-${number}`}>
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">🌈</span>
              <Badge variant="outline" className="text-lg px-3 py-1">
                Direction #{number}
              </Badge>
            </div>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-5 w-5" />
              <span className="text-2xl font-bold">{successRate}%</span>
            </div>
            <p className="text-xs text-muted-foreground">Success Rate</p>
          </div>
        </div>
        
        <p className="text-base text-foreground leading-relaxed">{concept}</p>
      </div>

      {/* Key Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">💰 Earning Method</p>
          <p className="text-base">{earningMethod}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">🧠 Why It Fits You</p>
          <p className="text-base">{whyItFits}</p>
        </div>
      </div>

      {/* Expandable Section */}
      {expanded && (
        <div className="space-y-6 pt-4 border-t">
          {/* Steps */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">🪜 Step-by-Step Plan</p>
            <ol className="space-y-2">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="font-mono text-sm text-primary">{index + 1}.</span>
                  <span className="text-base">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Tools */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">⚙️ Tools & Platforms</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge key={index} variant="secondary">{tool}</Badge>
              ))}
            </div>
          </div>

          {/* Bonus Tip */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm font-medium text-primary mb-2">🚀 Bonus Tip</p>
            <p className="text-base">{bonusTip}</p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <Button
        variant="outline"
        className="w-full gap-2"
        onClick={() => setExpanded(!expanded)}
        data-testid={`button-expand-${number}`}
      >
        {expanded ? (
          <>
            Show Less <ChevronUp className="h-4 w-4" />
          </>
        ) : (
          <>
            View Full Roadmap <ChevronDown className="h-4 w-4" />
          </>
        )}
      </Button>
    </Card>
  );
}
