import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reflection",
  description: "Understand Yourself",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/reflection.svg",
        href: "/reflection.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/reflection.svg",
        href: "/reflection.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="reflection-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
