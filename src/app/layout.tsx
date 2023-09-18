import { FontKumbhSans, FontMontserrat } from "@lib/fonts";
import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "360DEGREES SYSTEMS CORPORATION",
  description: "Construction Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${FontMontserrat.variable} ${FontKumbhSans.variable}`}>{children}</body>
    </html>
  );
}
