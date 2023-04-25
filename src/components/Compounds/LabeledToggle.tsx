import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Toggle } from "../Atoms/Toggle";

interface LabeledToggleProps {
  label: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  disabled?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export function LabeledToggle({ label, checked, setChecked }: LabeledToggleProps) {
  return (
    <label className="flex gap-2 text-white-1">
      {label}
      <Toggle
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </label>
  );
}
