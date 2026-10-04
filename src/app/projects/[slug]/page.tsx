import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionEffects } from "@/components/MotionEffects";
import { ScrambleHeading } from "@/components/ScrambleHeading";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${site.name}`,
    description: project.summary,
  };
}

function stagger(index: number) {
  return { "--i": index } as CSSProperties;
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next =
    projects.length > 1 ? projects[(index + 1) % projects.length] : undefined;

  return (
    <main id="content" className="case">
      <MotionEffects />

      <section className="case-hero">
        <div className="wrap">
          <Link className="back-link" href="/projects">
            <span className="arrow">←</span> All projects
          </Link>
          <p className="kicker case-kicker">
            {project.client.name} · {project.role}
          </p>
          <ScrambleHeading
            as="h1"
            id="project-title"
            text={project.title}
            duration={900}
          />
          <p className="case-tagline">{project.tagline}</p>

          <dl className="case-meta">
            <div>
              <dt>Client</dt>
              <dd>{project.client.name}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>
                {project.period}
                <span className="case-meta-sub">{project.duration}</span>
              </dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>
                {project.team.map((member) => (
                  <span key={member.value} className="case-meta-line">
                    {member.label ? `${member.label}: ` : null}
                    {member.value}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="wrap">
        <figure className="case-media">
          <Image
            src={project.image}
            alt={project.imageAlt}
            sizes="(max-width: 1140px) 100vw, 70rem"
            placeholder="blur"
            preload
          />
        </figure>
      </div>

      <div className="wrap case-grid">
        <div className="case-main">
          <section aria-labelledby="overview-heading" data-reveal>
            <h2 className="case-heading" id="overview-heading">
              Overview
            </h2>
            <div className="case-prose">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="responsibilities-heading" data-reveal>
            <h2 className="case-heading" id="responsibilities-heading">
              Responsibilities
            </h2>
            <ol className="responsibilities">
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section
            className="case-outcome"
            aria-labelledby="outcome-heading"
            data-reveal
          >
            <h2 className="kicker" id="outcome-heading">
              Outcome
            </h2>
            <p>{project.outcome}</p>
          </section>
        </div>

        <aside className="case-aside">
          <section className="aside-card" data-reveal>
            <h2 className="kicker">Tools &amp; technologies</h2>
            <ul className="stack">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="aside-card" data-reveal style={stagger(1)}>
            <h2 className="kicker">About {project.client.name}</h2>
            {project.client.location ? (
              <p className="aside-location">{project.client.location}</p>
            ) : null}
            <p>{project.client.description}</p>
          </section>
          {project.href ? (
            <a
              className="button aside-button"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              {project.linkLabel ? `View ${project.linkLabel}` : "Visit live site"} ↗
            </a>
          ) : null}
        </aside>
      </div>

      <section className="case-footer">
        <div className="wrap case-footer-inner">
          <Link className="button button-ghost" href="/projects">
            ← All projects
          </Link>
          {next ? (
            <Link className="next-project" href={`/projects/${next.slug}`}>
              <span className="kicker">Next project</span>
              <span className="next-title">
                {next.title} <span className="arrow">→</span>
              </span>
            </Link>
          ) : (
            <Link className="button" href="/contact">
              Contact me
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
