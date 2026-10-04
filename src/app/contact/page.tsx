import type { Metadata } from "next";
import { MotionEffects } from "@/components/MotionEffects";
import { PageHeading, stagger } from "@/components/PageHeading";
import { site } from "@/content/site";

const { contact } = site.sections;

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: contact.intro,
};

export default function ContactPage() {
  return (
    <main id="content" className="page page-contact">
      <MotionEffects />
      <div className="wrap contact-block">
        <PageHeading
          kicker={contact.kicker}
          title={contact.title}
          intro={contact.intro}
        />
        <div className="actions actions-center" data-reveal style={stagger(1)}>
          <a className="button" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a
            className="button button-ghost"
            href={site.cv.href}
            download={site.cv.fileName}
          >
            Download CV ↓
          </a>
        </div>
        {site.links.length > 0 ? (
          <ul className="social" data-reveal style={stagger(2)}>
            {site.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </main>
  );
}
