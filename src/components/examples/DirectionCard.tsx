import { DirectionCard as DirectionCardComponent } from '../DirectionCard';

export default function DirectionCardExample() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <DirectionCardComponent
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
    </div>
  );
}
