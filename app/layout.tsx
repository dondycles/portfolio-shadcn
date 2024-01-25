import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { Code, Code2 } from "lucide-react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "John Rod Dondoyano",
  description: "John Rod Dondoyano - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased  text-sm sm:text-base flex flex-col max-h-[100dvh] h-screen `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="w-full system-padding flex items-center justify-between border-b-border border-solid border-[1px]">
            <h1 className="font-semibold text-2xl flex items-center gap-1">
              <Code /> JRD <Code2 />
            </h1>
            <ThemeToggle />
          </nav>
          <ScrollArea>{children}</ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}
