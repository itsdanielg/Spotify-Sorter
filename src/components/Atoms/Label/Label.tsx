import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  className?: string;
}

export function Label({ label, className = "" }: LabelProps) {
  return <span className={twMerge("p-1 bg-stone-500 text-xs text-white rounded-md", className)}>{label}</span>;
}
