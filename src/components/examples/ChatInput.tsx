import { ChatInput as ChatInputComponent } from '../ChatInput';

export default function ChatInputExample() {
  return (
    <div className="min-h-[200px] flex items-end">
      <ChatInputComponent 
        onSend={(msg) => console.log('Message sent:', msg)} 
        placeholder="Type your response here..."
      />
    </div>
  );
}
