"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/{}[]#$%&*+=";

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

/**
 * A heading that decodes `text` from random glyphs the first time it
 * scrolls into view. Assistive tech reads the final text via `aria-label`.
 */
export function ScrambleHeading({
  as: Tag,
  id,
  text,
  delay = 0,
  duration = 1100,
}: {
  as: "h1" | "h2";
  id?: string;
  text: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [output, setOutput] = useState(text);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const run = () => {
      let start: number | undefined;
      const tick = (now: number) => {
        start ??= now;
        const progress = Math.min((now - start) / duration, 1);
        const revealed = Math.floor(progress * text.length);
        setOutput(
          Array.from(text, (char, index) =>
            index < revealed || char === " " ? char : randomGlyph(),
          ).join(""),
        );
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = setTimeout(run, delay);
      },
      { threshold: 0.4 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [text, delay, duration]);

  return (
    <Tag ref={ref} id={id} aria-label={text}>
      <span aria-hidden="true">{output}</span>
    </Tag>
  );
}
