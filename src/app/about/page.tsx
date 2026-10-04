import type { Metadata } from "next";
import Link from "next/link";
import { MotionEffects } from "@/components/MotionEffects";
import { PageHeading, stagger } from "@/components/PageHeading";
import { site } from "@/content/site";

const { about } = site.sections;

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: site.about[0],
};

export default function AboutPage() {
  return (
    <main id="content" className="page page-about">
      <MotionEffects />
      <div className="wrap">
        <PageHeading title={about.title} />
        <div className="about-grid">
          <div className="about-copy" data-reveal>
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <section
            className="langs"
            aria-labelledby="langs-title"
            data-reveal
            style={stagger(1)}
          >
            <h2 id="langs-title" className="kicker">
              Languages
            </h2>
            <ul className="langs-list">
              {site.languages.map((language) => (
                <li key={language.name} className="lang">
                  <span className="lang-badge" aria-hidden="true">
                    {language.short}
                  </span>
                  <span className="lang-name">{language.name}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="actions actions-center page-next" data-reveal>
          <Link className="button" href="/projects">
            See my projects
          </Link>
          <Link className="button button-ghost" href="/skills">
            View skills
          </Link>        </div>
      </div>
    </main>
  );
}
