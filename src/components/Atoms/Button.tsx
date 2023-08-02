import { ButtonHTMLAttributes } from "react";
import { Link, LinkProps } from "react-router-dom";

const DEFAULT_BUTTON_STYLE = [
  "p-3",
  "rounded-lg",
  "bg-green",
  "select-none",
  "disabled:opacity-60",
  "disabled:pointer-events-none",
  "md:hover:bg-greenHover",
  "transition-all",
  "duration-250"
].join(" ");

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

export function Button({ label, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${className} ${DEFAULT_BUTTON_STYLE}`}>
      {label}
    </button>
  );
}
interface LinkButtonProps extends LinkProps {
  to: string;
  label: string;
  disabled?: boolean;
  className?: string;
}

export function LinkButton({ label, to, disabled = false, className = "", ...props }: LinkButtonProps) {
  const disabledStyle = disabled ? "pointer-events-none select-none opacity-30" : "";
  return (
    <Link
      {...props}
      className={`${className} ${disabledStyle} ${DEFAULT_BUTTON_STYLE}`}
      to={to}>
      {label}
    </Link>
  );
}
