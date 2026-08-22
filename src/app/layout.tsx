import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/google-analytics";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fields of Mistria Guide — Gifts, Fish, Characters & Farming",
    template: "%s | Mistria Field Notes",
  },
  description:
    "An independent Fields of Mistria guide with source-backed help for gifts, characters, fishing, farming, items, and early-game questions.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
