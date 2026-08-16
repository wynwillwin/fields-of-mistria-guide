import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GuideBrowser } from "@/components/guide-browser";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Fields of Mistria Guides — Gifts, Fish, Romance & Farm Tips",
  description:
    "Browse Fields of Mistria guides for gifts, characters, romance, fishing, farming, items, mods, money, and beginner questions.",
};

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />
      <main className="shell page-main">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Guides</span></nav>
        <header className="page-hero compact">
          <p className="eyebrow">Guide library</p>
          <h1>Fields of Mistria guides</h1>
          <p>
            Sixteen focused pages mapped to real player questions. Every guide is
            available now and includes the sources used to verify its core information.
          </p>
        </header>
        <figure className="official-figure library-banner">
          <Image src="/images/screenshots/farming.png" alt="The player speaking with Josephine during a spring festival" width={1920} height={1080} priority />
          <figcaption>Official Fields of Mistria screenshot · NPC Studio press kit</figcaption>
        </figure>
        <GuideBrowser />
      </main>
      <SiteFooter />
    </>
  );
}
