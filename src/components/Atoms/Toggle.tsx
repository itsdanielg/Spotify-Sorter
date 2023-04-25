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

export interface ToggleProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export const Toggle = ({ checked, onChange, disabled = false, width, height, className }: ToggleProps) => {
  const backgroundClass = checked ? "bg-green-1" : "bg-gray-200";
  const growClass = checked ? "grow" : "grow-0";
  const defaultWidth = width == undefined ? "w-8" : `w-${width}`;
  const defaultHeight = height == undefined ? "h-5" : `h-${height}`;
  const disabledClass = disabled ? "opacity-30" : "";

  return (
    <span
      className={`${defaultWidth} ${defaultHeight} ${className} ${disabledClass}`}
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
};
