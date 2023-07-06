const DEFAULT_SNACKBAR_STYLE = [
  "fixed",
  "bottom-10",
  "right-1/2",
  "translate-x-1/2",
  "flex",
  "items-center",
  "justify-center",
  "rounded-lg"
].join(" ");

interface SnackbarProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function Snackbar({ children, className = "", ...props }: SnackbarProps) {
  return (
    <div
      {...props}
      className={`${className} ${DEFAULT_SNACKBAR_STYLE}`}>
      {children}
    </div>
  );
}
