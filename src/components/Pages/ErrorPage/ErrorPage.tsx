import { Navigate, useLocation } from "react-router-dom";
import { SpotifyError } from "@/types";
import { RetryButton } from "@/components/Compounds";
import { Page } from "@/components/Templates";

export function ErrorPage() {
  const { state } = useLocation();
  if (!state) return <Navigate to="/" />;

  const { status, message }: SpotifyError = state;

  const newMessage = status === 401 ? "Your access token has expired. Please log in again." : message;

  return (
    <Page className="flex items-center justify-center">
      <div className="flex flex-col items-center p-6 gap-4 text-white text-2xl">
        {status && <span>{status}</span>}
        {message && <span>{newMessage}</span>}
        <RetryButton />
      </div>
    </Page>
  );
}
