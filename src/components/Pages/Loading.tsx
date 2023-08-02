import { Loader } from "../Atoms";

export function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Loader />
    </div>
  );
}
