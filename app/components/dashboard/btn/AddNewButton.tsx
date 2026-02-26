"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  label: string;
  icon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
}

export default function Button({
  href,
  onClick,
  label,
  icon,
  loading = false,
  disabled = false,
  type = "button",
  className = "",
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (loading || disabled) return;

    if (onClick) return onClick();
    if (href) return router.push(href);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={loading || disabled}
      className={`px-6 py-2 rounded-xl text-white font-medium transition-all duration-200 shadow-sm flex items-center justify-center gap-2
      ${
        loading || disabled
          ? "bg-green-400 cursor-not-allowed opacity-70"
          : "bg-green-600 hover:bg-green-700 hover:shadow-md"
      }
      ${className}`}
    >
      {loading && (
        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      )}

      {!loading && icon}

      <span>{loading ? "Creating..." : label}</span>
    </button>
  );
}