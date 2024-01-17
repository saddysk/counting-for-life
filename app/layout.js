import { DM_Sans, Rajdhani } from "next/font/google";
import "./globals.css";

const font = Rajdhani({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Countdown for life",
  description: "Counting my beats every sec to meet you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
