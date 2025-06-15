
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

// Icon mapping
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

// Enhanced: Responsive & highly professional button style variants
const buttonVariants = cva(
  [
    "relative group flex items-center justify-center",
    "font-bold tracking-wide outline-none border-0 select-none whitespace-nowrap",
    // Responsive: full on mobile, adaptive on tablet/desktop
    "w-full min-h-[48px] px-4 py-3",
    "sm:w-auto sm:min-w-[160px] sm:px-8 sm:py-3",
    "md:min-w-[188px] md:px-10 md:py-3",
    "lg:min-w-[222px] lg:px-12",
    "rounded-2xl",
    // Typography responsiveness
    "text-[1rem] sm:text-[1.07rem] md:text-lg lg:text-xl",
    // Shadow & transition
    "transition-all duration-250 ease-in-out will-change-transform will-change-shadow",
    // Shadow effect
    "shadow-md hover:shadow-xl focus-visible:shadow-2xl",
    "focus-visible:ring-2 focus-visible:ring-gray-800 focus-visible:ring-offset-2",
    "focus-visible:outline-none",
    "overflow-hidden",
    // Alignment margin
    "my-2 sm:my-0 mx-0 sm:mx-2",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          [
            "bg-gradient-to-br from-[#2e2e2e] to-[#000]",
            "text-white",
            "hover:from-black hover:to-[#2e2e2e]",
            "shadow-xl"
          ].join(" "),
        secondary:
          [
            "bg-gradient-to-br from-gray-100 to-white text-gray-900",
            "hover:bg-gray-200 shadow-lg"
          ].join(" "),
        outline:
          [
            "bg-white border-2 border-[#2e2e2e] text-gray-900 hover:bg-gray-100 shadow"
          ].join(" "),
        danger:
          [
            "bg-gradient-to-br from-red-700 to-black text-white hover:from-red-800 shadow-xl"
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
      disabled: false,
    },
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
          // Responsive vertical margin spacing for mobile/tablet/desktop
          "my-2 sm:my-2 md:my-2 lg:my-0",
          // Responsive grid/inline layout support (handled by parent grid)
          className
        )}
        {...rest}
      >
        {/* Icon (slides right on hover, responsive spacing) */}
        {IconComp && (
          <span
            className={cn(
              "inline-flex transition-all duration-250 group-hover:translate-x-1 group-hover:drop-shadow-lg",
              "mr-2 text-[1.15em] sm:mr-3 md:mr-4",
              ctaPulse ? "animate-pulse" : ""
            )}
            aria-hidden="true"
          >
            <IconComp size={22} />
          </span>
        )}
        {/* Glowing animated text with responsive font size */}
        <span
          className={cn(
            "transition-all duration-250 group-hover:text-white group-hover:drop-shadow-[0_0_6px_#fff8,0_2px_6px_#0005] group-active:text-gray-200",
            "font-bold tracking-tight sm:tracking-wide"
          )}
        >
          {children}
        </span>
        {/* Ripple effect on press (visible on active) */}
        <span
          className={cn(
            "absolute inset-0 z-0 pointer-events-none opacity-0 group-active:opacity-100 rounded-2xl",
            "transition-opacity duration-150"
          )}
          style={{
            boxShadow:
              "0 0 0 2px #fff2, 0 4px 32px 0 #0004 inset, 0 1px 16px 0 #1117",
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
