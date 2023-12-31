import { ButtonHTMLAttributes, MouseEventHandler } from "react";

const DEFAULT_HAMBURGER_STYLE = [
  "relative",
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "w-8",
  "aspect-square",
  "[&>*]:w-full",
  "[&>*]:h-[2px]",
  "[&>*]:rounded-lg",
  "[&>*]:bg-green",
  "[&>*]:transition-all"
].join(" ");

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  toggle: boolean;
  className?: string;
}

export function Hamburger({ toggle = true, className = "", ...props }: ButtonProps) {
  const toggleStyleTop = toggle ? "translate-y-[-100%] opacity-0" : "";
  const toggleStyleMiddleTop = toggle ? "rotate-45" : "";
  const toggleStyleMiddleBottom = toggle ? "rotate-[-45deg]" : "";
  const toggleStyleBottom = toggle ? "translate-y-[100%] opacity-0" : "";
  return (
    <button
      {...props}
      className={`${className} ${DEFAULT_HAMBURGER_STYLE}`}>
      <div className={`${toggleStyleTop} mb-2`} />
      <div className={`${toggleStyleMiddleTop} absolute`} />
      <div className={`${toggleStyleMiddleBottom} absolute`} />
      <div className={`${toggleStyleBottom} mt-2`} />
    </button>
  );
}
