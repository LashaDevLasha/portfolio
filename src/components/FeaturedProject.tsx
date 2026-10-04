import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
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
          <span>{project.period}</span>
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
          <div className="feature-actions">
            <span className="feature-cta" aria-hidden="true">
              View case study <span className="arrow">→</span>
            </span>
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
          </div>
        </div>
        <div className="feature-details">
          <ul className="feature-highlights">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="stack">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
