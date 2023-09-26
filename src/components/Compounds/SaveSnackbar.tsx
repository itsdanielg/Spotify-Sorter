import { Dispatch, SetStateAction } from "react";
import { Snackbar } from "../Atoms/Snackbar";

interface SaveSnackbar {
  label: string;
  showSnackbar: boolean;
  setShowSnackbar: Dispatch<SetStateAction<boolean>>;
  error?: boolean;
}

export function SaveSnackbar({ label, showSnackbar, setShowSnackbar, error }: SaveSnackbar) {
  const showResult = () => {
    setTimeout(() => {
      setShowSnackbar(false);
    }, 3000);
  };

  const visibility = showSnackbar ? "visible animate-snackbar" : "invisible";
  const errorStyle = error ? "bg-red" : "bg-green";

  if (showSnackbar) showResult();
  return (
    <Snackbar className={`${visibility} ${errorStyle} w-72 h-12`}>
      <span>{label}</span>
    </Snackbar>
  );
}
