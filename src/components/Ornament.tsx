import React from "react";

interface SparkleProps {
  size?: number;
  className?: string;
  color?: string;
}

export const SparkleOrnament: React.FC<SparkleProps> = ({
  size = 18,
  className = "",
  color = "#C7A15C",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
        fill={color}
      />
      <circle cx="12" cy="12" r="1.5" fill="#FFF8EE" />
    </svg>
  );
};

interface DiamondProps {
  size?: number;
  className?: string;
  variant?: "terracotta" | "gold";
}

export const DiamondOrnament: React.FC<DiamondProps> = ({
  size = 20,
  className = "",
  variant = "terracotta",
}) => {
  const fill = variant === "terracotta" ? "#A94E38" : "#C7A15C";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <rect
        x="12"
        y="1.5"
        width="14.8"
        height="14.8"
        transform="rotate(45 12 1.5)"
        fill={fill}
      />
      {/* Facet lines */}
      <path
        d="M12 2.5L21.5 12L12 21.5L2.5 12L12 2.5Z"
        stroke="#F5E9D5"
        strokeWidth="0.75"
        strokeOpacity="0.4"
      />
      <circle cx="12" cy="12" r="2" fill="#F5E9D5" fillOpacity="0.8" />
    </svg>
  );
};

export const VerticalHairline: React.FC<{ height?: string; className?: string }> = ({
  height = "h-8",
  className = "",
}) => {
  return (
    <div
      className={`w-[1px] bg-gradient-to-b from-transparent via-[rgba(245,233,213,0.3)] to-transparent ${height} ${className}`}
      aria-hidden="true"
    />
  );
};

export const PaginationDots: React.FC<{
  total?: number;
  active?: number;
  className?: string;
  onChange?: (idx: number) => void;
}> = ({ total = 3, active = 0, className = "", onChange }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`} role="tablist">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange?.(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`transition-all duration-300 rounded-full ${
            i === active
              ? "w-4 h-1.5 bg-gold"
              : "w-1.5 h-1.5 bg-ivory/30 hover:bg-ivory/60"
          }`}
        />
      ))}
    </div>
  );
};
