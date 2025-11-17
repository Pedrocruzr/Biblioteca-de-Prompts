import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  children: React.ReactNode;
}

export const CTAButton = ({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: CTAButtonProps) => {
  return (
    <button
      className={cn(
        "font-heading font-bold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-rh-cta-pink/30",
        {
          "bg-gradient-to-r from-rh-cta-pink to-rh-cta-orange text-white shadow-soft hover:shadow-glow hover:scale-105":
            variant === "primary",
          "border-2 border-current text-inherit hover:bg-white/10":
            variant === "secondary",
          "px-8 py-4 text-base": size === "default",
          "px-10 py-5 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
