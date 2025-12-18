import { SessionCard as SessionCardComponent } from '../SessionCard';

export default function SessionCardExample() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <SessionCardComponent
        date="Dec 14, 2024"
        personalityType="The Creator"
        personalityEmoji="🎨"
        topDirection="AI Content Creator & Educator"
        successRate={85}
      />
    </div>
  );
}
