import type { Metadata } from "next";
import Link from "next/link";
import { MotionEffects } from "@/components/MotionEffects";
import { PageHeading, stagger } from "@/components/PageHeading";
import { site } from "@/content/site";

const { skills } = site.sections;
export const metadata: Metadata = {
  title: `Skills — ${site.name}`,
  description: skills.intro,
};

export default function SkillsPage() {
  return (
    <main id="content" className="page page-skills">
      <MotionEffects />
      <div className="wrap">
        <PageHeading
          kicker={skills.kicker}
          title={skills.title}
          intro={skills.intro}
        />
        <ul className="project-grid">
          {site.skills.map((skill, index) => (
            <li
              key={skill.title}
              data-reveal={index % 2 === 0 ? "left" : "right"}
              style={stagger(index)}
            >
              <article className="project skill">
                <h2>{skill.title}</h2>
                <div className="skill-core">
                  <p className="kicker">Core skills</p>
                  <p className="skill-core-list">{skill.core.join(" · ")}</p>
                </div>
                <p>{skill.summary}</p>
              </article>
            </li>
          ))}
        </ul>
        <section className="toolbox" aria-labelledby="toolbox-title">
          <div className="toolbox-head" data-reveal>
            <h2 id="toolbox-title" className="kicker">
              Toolbox
            </h2>
          </div>
          <dl className="toolbox-list">
            {site.toolbox.map((group, index) => (
              <div
                key={group.title}
                className="toolbox-row"
                data-reveal={index % 2 === 0 ? "left" : "right"}
                style={stagger(index % 4)}
              >
                <dt>{group.title}</dt>
                <dd>
                  <ul className="chips">
                    {group.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>
        <div className="actions actions-center page-next" data-reveal>
          <Link className="button" href="/contact">
            Work with me
          </Link>
        </div>
      </div>
    </main>
  );
}
