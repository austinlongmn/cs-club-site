import { Exo_2 } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "prismjs/themes/prism-tomorrow.min.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${exo2.className} ${jetbrainsMono.variable}`}>
      {children}
    </div>
  );
}
