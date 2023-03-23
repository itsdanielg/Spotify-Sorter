import { LoadingAnimation } from "../Atoms/LoadingAnimation";

export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <LoadingAnimation />
    </div>
  );
}