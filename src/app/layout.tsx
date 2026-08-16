import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mistriafieldnotes.com"),
  title: {
    default: "Fields of Mistria Guide — Gifts, Fish, Characters & Farm Tips",
    template: "%s | Mistria Field Notes",
  },
  description:
    "An independent Fields of Mistria guide with source-backed help for gifts, characters, fishing, farming, items, and early-game questions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
