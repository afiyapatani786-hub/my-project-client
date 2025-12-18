import { Card } from "@/components/ui/card";

const earningsData = [
  {
    difficulty: "Easy",
    timeToFirst: "2-4 weeks",
    potentialRange: "₹10K-₹25K",
    scalability: 6
  },
  {
    difficulty: "Moderate",
    timeToFirst: "1-3 months",
    potentialRange: "₹25K-₹75K",
    scalability: 8
  },
  {
    difficulty: "Advanced",
    timeToFirst: "3-6 months",
    potentialRange: "₹75K-₹2L+",
    scalability: 9
  }
];

export function EarningsTable() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <span>💵</span>
          Earning Estimates
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Difficulty</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Time to First Earning</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Potential Range</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Scalability</th>
              </tr>
            </thead>
            <tbody>
              {earningsData.map((row, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-3 px-4">
                    <span className="font-medium">{row.difficulty}</span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{row.timeToFirst}</td>
                  <td className="py-3 px-4 font-mono text-primary">{row.potentialRange}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[100px]">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${row.scalability * 10}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{row.scalability}/10</span>
                    </div>
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
