import { MouseEventHandler } from "react";

export interface ButtonProps {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export function Button({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button
      className="p-3 rounded-lg bg-green disabled:opacity-30 hover:opacity-50 transition"
      disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  );
}
