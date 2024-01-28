import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Menu from "@/components/menu";

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
          <div className="App">
            <Header />
            <div className="relative">
              {children}
              <Menu />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
