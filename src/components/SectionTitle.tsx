import React from "react";

interface SectionTitleProps {
  eyebrow?: string;
  titleRegularBefore?: string;
  emphasisWord?: string;
  titleRegularAfter?: string;
  subtitle?: string;
  action?: React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  titleRegularBefore,
  emphasisWord,
  titleRegularAfter,
  subtitle,
  action,
  align = "left",
  className = "",
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center justify-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 ${className}`}>
      <div className={`flex flex-col ${alignClasses}`}>
        {eyebrow && (
          <span className="micro-label text-ivory/60 mb-2">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] tracking-[0.04em] text-ivory">
          {titleRegularBefore && <span>{titleRegularBefore} </span>}
          {emphasisWord && (
            <span className="font-emphasis text-gold-light font-medium italic lowercase">
              {emphasisWord}{" "}
            </span>
          )}
          {titleRegularAfter && <span>{titleRegularAfter}</span>}
        </h2>
        {subtitle && (
          <p className="mt-2 text-xs md:text-sm text-text-secondary max-w-lg font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};
