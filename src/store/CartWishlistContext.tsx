
import React, { createContext, useContext, useState, ReactNode } from "react";

type CartItem = { id: number; quantity: number };
type WishlistItem = number;

interface CartWishlistContextProps {
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  isInCart: (id: number) => boolean;
  wishlistToggle: (id: number) => void;
  isWishlisted: (id: number) => boolean;
}

const CartWishlistContext = createContext<CartWishlistContextProps | undefined>(undefined);

export const CartWishlistProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const addToCart = (id: number) => {
    setCart((prev) =>
      prev.some((item) => item.id === id)
        ? prev
        : [...prev, { id, quantity: 1 }]
    );
  };
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const isInCart = (id: number) => cart.some((item) => item.id === id);

  const wishlistToggle = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const isWishlisted = (id: number) => wishlist.includes(id);

  return (
    <CartWishlistContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        isInCart,
        wishlistToggle,
        isWishlisted,
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};

export const useCartWishlist = () => {
  const ctx = useContext(CartWishlistContext);
  if (!ctx) throw new Error("useCartWishlist must be used within a CartWishlistProvider");
  return ctx;
};
