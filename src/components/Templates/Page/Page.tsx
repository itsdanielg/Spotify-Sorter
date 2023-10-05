import { Navigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { SpotifyError } from "@/types";
import { Footer } from "@/components/Layouts";
import { Loading } from "../Loading";

interface PageProps {
  children: JSX.Element | JSX.Element[];
  isLoading?: boolean;
  error?: SpotifyError | null;
  className?: string;
}

export function Page({ children, isLoading = false, error, className = "" }: PageProps) {
  if (error) {
    return (
      <Navigate
        to="/error"
        state={error}
      />
    );
  }
  return (
    <div className="flex flex-col w-full h-screen overflow-x-hidden">
      <div className={twMerge("w-full grow", className)}>{isLoading ? <Loading /> : children}</div>
      <Footer />
    </div>
  );
}
