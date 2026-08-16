import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Fields of Mistria Gift Guide — Easy Gifts & Friendship Tips",
  description:
    "A practical Fields of Mistria gift guide covering daily gift rules, easy presents for March, Juniper, and Reina, and a simple friendship routine.",
};

const picks = [
  { name: "March", birthday: "Spring 16", easy: "Copper, iron, or silver ore", special: "Perfect copper ore" },
  { name: "Juniper", birthday: "Fall 26", easy: "Middlemist, fog orchid, or poinsettia", special: "Mushroom Brew or Crystal Rose" },
  { name: "Reina", birthday: "Fall 12", easy: "Daffodil, garlic, or cheese", special: "Cabbage Slaw" },
];

export default function GiftGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="shell page-main article-layout">
        <article>
          <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/guides/">Guides</Link><span>/</span><span>Gift Guide</span></nav>
          <header className="page-hero article-hero">
            <p className="eyebrow">Relationships · Updated for 1.0</p>
            <h1>Fields of Mistria gift guide</h1>
            <p>
              Build friendship without turning every day into a spreadsheet. Start
              with the daily rules, then keep a few easy gifts ready for the people you visit most.
            </p>
          </header>

          <figure className="official-figure article-image">
            <Image src="/images/screenshots/fishing.png" alt="Celine and the player sharing hot cocoa in winter" width={1920} height={1080} priority />
            <figcaption>Official Celine relationship screenshot · NPC Studio press kit</figcaption>
          </figure>

          <section className="quick-answer" aria-labelledby="quick-heading">
            <p className="eyebrow">Quick answer</p>
            <h2 id="quick-heading">Give one useful gift per character each day</h2>
            <p>
              Loved gifts give the best progress, but common liked gifts are easier
              to sustain. Talk daily, save something special for birthdays, and use
              the in-game relationship menu to remember discovered preferences.
            </p>
          </section>

          <section className="article-section" id="rules" aria-labelledby="rules-heading">
            <h2 id="rules-heading">How gifting works</h2>
            <div className="rule-grid">
              <div><strong>1 per day</strong><span>Each character can receive one gift per day.</span></div>
              <div><strong>Talk too</strong><span>Conversation and gifts work together as a routine.</span></div>
              <div><strong>Repeat safely</strong><span>A dependable liked gift can be used again.</span></div>
              <div><strong>Track discoveries</strong><span>Known preferences appear in the relationship menu.</span></div>
            </div>
          </section>

          <section className="article-section" id="easy-gifts" aria-labelledby="easy-heading">
            <h2 id="easy-heading">Easy early-game picks</h2>
            <p>
              These are practical starting points, not a complete list. Keep common
              items for normal visits and reserve stronger options for birthdays.
            </p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Character</th><th>Birthday</th><th>Easy regular gifts</th><th>Birthday target</th></tr></thead>
                <tbody>
                  {picks.map((pick) => (
                    <tr key={pick.name}><th scope="row">{pick.name}</th><td>{pick.birthday}</td><td>{pick.easy}</td><td>{pick.special}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="article-section" id="routine" aria-labelledby="routine-heading">
            <h2 id="routine-heading">A low-stress friendship routine</h2>
            <ol className="step-list">
              <li><span>01</span><div><h3>Pick three people</h3><p>Focus on the villagers you naturally pass during your normal route.</p></div></li>
              <li><span>02</span><div><h3>Keep a small gift chest</h3><p>Store common liked items near the farmhouse instead of carrying everything.</p></div></li>
              <li><span>03</span><div><h3>Plan for birthdays</h3><p>Check the calendar early and save one stronger gift for each birthday.</p></div></li>
            </ol>
          </section>

          <section className="source-note" id="sources" aria-labelledby="sources-heading">
            <h2 id="sources-heading">Sources and update notes</h2>
            <p>
              This page summarizes current information from the community wiki and
              an updated player guide. Exact item lists can change after game updates,
              so check the full references when planning a rare gift.
            </p>
            <div className="source-links">
              <a href="https://fieldsofmistria.wiki.gg/wiki/Friendship#Gifts" target="_blank" rel="noreferrer">Community wiki: Friendship & gifts ↗</a>
              <a href="https://www.pcgamer.com/games/life-sim/fields-of-mistria-marriage-candidates-gift-guide/" target="_blank" rel="noreferrer">PC Gamer: Marriage candidates & gifts ↗</a>
            </div>
          </section>
        </article>

        <aside className="article-sidebar" aria-label="On this page">
          <strong>On this page</strong>
          <a href="#rules">How gifting works</a>
          <a href="#easy-gifts">Easy gift picks</a>
          <a href="#routine">Friendship routine</a>
          <a href="#sources">Sources</a>
          <Link href="/guides/">← All guides</Link>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
