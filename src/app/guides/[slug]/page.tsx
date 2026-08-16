import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { dynamicGuides, getGuide } from "@/lib/guides";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return dynamicGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return { title: "Guide not found" };
  }

  return {
    title: `Fields of Mistria ${guide.title} — Practical 1.0 Guide`,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="shell page-main article-layout">
        <article>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>/</span><Link href="/guides/">Guides</Link><span>/</span><span>{guide.title}</span>
          </nav>

          <header className="page-hero article-hero guide-title-block">
            <p className="eyebrow">{guide.category} · Source-backed guide</p>
            <h1>Fields of Mistria {guide.title.toLowerCase()}</h1>
            <p>{guide.description}</p>
          </header>

          <figure className="official-figure article-image">
            <Image src={guide.image} alt={guide.imageAlt} width={1920} height={1080} priority />
            <figcaption>{guide.imageCaption}</figcaption>
          </figure>

          <section className="quick-answer" aria-labelledby="quick-answer-heading">
            <p className="eyebrow">Quick answer</p>
            <h2 id="quick-answer-heading">What you need to know</h2>
            <p>{guide.quickAnswer}</p>
            <div className="takeaway-grid">
              {guide.takeaways.map((takeaway, index) => (
                <div key={takeaway}><strong>0{index + 1}</strong><span>{takeaway}</span></div>
              ))}
            </div>
          </section>

          {guide.sections.map((section, index) => (
            <section className="article-section" id={`section-${index + 1}`} key={section.heading}>
              <p className="section-kicker">Part {index + 1}</p>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul className="fact-list">
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
            </section>
          ))}

          <section className="source-note" id="sources" aria-labelledby="sources-heading">
            <h2 id="sources-heading">Sources and update notes</h2>
            <p>
              This guide summarizes current information from the references below.
              Game systems can change after patches, so use the linked source for
              version-sensitive tables, item values, and exact requirements.
            </p>
            <div className="source-links">
              {guide.sources.map((source) => (
                <a href={source.url} key={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a>
              ))}
            </div>
          </section>
        </article>

        <aside className="article-sidebar" aria-label="On this page">
          <strong>On this page</strong>
          <a href="#quick-answer-heading">Quick answer</a>
          {guide.sections.map((section, index) => (
            <a href={`#section-${index + 1}`} key={section.heading}>{section.heading}</a>
          ))}
          <a href="#sources">Sources</a>
          <Link href="/guides/">← All guides</Link>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
