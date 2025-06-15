
import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Package, Truck, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const orders = [
  {
    id: "2394",
    status: "active",
    date: "2025-06-12",
    total: "6,500 PKR",
    items: [
      {
        name: "Designer Handbag",
        quantity: 1,
        img: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        name: "Coffee Table",
        quantity: 1,
        img: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    ],
  },
  {
    id: "2382",
    status: "delivered",
    date: "2025-05-30",
    total: "2,200 PKR",
    items: [
      {
        name: "Traditional Dress",
        quantity: 1,
        img: "https://randomuser.me/api/portraits/women/67.jpg",
      },
    ],
  },
  {
    id: "2378",
    status: "cancelled",
    date: "2025-05-25",
    total: "1,200 PKR",
    items: [
      {
        name: "Wall Art",
        quantity: 1,
        img: "https://randomuser.me/api/portraits/men/24.jpg",
      },
    ],
  },
];

const statusTabs = [
  { value: "all", label: "All Orders" },
  { value: "active", label: "Active" },
  { value: "delivered", label: "Delivered" },
  { value: "cancelled", label: "Cancelled" },
];

const statusIcon = {
  active: <Truck className="text-green-600 w-5 h-5 mr-1 inline" />,
  delivered: <Package className="text-sky-700 w-5 h-5 mr-1 inline" />,
  cancelled: <XCircle className="text-red-600 w-5 h-5 mr-1 inline" />,
};

export default function Orders() {
  const [tab, setTab] = React.useState("all");
  const navigate = useNavigate();

  const filteredOrders =
    tab === "all"
      ? orders
      : orders.filter((order) => order.status === tab);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 pb-14 pt-8">
      <div className="max-w-3xl mx-auto px-3 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-3xl font-bold text-black mb-2 sm:mb-0">My Orders</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="text-indigo-700 text-sm font-semibold underline hover:text-indigo-900 transition"
          >
            &larr; Back to Dashboard
          </button>
        </div>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="flex flex-wrap gap-1 bg-white rounded-xl shadow border border-gray-200 mb-6 p-1">
            {statusTabs.map(({ value, label }) => (
              <TabsTrigger
                value={value}
                key={value}
                className="text-sm px-3 py-2 rounded-lg text-black data-[state=active]:bg-gray-50 data-[state=active]:shadow data-[state=active]:text-indigo-800 font-medium transition-all"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          {statusTabs.map(({ value }) => (
            <TabsContent
              value={value}
              key={value}
              className="focus:outline-none"
            >
              <div className="space-y-6">
                {filteredOrders.length === 0 && (
                  <div className="text-center py-8 text-gray-500">No orders found.</div>
                )}
                {filteredOrders.map((order) => (
                  <Card
                    key={order.id}
                    className="bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col sm:flex-row items-stretch text-black"
                  >
                    <CardHeader className="flex flex-row items-center justify-between bg-gray-50 p-4 sm:p-6 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none border-b sm:border-b-0 sm:border-r border-gray-200">
                      <div>
                        <CardTitle className="text-lg font-bold flex items-center">
                          {statusIcon[order.status as keyof typeof statusIcon]} Order #{order.id}
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-700 font-medium mt-1">
                          Placed: {order.date}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-4 sm:p-6 flex flex-col gap-2 justify-center">
                      <div className="flex gap-2 flex-wrap items-center mb-2">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex gap-2 items-center border border-gray-100 rounded-lg px-2 py-1 bg-gray-50">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-9 h-9 rounded-full object-cover border"
                            />
                            <span className="font-semibold text-sm text-black">{item.name}</span>
                            <span className="text-xs text-gray-600">x{item.quantity}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-base font-bold text-gray-900">
                          Total: {order.total}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${order.status === "active"
                          ? "bg-green-100 text-green-800"
                          : order.status === "delivered"
                          ? "bg-sky-100 text-sky-800"
                          : "bg-red-100 text-red-700"
                          }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
