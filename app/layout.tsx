import type { Metadata } from "next";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "sonner";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Abhishek's Portfolio",
  description:
    "Frontend Engineer crafting fast, accessible web experiences. Projects, skills & work all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${outfit.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full leading-8 overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(16px) saturate(1.8)",
                WebkitBackdropFilter: "blur(16px) saturate(1.8)",
                borderRadius: "16px",
                color: "#009095",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
