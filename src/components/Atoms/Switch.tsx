const TOGGLE_CONTAINER_STYLES = [
  "inline-flex",
  "shrink-0",
  "h-full",
  "w-full",
  "cursor-pointer",
  "rounded-full",
  "border-2",
  "border-transparent",
  "transition-colors",
  "duration-200",
  "ease-in-out"
].join(" ");

export interface SwitchProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  width?: string;
  height?: string;
  className?: string;
}

export function Switch({
  checked,
  onChange,
  disabled = false,
  width = "w-8",
  height = "h-5",
  className = ""
}: SwitchProps) {
  const backgroundClass = checked ? "bg-green" : "bg-gray-200";
  const growClass = checked ? "grow" : "grow-0";
  const disabledClass = disabled ? "opacity-30" : "";

  return (
    <span
      className={`${className} ${width} ${height} ${disabledClass}`}
      role="switch"
      aria-checked={checked}>
      <input
        disabled={disabled}
        className="hidden"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={`${TOGGLE_CONTAINER_STYLES} ${backgroundClass}`}>
        <span className={`${growClass} transition-all duration-200 ease-in-out`} />
        <span
          className="h-full aspect-square rounded-full bg-white shadow"
          aria-hidden="true"
        />
      </span>
    </span>
  );
}
