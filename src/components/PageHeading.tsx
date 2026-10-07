import type { CSSProperties } from "react";
export function stagger(index: number) {
  return { "--i": index } as CSSProperties;
}

export function PageHeading({
  kicker,
  title,
  intro,
}: {
  kicker?: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="section-heading page-heading" data-reveal>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h1 id="page-title">{title}</h1>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  );
}
