import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>{site.role}</p>
      </div>
    </footer>
  );
}
