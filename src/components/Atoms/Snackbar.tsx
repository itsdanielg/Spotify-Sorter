import { HTMLAttributes } from "react";
import ReactDOM from "react-dom";

const DEFAULT_SNACKBAR_STYLE = [
  "absolute",
  "bottom-4",
  "md:bottom-16",
  "right-1/2",
  "translate-x-1/2",
  "flex",
  "items-center",
  "justify-center",
  "rounded-lg"
].join(" ");

interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function Snackbar({ children, className = "", ...props }: SnackbarProps) {
  const snackbarDiv = document.getElementById("snackbar")!;

  return ReactDOM.createPortal(
    <div
      {...props}
      className={`${className} ${DEFAULT_SNACKBAR_STYLE}`}>
      {children}
    </div>,
    snackbarDiv
  );
}
