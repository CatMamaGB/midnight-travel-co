import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import {
  CONTACT_EMAIL,
  DESTINATION_LINKS,
  LEGAL_LINKS,
  PLANNING_TOOL_LINKS,
  PRIMARY_NAV_LINKS,
  VACATION_TYPE_LINKS,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-midnight/10 bg-midnight text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr_1.2fr]">
        <div className="space-y-4">
          <BrandLogo dark />
          <p className="max-w-md text-sm leading-7 text-cloud/80">
            Disney and Universal vacation planning with personalized itineraries, trusted park
            guidance, and concierge-level support from first idea to final details.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Navigate
          </h3>
          <div className="space-y-3 text-sm text-cloud/80">
            {PRIMARY_NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Destinations
            </h3>
            <div className="space-y-3 text-sm text-cloud/80">
              {DESTINATION_LINKS.slice(0, 4).map((link) => (
                <div key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Vacation Types
            </h3>
            <div className="space-y-3 text-sm text-cloud/80">
              {VACATION_TYPE_LINKS.slice(0, 4).map((link) => (
                <div key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Planning Tools
          </h3>
          <div className="space-y-3 text-sm text-cloud/80">
            {PLANNING_TOOL_LINKS.slice(0, 4).map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contact
          </h3>
          <div className="space-y-3 text-sm text-cloud/80">
            <p>Questions, trip ideas, or ready to start planning?</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white">
              {CONTACT_EMAIL}
            </a>
            <div>
              <Link
                href="/contact"
                className="inline-flex rounded-md bg-gold px-4 py-2 font-medium text-midnight transition-opacity hover:opacity-90"
              >
                Plan My Vacation
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm text-cloud/70 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} The Midnight Travel Co. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
