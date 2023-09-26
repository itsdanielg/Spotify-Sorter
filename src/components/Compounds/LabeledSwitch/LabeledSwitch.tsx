import { Dispatch, SetStateAction } from "react";
import { Switch } from "../../Atoms";

interface LabeledSwitchProps {
  label: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export function LabeledSwitch({ label, checked, setChecked }: LabeledSwitchProps) {
  return (
    <label className="flex gap-2 text-white">
      {label}
      <Switch
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </label>
  );
}
