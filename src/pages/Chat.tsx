
import React from "react";
import { CustomerDashboardHeader } from "@/components/customer-dashboard/CustomerDashboardHeader";
import { CustomerDashboardShell } from "@/components/customer-dashboard/CustomerDashboardShell";
import { ChatSection } from "@/components/ChatSection";

// Sample store and product data for the chat, can be changed later
const storeName = "Creative Ceramics";
const storeLogo = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=96&q=80";
const productTitle = "Handmade Ceramic Vase";
const productImage = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=420&q=80";

export default function Chat() {
  return (
    <>
      <CustomerDashboardHeader />
      <CustomerDashboardShell>
        <div className="flex flex-col items-center justify-center w-full min-h-[70vh] px-2 py-10">
          <ChatSection
            storeName={storeName}
            storeLogo={storeLogo}
            productTitle={productTitle}
            productImage={productImage}
          />
        </div>
      </CustomerDashboardShell>
    </>
  );
}
