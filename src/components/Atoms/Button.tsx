import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

const DEFAULT_BUTTON_STYLE = [
  "p-3",
  "rounded-lg",
  "bg-green-1",
  "disabled:opacity-30",
  "hover:opacity-50",
  "transition-all"
].join(" ");

interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

interface LinkButtonProps {
  label: string;
  to: string;
  disabled?: boolean;
  className?: string;
}

export function Button({ label, onClick, disabled = false, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${className} ${DEFAULT_BUTTON_STYLE}`}
      disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  );
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
