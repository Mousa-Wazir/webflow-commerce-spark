
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Payment method icons (styled badges)
const paymentMethods = [
  {
    key: "jazzcash",
    label: "JazzCash",
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full shadow bg-[#fdc032] text-[#863286] text-lg font-bold border-2 border-[#863286] animate-in fade-in">
        JC
      </span>
    ),
  },
  {
    key: "easypaisa",
    label: "Easypaisa",
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full shadow bg-[#46c95c] text-white text-lg font-bold border-2 border-[#28613c] animate-in fade-in">
        EP
      </span>
    ),
  },
  {
    key: "card",
    label: "Credit Card",
    icon: (
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full shadow bg-[#5e5ae0] text-white text-lg font-bold border-2 border-[#3736a3] animate-in fade-in">
        <svg width="28" height="16" fill="none">
          <rect width="28" height="16" rx="4" fill="currentColor"/>
          <rect x="5" y="12" width="7" height="2" rx="0.5" fill="#fff"/>
        </svg>
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
      ? "Credit Card"
      : selected === "jazzcash"
      ? "JazzCash"
      : "Easypaisa";

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
    <form
      className="max-w-md w-full mx-auto mt-8 bg-white border border-gray-200 rounded-2xl p-7 mb-14 shadow-xl flex flex-col gap-7 animate-fade-in"
      onSubmit={handleCheckout}
    >
      <h3 className="text-2xl font-semibold mb-1 text-center animate-fade-in">Checkout</h3>
      <div className="mb-1">
        <div className="flex flex-col items-center justify-center">
          <span className="uppercase tracking-wide text-xs text-gray-500">Amount to pay</span>
          <div className="flex items-center justify-center mt-1">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 text-2xl font-extrabold rounded-lg shadow-inner animate-scale-in">PKR {amount}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="text-[15px] font-medium pb-2 text-gray-800 text-center">Select Payment Method</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {paymentMethods.map((method) => (
            <label
              key={method.key}
              className={`flex flex-col items-center gap-2 rounded-2xl px-3 py-4 shadow-md cursor-pointer border-2 transition 
                ${
                  selected === method.key
                    ? "border-green-500 ring-2 ring-green-200 bg-green-50 scale-105 animate-scale-in"
                    : "border-gray-200 bg-white hover:bg-gray-50 hover:scale-105"
                }
              `}
              style={{ transition: 'all 0.18s cubic-bezier(.4,0,.2,1)' }}
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
              <span className="font-semibold text-sm mt-1 tracking-wide">{method.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <Button
          type="submit"
          className="w-full btn-primary btn-animate text-lg py-3 rounded-xl shadow-xl tracking-wide"
          disabled={submitting}
        >
          {submitting ? (
            <span>
              Processing <span className="animate-pulse">...</span>
            </span>
          ) : (
            <>
              Pay with {payLabel} <span className="ml-2 font-bold">PKR {amount}</span>
            </>
          )}
        </Button>
        <div className="text-xs text-gray-500 pt-2 text-center">
          (Test only — no payment will be processed)
        </div>
      </div>
    </form>
  );
}

