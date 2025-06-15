
import React, { useRef, useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

type ChatMessage = {
  id: number;
  sender: "customer" | "store";
  text: string;
  timestamp: string;
};

type ChatSectionProps = {
  storeName: string;
  storeLogo: string;
  productTitle: string;
  productImage: string;
};

const initialMockMessages: ChatMessage[] = [
  {
    id: 1,
    sender: "customer",
    text: "Salam! Is this vase available in blue color?",
    timestamp: "2025-06-10 02:10 PM"
  },
  {
    id: 2,
    sender: "store",
    text: "Hello! Yes, blue color is available. Would you like to place an order?",
    timestamp: "2025-06-10 02:12 PM"
  },
  {
    id: 3,
    sender: "customer",
    text: "Yes, please. Can you also gift wrap it?",
    timestamp: "2025-06-10 02:13 PM"
  },
  {
    id: 4,
    sender: "store",
    text: "Sure! We offer free gift wrapping service. Your order will be ready for delivery tomorrow.",
    timestamp: "2025-06-10 02:15 PM"
  }
];

// Utility to get current formatted time
function getCurrentTime() {
  const now = new Date();
  let hour = now.getHours();
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  const min = String(now.getMinutes()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  return `${now.getFullYear()}-${month}-${date} ${hour}:${min} ${ampm}`;
}

export const ChatSection: React.FC<ChatSectionProps> = ({
  storeName,
  storeLogo,
  productTitle,
  productImage
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMockMessages);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simulate a professional store reply based on the user's input
  function getStoreReply(userMsg: string): string {
    if (/hello|salam|hi/i.test(userMsg)) {
      return `Hello! How can I assist you today regarding "${productTitle}"?`;
    }
    if (/price|cost/i.test(userMsg)) {
      return `The price for "${productTitle}" is competitive and reflects the quality. Would you like more details?`;
    }
    if (/color|colou?r/i.test(userMsg)) {
      return `Yes, we have "${productTitle}" available in different colors. Which color are you interested in?`;
    }
    if (/gift|wrap/i.test(userMsg)) {
      return `Absolutely! We provide complimentary gift wrapping for "${productTitle}".`;
    }
    if (/order|buy|purchase/i.test(userMsg)) {
      return `I'd be happy to assist you with the order of "${productTitle}". Please provide your preferred delivery details.`;
    }
    return `Thank you for your message! Please let me know if you have any questions about "${productTitle}".`;
  }

  // Handle sending a message
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || sending) return;

    const newMsg: ChatMessage = {
      id: messages.length + 1,
      sender: "customer",
      text: input.trim(),
      timestamp: getCurrentTime(),
    };

    setMessages(msgs => [...msgs, newMsg]);
    setInput("");
    setSending(true);

    // Simulate store reply after a delay
    setTimeout(() => {
      const storeReply: ChatMessage = {
        id: newMsg.id + 1,
        sender: "store",
        text: getStoreReply(newMsg.text),
        timestamp: getCurrentTime(),
      };
      setMessages(msgs => [...msgs, storeReply]);
      setSending(false);
    }, 900);
  };

  return (
    <div className="w-full max-w-3xl mt-7 rounded-2xl bg-white/80 border border-gray-200 shadow-lg backdrop-blur-sm overflow-hidden flex flex-col">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b bg-gradient-to-r from-indigo-100 to-indigo-50 flex items-center gap-3">
        <MessageCircle className="w-6 h-6 text-indigo-600" />
        <span className="font-bold text-indigo-900 text-xl flex-1">Chat with Store</span>
        <div className="flex items-center gap-2">
          <img src={storeLogo} alt={storeName} className="w-8 h-8 rounded-full border" />
          <span className="text-gray-600 font-medium">{storeName}</span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex flex-col gap-3 px-2 md:px-5 py-6 max-h-[350px] overflow-y-auto bg-gray-50/70">
        {messages.map(msg =>
          msg.sender === "store" ? (
            <div key={msg.id} className="flex items-start gap-3 self-start max-w-[95%] sm:max-w-[90%]">
              <img src={storeLogo} alt={storeName} className="w-8 h-8 rounded-full ring-1 ring-indigo-300" />
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold text-indigo-900 text-sm">{storeName}</span>
                  <span className="text-gray-400 text-xs">{msg.timestamp}</span>
                </div>
                <div className="bg-indigo-100 border border-indigo-200 rounded-2xl p-3 text-gray-900 text-sm shadow">
                  {msg.text}
                </div>
                {/* Product meta within store reply */}
                <div className="flex items-center gap-2 mt-2">
                  <img src={productImage} alt={productTitle} className="w-8 h-8 rounded-md border object-cover" />
                  <span className="text-xs text-gray-700 font-semibold line-clamp-1">
                    {productTitle}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div key={msg.id} className="flex items-end gap-2 self-end max-w-[95%] sm:max-w-[90%] flex-row-reverse">
              <div>
                <div className="flex items-center gap-2 mb-0.5 justify-end">
                  <span className="font-semibold text-indigo-700 text-sm">You</span>
                  <span className="text-gray-400 text-xs">{msg.timestamp}</span>
                </div>
                <div className="bg-white border border-indigo-200 rounded-2xl p-3 text-gray-900 text-sm shadow-sm">
                  {msg.text}
                </div>
              </div>
              <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="You" className="w-8 h-8 rounded-full border" />
            </div>
          )
        )}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Message input */}
      <form
        className="w-full px-2 md:px-5 py-4 border-t bg-white/90 flex items-center gap-3"
        onSubmit={handleSendMessage}
      >
        <Textarea
          placeholder="Type your message…"
          className="flex-1 min-h-[38px] sm:min-h-[40px] rounded-xl border-indigo-200 text-base"
          rows={1}
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={sending}
          maxLength={400}
        />
        <Button
          type="submit"
          className="rounded-xl bg-indigo-600 hover:bg-indigo-700 min-w-[78px]"
          disabled={!input.trim() || sending}
        >
          {sending ? "Sending…" : "Send"}
        </Button>
      </form>

      <div className="text-center text-xs text-gray-400 pb-2 px-4">
        *This is a demo chat. No real store communication is occurring.
      </div>
    </div>
  );
};

