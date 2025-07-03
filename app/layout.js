import { Outfit, Spline_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
});

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata = {
  title: "ian_j.fears",
  description: "Senior Web & Multimedia Designer portfolio specializing in UI/UX and front-end development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${splineSans.variable} antialiased`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}