import { Instrument_Serif, Manrope } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "next-themes";
import WorkButton from "./components/WorkButton";
import { Analytics } from "@vercel/analytics/next"

// Configure the Serif font (Editorial feel)
const instrumentSerif = Instrument_Serif({
  weight: ['400'], // It comes in 400 (regular) and italics automatically
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif', // We will use this variable in Tailwind
  display: 'swap',
})

// Configure the Sans font (UI/Clean feel)
const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

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
      <body className={`${manrope.variable} ${instrumentSerif.variable} antialiased bg-base-100 text-base-content`}>
        <WorkButton /> {/* Sits on top of everything */}
        <ThemeProvider attribute={["class", "data-theme"]} defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
        </ThemeProvider>
          <Analytics/>
      </body>
    </html>
  );
}