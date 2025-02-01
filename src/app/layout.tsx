import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "UNW CS Club - Official Site",
  description:
    "This is the official site of University of Northwestern " +
    "- St.Paul's very own Computer Science Club."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          <Box backgroundColor="Background">
            <header>
              <Navbar />
            </header>
            <main className="min-h-screen">{children}</main>
            <footer>
              <p>Footer</p>
            </footer>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
