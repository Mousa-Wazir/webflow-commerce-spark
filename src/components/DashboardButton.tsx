
import React from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
// Only allowed Lucide icons
import {
  Login,
  LogOut,
  "sign-up" as SignUp,
  "add-to-cart" as AddToCart,
  "browse-products" as BrowseProducts,
  "leave-a-review" as LeaveAReview,
  "chat-with-seller" as ChatWithSeller,
  "manage-profile" as ManageProfile,
  "back-to-homepage" as BackToHomepage,
} from "lucide-react";

// Map allowed icons to Lucide components
const ICON_MAP: { [key: string]: React.ElementType } = {
  login: Login,
  "sign-up": LogOut, // Used as a placeholder, replace with correct icon if available
  "add-to-cart": AddToCart,
  "browse-products": BrowseProducts,
  "leave-a-review": LeaveAReview,
  "chat-with-seller": ChatWithSeller,
  "manage-profile": ManageProfile,
  "back-to-homepage": BackToHomepage,
  logout: LogOut,
};

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
};

// Main style variants for colors, gradient, shadow (uses theme palette as requested)
const buttonVariants = cva(
  "relative group flex items-center justify-center font-bold tracking-wide transition-all duration-250 ease-in-out outline-none border-0 text-base sm:text-lg select-none whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white hover:from-black/90 hover:to-gray-800 shadow-xl",
        secondary:
          "bg-gradient-to-br from-gray-100 to-white text-gray-900 hover:bg-gray-200 shadow-lg",
        outline:
          "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-100 shadow",
        danger:
          "bg-gradient-to-br from-red-700 to-black text-white hover:from-red-800 shadow-xl",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
      fullWidth: false,
    },
  }
);

export const DashboardButton = React.forwardRef<HTMLButtonElement, DashboardButtonProps>(
  (
    {
      children,
      icon,
      "aria-label": ariaLabel,
      onClick,
      disabled,
      variant = "primary",
      ctaPulse = false,
      className,
      type = "button",
      fullWidth = false,
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
        className={cn(
          buttonVariants({ variant, fullWidth }),
          // Shape, padding, minimum touch area
          "rounded-2xl min-h-[44px] px-6 py-3 sm:py-3 sm:px-8",
          // Strong shadow and elevation, outline for focus  
          "shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
          // Pulse for CTAs (e.g. Add to Cart)
          ctaPulse ? "animate-pulse" : "",
          // Disabled
          disabled && "opacity-60 pointer-events-none",
          // Smooth transitions, smooth scale
          "transition-all duration-250 ease-in-out will-change-transform will-change-shadow",
          // Responsive font and size
          "text-base md:text-lg",
          // Layout for full-width on mobile
          "w-full sm:w-auto",
          className
        )}
        {...rest}
        /* Animate on mount: fade-in and slide up */
        style={{
          animation: "fade-in 0.33s cubic-bezier(.4,0,.2,1), slide-in-right 0.28s cubic-bezier(.4,0,.2,1)",
          ...(rest.style || {})
        }}
      >
        {/* Icon (slide right on hover, pulsing if CTA) */}
        {IconComp && (
          <span
            className={
              cn(
                "inline-flex mr-2 transition-all duration-250 group-hover:translate-x-1 group-active:scale-100",
                ctaPulse ? "animate-pulse" : ""
              )
            }
            aria-hidden="true"
          >
            <IconComp size={22} />
          </span>
        )}
        {/* Glow text and animate in */}
        <span
          className={
            cn(
              "transition-all duration-250 group-hover:text-white group-hover:drop-shadow-glow",
              "group-active:text-gray-200"
            )
          }
        >
          {children}
        </span>
        {/* Ripple on press, fade effect */}
        <span
          className="absolute inset-0 z-0 pointer-events-none opacity-0 group-active:opacity-100 rounded-2xl"
          style={{
            boxShadow: "0 0 0 2px #fff2, 0 4px 32px 0 #0004 inset",
            transition: "opacity 120ms linear"
          }}
        />
        {/* Focus border highlight */}
      </button>
    );
  }
);

DashboardButton.displayName = "DashboardButton";

/**
 * Example usage:
 * <DashboardButton icon="login" aria-label="Login" onClick={...}>Login</DashboardButton>
 * <DashboardButton variant="primary" icon="add-to-cart" ctaPulse>Add to Cart</DashboardButton>
 * <DashboardButton variant="outline" icon="browse-products">Browse Products</DashboardButton>
 * <DashboardButton variant="secondary" icon="manage-profile">Manage Profile</DashboardButton>
 * <DashboardButton variant="danger" icon="logout">Logout</DashboardButton>
 * <DashboardButton icon="back-to-homepage" fullWidth>Back to Homepage</DashboardButton>
 */
