import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryProvider from "@/providers/react-query-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "autocom",
  description: "Automate DMs and Comments on Instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={jakarta.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactQueryProvider>
        {children}
            </ReactQueryProvider>
        </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}
