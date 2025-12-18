import { Card } from "@/components/ui/card";

const growthData = [
  {
    year: 1,
    focus: "Learning + Setup",
    goal: "Build base",
    result: "Earn 1st income"
  },
  {
    year: 2,
    focus: "Creation + Branding",
    goal: "Build identity",
    result: "Grow stable"
  },
  {
    year: 3,
    focus: "Automation + Scaling",
    goal: "Expand online",
    result: "Achieve freedom"
  }
];

export function GrowthPlan() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <span>🌱</span>
          3-Year Growth Plan
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Year</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Focus Area</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Goal</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Result</th>
              </tr>
            </thead>
            <tbody>
              {growthData.map((row) => (
                <tr key={row.year} className="border-b last:border-0">
                  <td className="py-3 px-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <span className="font-bold text-primary">{row.year}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium">{row.focus}</td>
                  <td className="py-3 px-4 text-muted-foreground">{row.goal}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {row.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}
