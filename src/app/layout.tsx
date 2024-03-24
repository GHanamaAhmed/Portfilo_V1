import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import MenuContextProvider from "@/hooks/MenuContextProvider";
import DarkContextProvider from "@/hooks/darkContextProvider";
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
        <div id="root" className="dark:bg-darkMode">
          <DarkContextProvider>
            <div className="App relative">
              <MenuContextProvider>
                <Header />
              </MenuContextProvider>
              <div className="relative">{children}</div>
            </div>
          </DarkContextProvider>
        </div>
      </body>
    </html>
  );
}
