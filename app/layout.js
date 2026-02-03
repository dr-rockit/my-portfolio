import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import WorkButton from "./components/WorkButton";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "ian_j.fears",
  description: "Senior Web & Multimedia Designer portfolio specializing in UI/UX and front-end development.",
};

const workStatus = {
  text: "Available for work",
  active: true, // Set to false to turn the dot red
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} antialiased bg-base-100 text-base-content`}>
        <WorkButton /> {/* Sits on top of everything */}
        <ThemeProvider attribute={["class", "data-theme"]} defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}