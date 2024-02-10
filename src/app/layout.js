import { Inter as FontSans } from "next/font/google";
import "./styles/globals.css";
import { cn } from "../lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/navigations/header";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata = {
  title: "Chy. | WIP",
  description: "Carl Mitzchel Padua's portfolio | WIP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container flex min-h-screen flex-col py-4 md:w-[45rem] md:py-8 justify-center">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
