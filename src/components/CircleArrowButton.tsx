import React from "react";
import { ArrowUpRight } from "lucide-react";

interface CircleArrowButtonProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export const CircleArrowButton: React.FC<CircleArrowButtonProps> = ({
  size = "md",
  className = "",
  onClick,
  ariaLabel = "View details",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  }[size];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`group relative flex items-center justify-center rounded-full border border-ivory/25 bg-transparent text-ivory transition-all duration-300 hover:border-copper hover:bg-copper hover:text-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${sizeClasses} ${className}`}
    >
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </button>
  );
};
