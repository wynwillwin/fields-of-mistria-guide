import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const quickGuides = [
  {
    title: "Gift Guide",
    description: "Learn the daily gift rules and find easy early-game presents.",
    href: "/guides/gift-guide/",
    status: "Available",
    tone: "peach",
  },
  {
    title: "Fish Guide",
    description: "Plan fishing trips by season, weather, location, and rarity.",
    href: "/guides/fish-guide/",
    status: "Available",
    tone: "sky",
  },
  {
    title: "Characters",
    description: "Meet the villagers and keep track of romance candidates.",
    href: "/guides/characters/",
    status: "Available",
    tone: "lilac",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Independent fan guide · English only</p>
            <h1>Your friendly field guide to Mistria</h1>
            <p className="hero-lede">
              Clear, source-backed help for gifts, villagers, fishing, farming,
              and the questions players search for most.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/guides/">
                Browse guides
              </Link>
              <Link className="button button-secondary" href="/guides/gift-guide/">
                Start with gifts
              </Link>
            </div>
            <div className="stat-row" aria-label="Site highlights">
              <div><strong>12</strong><span>romanceable characters</span></div>
              <div><strong>30+</strong><span>villagers to meet</span></div>
              <div><strong>16</strong><span>guides available</span></div>
            </div>
          </div>
          <figure className="official-figure hero-figure">
            <Image
              src="/images/screenshots/farm-and-town.png"
              alt="Fields of Mistria farmhouse, crops, and garden in spring"
              width={1920}
              height={1080}
              priority
            />
            <figcaption>Official gameplay screenshot · NPC Studio press kit</figcaption>
          </figure>
        </section>

        <section className="section shell" aria-labelledby="start-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Start here</p>
              <h2 id="start-heading">Popular player questions</h2>
            </div>
            <Link className="text-link" href="/guides/">View all guides →</Link>
          </div>
          <div className="card-grid three-column">
            {quickGuides.map((guide) => (
              <article className={`guide-card tone-${guide.tone}`} key={guide.title}>
                <div className="card-topline">
                  <span className="card-number">0{quickGuides.indexOf(guide) + 1}</span>
                  <span className="status live">
                    {guide.status}
                  </span>
                </div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <Link className="card-link" href={guide.href}>
                  Read the guide →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" aria-labelledby="world-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Inside the game</p>
              <h2 id="world-heading">See the world behind the guides</h2>
            </div>
            <a className="text-link" href="https://www.fieldsofmistria.com/presskit" target="_blank" rel="noreferrer">Official press kit ↗</a>
          </div>
          <div className="screenshot-grid">
            <figure className="official-figure">
              <Image src="/images/screenshots/relationships.png" alt="Villagers gathering by a river in fall" width={1920} height={1080} />
              <figcaption>Town life and fishing</figcaption>
            </figure>
            <figure className="official-figure">
              <Image src="/images/screenshots/fishing.png" alt="Celine and the player sharing hot cocoa in winter" width={1920} height={1080} />
              <figcaption>Character stories and relationships</figcaption>
            </figure>
            <figure className="official-figure">
              <Image src="/images/screenshots/home-and-crafting.png" alt="Caldarus appearing during a rainy story scene" width={1920} height={1080} />
              <figcaption>Magic, mystery, and story progression</figcaption>
            </figure>
          </div>
        </section>

        <section className="section shell split-section" aria-labelledby="browse-heading">
          <div className="paper-panel">
            <p className="eyebrow">Browse by topic</p>
            <h2 id="browse-heading">Sixteen focused guides, built around real demand</h2>
            <p>
              Every guide answers a distinct player question and links back to
              official pages, the community wiki, or current walkthroughs.
            </p>
            <div className="topic-list">
              <span>Relationships</span><span>Fishing</span><span>Farm life</span><span>Items</span>
            </div>
          </div>
          <aside className="source-panel" aria-labelledby="source-heading">
            <p className="eyebrow">How we research</p>
            <h2 id="source-heading">Facts first, AI second</h2>
            <p>
              Guides are checked against official pages, the community wiki,
              current walkthroughs, and player reports. AI helps organize the
              material; it does not invent game facts.
            </p>
            <a className="text-link" href="https://www.fieldsofmistria.com/" target="_blank" rel="noreferrer">
              Visit the official game site ↗
            </a>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
