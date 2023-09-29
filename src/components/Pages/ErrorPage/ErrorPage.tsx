import { SpotifyError } from "../../../types";
import { LogoutButton, RetryButton } from "../../Compounds";

interface ErrorPageProps extends SpotifyError {}

export function ErrorPage({ status, message }: ErrorPageProps) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center p-6 gap-4 text-white text-2xl">
        <span>{status}</span>
        <span>{message}</span>
        <RetryButton />
      </div>
    </div>
  );
}
