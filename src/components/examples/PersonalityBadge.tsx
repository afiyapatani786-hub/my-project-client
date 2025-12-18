import { PersonalityBadge as PersonalityBadgeComponent } from '../PersonalityBadge';

export default function PersonalityBadgeExample() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <PersonalityBadgeComponent
        type="creator"
        description="You belong here because your passion for design and emotional intelligence shine through. Creators like you thrive in environments where they can express themselves and connect with audiences on a deeper level. This means your journey will be about building something beautiful and meaningful."
      />
    </div>
  );
}
