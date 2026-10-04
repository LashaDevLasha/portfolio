import Image from "next/image";
import Link from "next/link";
import portrait from "@/assets/me.jpg";
import { MotionEffects } from "@/components/MotionEffects";
import { ScrambleHeading } from "@/components/ScrambleHeading";
import { site } from "@/content/site";

export default function Home() {
  return (
    <main id="content">
      <MotionEffects />
      <section className="hero hero-page" aria-labelledby="intro-heading">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <ScrambleHeading
              as="h1"
              id="intro-heading"
              text={site.statement}
              delay={250}
              duration={1400}
            />
            <p className="summary">{site.summary}</p>
            <div className="actions">
              <Link className="button" href="/contact">
                Contact me
              </Link>
              <Link className="button button-ghost" href="/projects">
                View projects
              </Link>            </div>
          </div>
          <div className="portrait">
            <div className="portrait-grid" aria-hidden="true" />
            <span className="square square-1" aria-hidden="true" />
            <span className="square square-2" aria-hidden="true" />
            <span className="square square-3" aria-hidden="true" />
            <span className="square square-4" aria-hidden="true" />
            <Image
              src={portrait}
              alt={`Portrait of ${site.name}`}
              sizes="(max-width: 760px) 18rem, 26rem"
              placeholder="blur"
              preload
            />
          </div>
        </div>
      </section>
    </main>
  );
}
