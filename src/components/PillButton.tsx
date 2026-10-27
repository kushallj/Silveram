import React from "react";

interface PillButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline" | "terracotta";
  type?: "button" | "submit";
}

export const PillButton: React.FC<PillButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-sans text-[0.8rem] font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold";

  const variants = {
    primary:
      "border border-ivory/25 bg-gradient-to-r from-[#6B3A2A] to-[#3A1B14] px-6 py-2.5 text-ivory shadow-sm hover:from-[#7D4533] hover:to-[#4A241B] hover:border-ivory/40",
    outline:
      "border border-ivory/30 bg-transparent px-5 py-2 text-ivory hover:border-gold hover:text-gold",
    terracotta:
      "border border-terracotta/40 bg-gradient-to-r from-terracotta-light to-terracotta px-6 py-2.5 text-ivory hover:brightness-110",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
