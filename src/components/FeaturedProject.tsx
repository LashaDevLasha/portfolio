import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

const STACK_LIMIT = 6;

export function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const shownStack = project.stack.slice(0, STACK_LIMIT);
  const hiddenCount = project.stack.length - shownStack.length;

  return (
    <article className="feature project">
      <div className="feature-media">
        <Image
          src={project.image}
          alt={project.imageAlt}
          sizes="(max-width: 640px) 100vw, 51rem"
          placeholder="blur"
          preload={index === 0}
        />
      </div>
      <div className="feature-body">
        <div className="project-meta">
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="feature-intro">
          <p className="kicker feature-client">
            {project.client.name} · {project.role}
          </p>
          <h2>
            <Link className="stretched" href={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h2>
          <p className="feature-tagline">{project.tagline}</p>
          <p>{project.summary}</p>
        </div>
        <div className="feature-details">
          <ul className="feature-highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="stack">
            {shownStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
            {hiddenCount > 0 ? (
              <li className="stack-more">+{hiddenCount} more</li>
            ) : null}
          </ul>
        </div>
        <div className="feature-actions">
          {project.href ? (
            <a
              className="feature-live"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              {project.linkLabel ?? "Live site"} ↗
            </a>
          ) : null}
          <span className="feature-cta" aria-hidden="true">
            View more <span className="arrow">→</span>
          </span>
        </div>
      </div>
    </article>
  );
}
