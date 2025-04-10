import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { Toaster } from "@workspace/ui/components/sonner";
import { Providers } from "@/components/providers";
import RootNavBar from "./navbar";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>
          <main className="max-w-6xl mx-auto">
            <RootNavBar />
            <div className="p-4">{children}</div>
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
