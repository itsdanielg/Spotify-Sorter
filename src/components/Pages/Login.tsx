import { LogButton } from "../Atoms/LogButton";
import { authURL } from "../Constants";

export function Login() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-2">
      <LogButton authURL={authURL} />
    </div>
  );
}
