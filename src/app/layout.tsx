import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import MenuContextProvider from "@/hooks/MenuContextProvider";
export const metadata: Metadata = {
  title: "Ghanama Ahmed",
  description: "Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="root" className="bg-darkMode dark:bg-textLight">
          <div className="App relative">
            <MenuContextProvider>
              <Header />
            </MenuContextProvider>
            <div className="relative">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
