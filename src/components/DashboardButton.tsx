
import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import {
  LogIn,
  LogOut,
  UserPlus,
  ShoppingCart,
  Search,
  PencilLine,
  MessageCircle,
  Settings,
  Home,
} from "lucide-react";

// Set up a map of expected icon names to Lucide React components
const ICON_MAP: { [key: string]: React.ElementType } = {
  login: LogIn,
  "sign-up": UserPlus,
  "add-to-cart": ShoppingCart,
  "browse-products": Search,
  "leave-a-review": PencilLine,
  "chat-with-seller": MessageCircle,
  "manage-profile": Settings,
  "back-to-homepage": Home,
  logout: LogOut,
};

// Highly professional, visually attractive, modern button style variants
const buttonVariants = cva(
  [
    "relative group flex items-center justify-center",
    "font-bold tracking-wide outline-none border-0 select-none whitespace-nowrap",
    "rounded-2xl min-h-[44px] px-6 py-3",
    "text-base md:text-lg",
    "transition-all duration-250 ease-in-out will-change-transform will-change-shadow",
    "shadow-lg focus-visible:ring-2 focus-visible:ring-gray-800 focus-visible:ring-offset-2",
    "focus-visible:outline-none",
    "overflow-hidden",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "bg-gradient-to-br from-[#2e2e2e] to-[#000]",
          "text-white",
          "hover:from-black hover:to-[#2e2e2e]",
          "shadow-xl",
        ].join(" "),
        secondary: [
          "bg-gradient-to-br from-gray-100 to-white text-gray-900",
          "hover:bg-gray-200 shadow-lg",
        ].join(" "),
        outline: [
          "bg-white border-2 border-[#2e2e2e] text-gray-900 hover:bg-gray-100 shadow",
        ].join(" "),
        danger: [
          "bg-gradient-to-br from-red-700 to-black text-white hover:from-red-800 shadow-xl",
        ].join(" "),
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      ctaPulse: {
        true: "animate-pulse",
        false: "",
      },
      disabled: {
        true: "opacity-60 pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      fullWidth: false,
      ctaPulse: false,
      disabled: false
    }
  }
);

type DashboardButtonProps = {
  children: React.ReactNode;
  icon?: keyof typeof ICON_MAP;
  "aria-label"?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline" | "danger";
  ctaPulse?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  style?: React.CSSProperties;
};

export const DashboardButton = React.forwardRef<HTMLButtonElement, DashboardButtonProps>(
  (
    {
      children,
      icon,
      "aria-label": ariaLabel,
      onClick,
      disabled = false,
      variant = "primary",
      ctaPulse = false,
      className = "",
      type = "button",
      fullWidth = false,
      style = {},
      ...rest
    },
    ref
  ) => {
    const IconComp = icon ? ICON_MAP[icon] : null;

    return (
      <button
        ref={ref}
        type={type}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={onClick}
        disabled={disabled}
        style={{
          animation:
            "fade-in 0.33s cubic-bezier(.4,0,.2,1), slide-in-up 0.32s cubic-bezier(.4,0,.2,1)",
          ...style,
        }}
        className={cn(
          buttonVariants({
            variant,
            fullWidth,
            ctaPulse,
            disabled,
          }),
          // Extra: larger touch area, grid & margin for all layouts
          "my-2 sm:my-0 mx-0 sm:mx-2",
          className
        )}
        {...rest}
      >
        {/* Icon (slides right on hover, glows on hover, pulse for CTA) */}
        {IconComp && (
          <span
            className={cn(
              "inline-flex mr-2 transition-all duration-250 group-hover:translate-x-1",
              ctaPulse ? "animate-pulse" : ""
            )}
            aria-hidden="true"
          >
            <IconComp size={22} />
          </span>
        )}
        {/* Glow and animated text */}
        <span
          className={cn(
            "transition-all duration-250 group-hover:text-white group-hover:drop-shadow-glow group-active:text-gray-200"
          )}
        >
          {children}
        </span>
        {/* Ripple effect on press */}
        <span
          className={cn(
            "absolute inset-0 z-0 pointer-events-none opacity-0 group-active:opacity-100 rounded-2xl"
          )}
          style={{
            boxShadow: "0 0 0 2px #fff2, 0 4px 32px 0 #0004 inset",
            transition: "opacity 120ms linear",
          }}
        />
      </button>
    );
  }
);

DashboardButton.displayName = "DashboardButton";

/**
 * Examples:
 * <DashboardButton icon="login" aria-label="Login" onClick={...}>Login</DashboardButton>
 * <DashboardButton variant="primary" icon="add-to-cart" ctaPulse>Add to Cart</DashboardButton>
 * <DashboardButton variant="outline" icon="browse-products">Browse Products</DashboardButton>
 * <DashboardButton variant="secondary" icon="manage-profile">Manage Profile</DashboardButton>
 * <DashboardButton variant="danger" icon="logout">Logout</DashboardButton>
 * <DashboardButton icon="back-to-homepage" fullWidth>Back to Homepage</DashboardButton>
 */
