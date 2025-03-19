import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "UNW CS Club",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club.",
  metadataBase: new URL("https://unwcsclub.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="bg-background text-foreground">
          <div className="container mx-auto max-w-6xl">
            <header>
              <Navbar />
            </header>
            <main className="min-h-screen">{children}</main>
            <footer>
              <p>Footer</p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
