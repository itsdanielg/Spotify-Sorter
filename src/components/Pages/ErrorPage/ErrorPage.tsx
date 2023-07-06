interface ErrorPageProps {
  errorCode?: number;
}

export function ErrorPage({ errorCode = 404 }: ErrorPageProps) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col items-center p-6 gap-4 text-white text-2xl">
        <span>{errorCode}</span>
        <span>This page could not be found.</span>
      </div>
    </div>
  );
}
