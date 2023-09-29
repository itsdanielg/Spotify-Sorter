import { ErrorPage } from "./ErrorPage";

export function TokenErrorPage() {
  return (
    <ErrorPage
      status={401}
      message={"Your access token has expired. Please log in again."}
    />
  );
}
