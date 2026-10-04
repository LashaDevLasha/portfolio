import type { CSSProperties } from "react";
import { ScrambleHeading } from "@/components/ScrambleHeading";

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
      <ScrambleHeading as="h1" id="page-title" text={title} delay={150} />
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  );
}
