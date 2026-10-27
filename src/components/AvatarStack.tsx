import React from "react";
import { IMAGES } from "@/data/images";

interface AvatarStackProps {
  avatars?: string[];
  size?: "sm" | "md";
  className?: string;
}

export const AvatarStack: React.FC<AvatarStackProps> = ({
  avatars = [IMAGES.designerAvatar1, IMAGES.designerAvatar2],
  size = "md",
  className = "",
}) => {
  const sizeClasses = size === "sm" ? "w-7 h-7" : "w-8 h-8";

  return (
    <div className={`flex items-center -space-x-2.5 ${className}`}>
      {avatars.map((url, idx) => (
        <img
          key={idx}
          src={url}
          alt={`Jewellery Designer ${idx + 1}`}
          width={32}
          height={32}
          className={`${sizeClasses} rounded-full object-cover border border-ivory/40 shadow-sm relative`}
          style={{ zIndex: avatars.length - idx }}
          loading="lazy"
        />
      ))}
    </div>
  );
};
