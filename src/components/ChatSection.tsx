
import React from "react";
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

const mockMessages: ChatMessage[] = [
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

export const ChatSection: React.FC<ChatSectionProps> = ({
  storeName,
  storeLogo,
  productTitle,
  productImage
}) => {
  return (
    <div className="w-full max-w-3xl mt-7 rounded-2xl bg-white/80 border border-gray-200 shadow-lg backdrop-blur-sm overflow-hidden flex flex-col">
      <div className="px-6 py-4 border-b bg-gradient-to-r from-indigo-100 to-indigo-50 flex items-center gap-3">
        <MessageCircle className="w-6 h-6 text-indigo-600" />
        <span className="font-bold text-indigo-900 text-xl flex-1">Chat with Store</span>
        <div className="flex items-center gap-2">
          <img src={storeLogo} alt={storeName} className="w-8 h-8 rounded-full border" />
          <span className="text-gray-600 font-medium">{storeName}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-5 py-6 max-h-[350px] overflow-y-auto bg-gray-50/70">
        {mockMessages.map(msg =>
          msg.sender === "store" ? (
            <div key={msg.id} className="flex items-start gap-3 self-start max-w-[90%]">
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
                  <span className="text-xs text-gray-700 font-semibold line-clamp-1">{productTitle}</span>
                </div>
              </div>
            </div>
          ) : (
            <div key={msg.id} className="flex items-end gap-2 self-end max-w-[90%] flex-row-reverse">
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
      </div>
      {/* Message input */}
      <form
        className="w-full px-5 py-4 border-t bg-white/90 flex items-center gap-3"
        onSubmit={e => e.preventDefault()}
      >
        <Textarea
          placeholder="Type your message…"
          className="flex-1 min-h-[40px] rounded-xl border-indigo-200 text-base"
          rows={1}
          disabled
        />
        <Button type="submit" className="rounded-xl bg-indigo-600 hover:bg-indigo-700" disabled>
          Send
        </Button>
      </form>
      <div className="text-center text-xs text-gray-400 pb-2 px-4">
        *This is a mockup chat for UI demonstration only.
      </div>
    </div>
  );
};
