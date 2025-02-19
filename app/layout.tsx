import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./Components/navigation/navigation";
import Antdesign from "./Components/antdesign/antdesign";
import Client from "./Components/client/client";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <Client>
          <Antdesign>
            <Navigation />
            {children}
          </Antdesign>
        </Client>
      </body>
    </html>
  );
}
