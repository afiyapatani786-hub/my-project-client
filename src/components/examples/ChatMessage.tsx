import { ChatMessage as ChatMessageComponent } from '../ChatMessage';

export default function ChatMessageExample() {
  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto">
      <ChatMessageComponent 
        role="ai" 
        content="Hello! I'm your AI Life Strategist. Let's discover your perfect career path together. What's your name, and how old are you?"
        timestamp="Just now"
      />
      <ChatMessageComponent 
        role="user" 
        content="Hi! I'm Sarah and I'm 24 years old."
        timestamp="Just now"
      />
      <ChatMessageComponent 
        role="ai" 
        content="Great to meet you, Sarah! 😊 Now, which country or city are you from? This helps me understand your local market opportunities."
      />
    </div>
  );
}
