import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, ExternalLink } from "lucide-react";

interface SessionCardProps {
  date: string;
  personalityType: string;
  personalityEmoji: string;
  topDirection: string;
  successRate: number;
}

export function SessionCard({ 
  date, 
  personalityType, 
  personalityEmoji,
  topDirection, 
  successRate 
}: SessionCardProps) {
  return (
    <Card className="p-6 hover-elevate active-elevate-2 cursor-pointer" data-testid="card-session">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{personalityEmoji}</span>
            <Badge variant="outline">{personalityType}</Badge>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <TrendingUp className="h-4 w-4" />
            <span className="font-bold">{successRate}%</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{topDirection}</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1" data-testid="button-view-session">
            View Details
          </Button>
          <Button variant="ghost" size="sm" data-testid="button-share-session">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
