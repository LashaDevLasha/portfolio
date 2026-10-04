"use client";

import {
  Children,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function ProjectSlider({
  titles,
  children,
}: {
  titles: string[];
  children: ReactNode;
}) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let width = track.clientWidth;
    const observer = new ResizeObserver(() => {
      if (track.clientWidth === width) return;
      width = track.clientWidth;
      const slide = track.children[activeRef.current] as HTMLElement | undefined;
      if (slide) track.scrollLeft = slide.offsetLeft;
    });

    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { root: track, threshold: 0.6 },
    );

    for (const slide of track.children) observer.observe(slide);
    return () => observer.disconnect();
  }, [count]);

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.min(Math.max(index, 0), count - 1);
    if (target === active) return;
    const slide = track.children[target] as HTMLElement | undefined;
    if (!slide) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: slide.offsetLeft, behavior: reduce ? "auto" : "smooth" });
    setActive(target);

    const focused = document.activeElement;
    if (target === 0 && focused === prevRef.current) nextRef.current?.focus();
    if (target === count - 1 && focused === nextRef.current) prevRef.current?.focus();
  }

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    }
  }

  return (
    <section
      className="slider"
      aria-roledescription="carousel"
      aria-label="Projects"
      onKeyDown={onKeyDown}
      data-reveal
    >
      <div className="slider-bar">
        <p className="slider-count" aria-live="polite">
          <span className="slider-current">{pad(active + 1)}</span>
          <span aria-hidden="true"> / </span>
          <span className="sr-only"> of </span>
          {pad(count)}
          <span className="slider-title"> — {titles[active]}</span>
        </p>
      </div>

      <div className="slider-stage">
        {count > 1 ? (
          <>
            <button
              type="button"
              ref={prevRef}
              className="slider-arrow slider-prev"
              aria-label="Previous project"
              disabled={active === 0}
              onClick={() => goTo(active - 1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              ref={nextRef}
              className="slider-arrow slider-next"
              aria-label="Next project"
              disabled={active === count - 1}
              onClick={() => goTo(active + 1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </>
        ) : null}

        <ul className="slider-track" ref={trackRef}>
          {slides.map((slide, index) => (
            <li
              key={titles[index] ?? index}
              className="slider-slide"
              data-index={index}
              data-active={index === active}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}: ${titles[index]}`}
              inert={index !== active}
            >
              {slide}
            </li>
          ))}
        </ul>
      </div>

      {count > 1 ? (
        <div className="slider-dots">
          {titles.map((title, index) => (
            <button
              key={title}
              type="button"
              className="slider-dot"
              aria-label={`Show ${title}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
