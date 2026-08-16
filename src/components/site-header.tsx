import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Mistria Field Notes home">
          <span className="brand-mark" aria-hidden="true">MF</span>
          <span><strong>Mistria Field Notes</strong><small>Independent player guide</small></span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/guides/">Guides</Link>
          <Link href="/guides/gift-guide/">Gift guide</Link>
        </nav>
      </div>
    </header>
  );
}
