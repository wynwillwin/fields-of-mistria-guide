"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { guides } from "@/lib/guides";

const filters = ["All", "Relationships", "Fishing", "Farm", "Items", "Setup"] as const;

export function GuideBrowser() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? guides : guides.filter((guide) => guide.category === filter);

  return (
    <>
      <div className="filter-row" aria-label="Filter guides by topic">
        {filters.map((item) => (
          <button
            className={filter === item ? "active" : ""}
            key={item}
            onClick={() => setFilter(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="guide-list">
        {visible.map((guide) => (
          <article className="guide-list-card" key={guide.keyword}>
            <Image className="guide-list-image" src={guide.image} alt="" width={320} height={180} />
            <div className="guide-list-copy">
              <span className="category-label">{guide.category}</span>
              <h2>{guide.title}</h2>
              <p>{guide.description}</p>
              <small>Target query: {guide.keyword}</small>
            </div>
            <Link className="button button-small" href={guide.href}>Read guide</Link>
          </article>
        ))}
      </div>
    </>
  );
}
