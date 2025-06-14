
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Payment method icons (placeholders, feel free to add real SVGs or images)
const paymentMethods = [
  {
    key: "jazzcash",
    label: "JazzCash",
    icon: (
      <span className="inline-block w-6 h-6 rounded bg-[#fdc032] text-[#863286] flex items-center justify-center font-bold">
        JC
      </span>
    ),
  },
  {
    key: "easypaisa",
    label: "Easypaisa",
    icon: (
      <span className="inline-block w-6 h-6 rounded bg-[#46c95c] text-white flex items-center justify-center font-bold">
        EP
      </span>
    ),
  },
  {
    key: "card",
    label: "Credit Card",
    icon: (
      <span className="inline-block w-6 h-6 rounded bg-[#5e5ae0] text-white flex items-center justify-center font-bold">
        <svg width="20" height="10" fill="none"><rect width="20" height="10" rx="2" fill="currentColor"/><rect x="3" y="7" width="4" height="1.2" rx="0.3" fill="#fff"/></svg>
      </span>
    ),
  },
];

export function PaymentOptions({ amount }: { amount: number }) {
  const [selected, setSelected] = useState("jazzcash");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const payLabel =
    selected === "card"
      ? "Pay with Credit Card"
      : selected === "jazzcash"
      ? "Pay with JazzCash"
      : "Pay with Easypaisa";

  function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Payment Successful!",
        description: `Thank you for your order. Amount paid: PKR ${amount}`,
        duration: 4000,
      });
    }, 1300);
  }

  return (
    <form className="max-w-md mx-auto mt-10 bg-white border border-gray-200 rounded-xl p-6 mb-12 shadow-sm flex flex-col gap-5" onSubmit={handleCheckout}>
      <h3 className="text-lg font-semibold mb-2">Choose Payment Method</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {paymentMethods.map((method) => (
          <label
            key={method.key}
            className={`flex flex-col items-center gap-2 border-2 rounded-xl px-3 py-4 cursor-pointer ${
              selected === method.key
                ? "border-green-500 ring-2 ring-green-100 bg-green-50"
                : "border-gray-200 hover:bg-gray-50"
            } transition`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value={method.key}
              checked={selected === method.key}
              onChange={() => setSelected(method.key)}
              className="hidden"
            />
            {method.icon}
            <span className="font-medium text-sm mt-1">{method.label}</span>
          </label>
        ))}
      </div>
      <div>
        <Button
          type="submit"
          className="w-full btn-primary btn-animate text-base"
          disabled={submitting}
        >
          {payLabel} &nbsp; PKR&nbsp;
          <span className="inline-block font-semibold">{amount}</span>
        </Button>
        <div className="text-xs text-gray-500 pt-2 text-center">
          (Test only — no payment will be processed)
        </div>
      </div>
    </form>
  );
}
