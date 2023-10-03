import { Footer } from "../Footer";

interface PageLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <main className="flex flex-col w-full h-full">
      {children}
      <Footer />
    </main>
  );
}
