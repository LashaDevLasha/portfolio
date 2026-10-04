"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

const nav = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header" data-open={open}>
      <div className="wrap header-inner">
        <Link className="brand" href="/" onClick={close}>
          <span className="mark" aria-hidden="true">
            {site.name.slice(0, 1)}
          </span>
          <span className="script">{site.name}</span>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
        </button>
        <nav className="nav" id="site-nav" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="button"
            href="/contact"
            onClick={close}
            aria-current={isActive(pathname, "/contact") ? "page" : undefined}
          >
            Contact me
          </Link>
        </nav>
      </div>
    </header>
  );
}
