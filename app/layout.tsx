import { ReactNode } from "react";
// Ini akan memaksa Next.js membaca ulang file CSS-nya
import "./globals.css";

export const metadata = {
  title: "Zildjian | Premium Drumsticks",
  description: "Engineered for The Pocket.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
