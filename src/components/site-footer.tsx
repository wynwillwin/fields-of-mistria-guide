import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <strong>Mistria Field Notes</strong>
          <p>A small, independent guide made for players who want quick, reliable answers.</p>
        </div>
        <div className="footer-links">
          <Link href="/guides/">All guides</Link>
          <a href="https://www.fieldsofmistria.com/" target="_blank" rel="noreferrer">Official site ↗</a>
          <a href="https://fieldsofmistria.wiki.gg/" target="_blank" rel="noreferrer">Community wiki ↗</a>
        </div>
        <p className="disclaimer">
          This is an unofficial fan project and is not affiliated with NPC Studio.
          Game names and trademarks belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}
