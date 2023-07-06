import { forwardRef, useImperativeHandle, useState } from "react";
import { Snackbar } from "../Atoms/Snackbar";
import { LoadingAnimation } from "../Atoms/LoadingAnimation";

export type SavePlaylistSnackbarRef = {
  show(): void;
};

interface SavePlaylistSnackbar {
  label: string;
  isSaving: boolean;
  error?: boolean;
}

export const SavePlaylistSnackbar = forwardRef<SavePlaylistSnackbarRef, SavePlaylistSnackbar>(
  ({ label, isSaving, error }: SavePlaylistSnackbar, ref) => {
    const [showSnackbar, setShowSnackbar] = useState(false);

    useImperativeHandle(ref, () => ({
      show() {
        setShowSnackbar(true);
      }
    }));

    const showResult = () => {
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    };

    const visibility = showSnackbar && !isSaving ? "visible animate-fade" : showSnackbar ? "visible " : "invisible";
    const errorStyle = !error ? "bg-green-1" : error ? "bg-red-500" : "bg-white-1";

    if (!isSaving && showSnackbar) showResult();
    return (
      <Snackbar className={`${visibility} ${errorStyle} w-48 h-20`}>
        {isSaving ? (
          <div className="w-12">
            <LoadingAnimation width="w-full" />
          </div>
        ) : (
          <span>{label}</span>
        )}
      </Snackbar>
    );
  }
);
