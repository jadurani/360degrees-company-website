import { FontKumbhSans, FontMontserrat } from "@lib/fonts";
import { PreloadResources } from "@lib/preload-resources";
import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "360DEGREES SYSTEMS CORPORATION",
  description: "Building Trust, One Project at a Time | Construction Services",
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  PreloadResources()

  return (
    <html lang="en">
      <body className={`${FontMontserrat.variable} ${FontKumbhSans.variable}`}>
        {children}
        {modal}
      </body>
    </html>
  );
}
