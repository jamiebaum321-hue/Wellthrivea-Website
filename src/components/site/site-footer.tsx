import Link from "next/link";
import Image from "next/image";

const LEGAL_LINKS = [
  { href: "/legal/digital-privacy-policy", label: "Digital Privacy Policy" },
  { href: "/legal/no-surprises-act", label: "No Surprises Act" },
  { href: "/legal/notice-of-privacy-practices", label: "Notice of Privacy Practices – NY" },
  { href: "/legal/sms-terms", label: "SMS Terms of Use" },
  { href: "/legal/non-discrimination", label: "Non-discrimination Statement – NY" },
  { href: "/legal/patient-rights", label: "Patient Rights & Responsibilities – NY" },
  { href: "/legal/anonymous-hotline", label: "Anonymous Hotline" },
  { href: "/legal/accessibility", label: "Accessibility" },
  { href: "/legal/terms-of-use", label: "Terms of Use & Medical Disclaimer" },
];

export function SiteFooter() {
  return (
    <>
      <div className="border-t border-border bg-white py-8">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <p className="mx-auto max-w-4xl text-sm text-muted-foreground">
            <strong className="text-brand-navy">Good Faith Estimate:</strong> If
            you are uninsured or choose not to use insurance, you may have the
            right under the federal No Surprises Act to receive a Good Faith
            Estimate of expected charges before you receive care.{" "}
            <Link href="/legal/no-surprises-act" className="font-semibold text-brand-blue hover:underline">
              Learn about your rights and protections
            </Link>
            .
          </p>
        </div>
      </div>

      <footer className="bg-brand-navy text-sky-200/80">
        <div className="mx-auto grid max-w-7xl gap-11 px-5 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1fr_1fr_1.1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Image
                src="/img/logo-mark.png"
                alt=""
                width={44}
                height={46}
                className="h-11 w-auto rounded-xl bg-white p-0.5"
              />
              <span className="leading-none">
                <span className="font-heading text-[1.35rem] font-extrabold tracking-tight">
                  <span className="text-[#7fe25f]">Well</span>
                  <span className="text-[#4fc3ff]">thrivea</span>
                </span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.22em] text-sky-300/60">
                  Health &amp; Wellness Network
                </span>
              </span>
            </div>
            <p className="max-w-sm text-sm">
              Coordinated Care. Better Health. Home care, wellness programs,
              behavioral health support, and telemedicine — coming soon to
              Canarsie, Brooklyn, and serving the greater five boroughs through
              virtual care and community outreach.
            </p>
            <p className="mt-4 max-w-sm text-xs">
              This website uses no advertising pixels, no analytics trackers,
              and no session recording.{" "}
              <Link href="/legal/digital-privacy-policy" className="text-sky-100 underline-offset-2 hover:underline">
                How we handle data
              </Link>
              .
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link className="hover:text-white hover:underline" href="/about">About Us</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/mission">Mission</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/locations">Locations &amp; Outreach</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/blog">Health Blog</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/careers">Careers</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-white">
              What We Do
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link className="hover:text-white hover:underline" href="/services">All Planned Services</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/home-care">Home Care Services</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/behavioral-health">Behavioral Health Program</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/wellness">Wellness Program</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/technology">Smart Care Technology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-white">
              For Patients
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link className="hover:text-white hover:underline" href="/insurance">Insurance &amp; Billing</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/legal/patient-rights">Patient Rights &amp; Responsibilities</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/legal/no-surprises-act">No Surprises Act</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/legal/notice-of-privacy-practices">Notice of Privacy Practices</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/legal/non-discrimination">Non-discrimination Statement</Link></li>
              <li><Link className="hover:text-white hover:underline" href="/legal/accessibility">Accessibility</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                Email:{" "}
                <a className="hover:text-white hover:underline" href="mailto:info@wellthrivea.com">
                  info@wellthrivea.com
                </a>
              </li>
              <li>Fax: (516) 620-3049</li>
              <li>Mail: PO Box 1585, New York, NY 10163</li>
              <li>Virtual hours: Mon–Fri, 9am–5pm EST</li>
              <li>
                <Link className="hover:text-white hover:underline" href="/contact">
                  Stay connected for updates
                </Link>
              </li>
              <li>
                <Link className="hover:text-white hover:underline" href="/legal/anonymous-hotline">
                  Anonymous compliance hotline
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5">
          <div className="rounded-2xl border border-brand-orange/50 bg-brand-orange/10 px-5 py-4 text-sm text-[#ffd9a0]">
            <strong className="text-[#ffc46b]">Emergency notice:</strong>{" "}
            Wellthrivea provides non-emergency health and wellness services. If
            you are experiencing a life-threatening medical emergency, call 911
            or go to the nearest emergency department. If you are in emotional
            distress or crisis, call or text 988 for the Suicide &amp; Crisis
            Lifeline.
          </div>
        </div>

        <div className="mx-auto mt-7 max-w-7xl border-t border-white/10 px-5 py-8">
          <nav
            aria-label="Legal and compliance"
            className="mb-5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-[13px]"
          >
            {LEGAL_LINKS.map((l, i) => (
              <span key={l.href} className="flex items-center gap-2.5">
                <Link href={l.href} className="whitespace-nowrap text-sky-100/90 hover:text-white hover:underline">
                  {l.label}
                </Link>
                {i < LEGAL_LINKS.length - 1 && (
                  <span aria-hidden className="text-sky-500/50">|</span>
                )}
              </span>
            ))}
          </nav>
          <p className="mx-auto mb-2 max-w-5xl text-center text-xs leading-relaxed text-sky-300/60">
            Wellthrivea is preparing to launch its services and is not yet
            seeing patients. Services, hours, staffing, and health-plan
            participation described on this site are planned and will be
            confirmed before launch. Content on this website is general
            information only — it is not medical advice, a diagnosis, or a
            substitute for individualized care from a licensed clinician.
            Health-plan participation and network status will be published and
            kept current once finalized; please confirm your coverage with your
            health plan before any visit.
          </p>
          <p className="mt-4 text-center text-xs text-sky-300/60">
            © {new Date().getFullYear()} Wellthrivea. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
