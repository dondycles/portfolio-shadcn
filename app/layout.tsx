import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { Code, Code2, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "John Rod Dondoyano",
  description: "John Rod Dondoyano - Portfolio",
  metadataBase: new URL("https://johnrod.dev/"),
  themeColor: "#171717",
  twitter: {
    title: "John Rod Dondoyano",
    description: "John Rod Dondoyano - Portfolio",
    card: "summary_large_image",
    creator: "@dondycles",
    images: {
      url: "/summary.png",
      alt: "John Rod Dondoyano",
    },
  },
  openGraph: {
    title: "John Rod Dondoyano",
    description: "John Rod Dondoyano - Portfolio",
    type: "website",
    siteName: "John Rod Dondoyano",
    url: "https://johnrod.dev",
    images: [
      {
        url: "/summary.png",
        width: 800,
        height: 800,
      },
      {
        url: "/summary.png",
        width: 1920,
        height: 1080,
      },
    ],
  },
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
          <nav className="w-full system-padding flex items-center justify-between border-b-border border-b-solid border-b-[1px]">
            <p className="font-semibold text-2xl flex items-center gap-1">
              <Code /> JRD <Code2 />
            </p>
            <div className="flex gap-4">
              <ThemeToggle />
              <Button asChild variant={"default"}>
                <Link
                  href="/john-rod-dondoyano-resume.pdf"
                  target="_blank"
                  download
                >
                  Resume
                  <Download className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </nav>
          <ScrollArea>{children}</ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}
