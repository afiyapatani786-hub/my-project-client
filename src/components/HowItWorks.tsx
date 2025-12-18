import { MessageSquare, Brain, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Share Your Story",
    description: "Answer guided questions about your skills, passions, and goals in a friendly chat format."
  },
  {
    icon: Brain,
    title: "AI Deep Analysis",
    description: "Our AI mentor analyzes your profile and identifies the perfect career paths tailored for you."
  },
  {
    icon: Rocket,
    title: "Get Your Roadmap",
    description: "Receive 3 personalized directions with step-by-step plans, earnings potential, and success predictions."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to unlock your perfect career path
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -left-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
