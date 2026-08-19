import type { Metadata } from "next";
import { PageHead } from "@/components/site/page-head";
import { Prose } from "@/components/site/prose";

export const metadata: Metadata = {
  title: "Non-discrimination Statement – NY",
  description:
    "Wellthrivea Health & Wellness Network complies with applicable federal and New York civil rights laws and does not discriminate. Free language assistance services are available.",
};

const LANGUAGE_TAGLINES: [string, string][] = [
  ["Español (Spanish)", "ATENCIÓN: si habla español, tiene a su disposición servicios gratuitos de asistencia lingüística."],
  ["Kreyòl Ayisyen (Haitian Creole)", "ATANSYON: Si w pale Kreyòl Ayisyen, gen sèvis èd pou lang ki disponib gratis pou ou."],
  ["中文 (Chinese)", "注意：如果您使用繁體中文，您可以免費獲得語言援助服務。"],
  ["Русский (Russian)", "ВНИМАНИЕ: Если вы говорите на русском языке, вам доступны бесплатные услуги перевода."],
  ["বাংলা (Bengali)", "লক্ষ্য করুনঃ যদি আপনি বাংলা কথা বলতে পারেন, তাহলে নিঃখরচায় ভাষা সহায়তা পরিষেবা উপলব্ধ আছে।"],
  ["한국어 (Korean)", "주의: 한국어를 사용하시는 경우, 언어 지원 서비스를 무료로 이용하실 수 있습니다."],
  ["עברית (Hebrew)", "שים לב: אם אתה מדבר עברית, שירותי סיוע בשפה זמינים לך ללא תשלום."],
  ["العربية (Arabic)", "ملحوظة: إذا كنت تتحدث العربية، فإن خدمات المساعدة اللغوية تتوافر لك بالمجان."],
  ["Français (French)", "ATTENTION : Si vous parlez français, des services d'aide linguistique vous sont proposés gratuitement."],
  ["اردو (Urdu)", "خبردار: اگر آپ اردو بولتے ہیں، تو آپ کو زبان کی مدد کی خدمات مفت میں دستیاب ہیں۔"],
  ["Polski (Polish)", "UWAGA: Jeżeli mówisz po polsku, możesz skorzystać z bezpłatnej pomocy językowej."],
  ["Italiano (Italian)", "ATTENZIONE: In caso la lingua parlata sia l'italiano, sono disponibili servizi di assistenza linguistica gratuiti."],
  ["Deutsch (German)", "ACHTUNG: Wenn Sie Deutsch sprechen, stehen Ihnen kostenlos sprachliche Hilfsdienstleistungen zur Verfügung."],
  ["ייִדיש (Yiddish)", "אויפמערקזאם: אויב איר רעדט אידיש, זענען פארהאן פאר אייך שפראך הילף סערוויסעס פריי פון אפצאל."],
  ["Tagalog (Filipino)", "PAUNAWA: Kung nagsasalita ka ng Tagalog, maaari kang gumamit ng mga serbisyo ng tulong sa wika nang walang bayad."],
];

export default function NonDiscriminationPage() {
  return (
    <>
      <PageHead
        badge="Privacy & Legal"
        title="Non-discrimination Statement — New York"
        sub="Wellthrivea Health & Wellness Network serves every neighbor. Discrimination has no place in health care — and no place here."
        meta="Effective date: August 19, 2026 · Wellthrivea Health & Wellness Network"
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-5">
          <Prose>
            <h2>Our commitment</h2>
            <p>
              Wellthrivea Health & Wellness Network complies with applicable federal civil
              rights laws — including Section 1557 of the Affordable Care Act —
              and applicable New York State and New York City human rights laws.
              We do not discriminate, exclude people, or treat them differently
              on the basis of race, color, national origin (including limited
              English proficiency), age, disability, sex (including pregnancy,
              sexual orientation, gender identity, and sex characteristics),
              religion, creed, immigration or citizenship status, marital or
              partnership status, source of payment, or any other basis
              protected by law.
            </p>

            <h2>What we provide</h2>
            <ul>
              <li>
                <strong>Free aids and services for people with disabilities</strong>{" "}
                to communicate effectively with us, such as qualified sign
                language interpreters and written information in accessible
                formats (large print, and other formats on request).
              </li>
              <li>
                <strong>Free language services for people whose primary language is not English</strong>,
                such as qualified interpreters and information written in other
                languages.
              </li>
            </ul>
            <p>
              If you need these services once we open, ask any staff member, or
              contact us in advance at{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>.
            </p>

            <h2>If you believe we fell short</h2>
            <p>
              If you believe Wellthrivea Health & Wellness Network has failed to provide these
              services or discriminated in another way, you can file a
              grievance with our Civil Rights Coordinator: Wellthrivea, Attn:
              Civil Rights Coordinator, PO Box 1585, New York, NY 10163, or{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>{" "}
              (subject &quot;Civil Rights&quot;). You can file in person, by
              mail, by fax at (516) 620-3049, or by email. Help filing a
              grievance is available. You will never face retaliation for
              raising a concern.
            </p>
            <p>You can also file a civil rights complaint with:</p>
            <ul>
              <li>
                <strong>U.S. Department of Health and Human Services, Office for Civil Rights:</strong>{" "}
                electronically at{" "}
                <a href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf" rel="noopener">
                  ocrportal.hhs.gov
                </a>
                , or by mail at 200 Independence Avenue SW, Room 509F, HHH
                Building, Washington, DC 20201, or by phone at 1-800-368-1019
                (TDD 1-800-537-7697). Complaint forms are available at{" "}
                <a href="https://www.hhs.gov/ocr/complaints" rel="noopener">
                  hhs.gov/ocr/complaints
                </a>
                .
              </li>
              <li>
                <strong>New York State Division of Human Rights:</strong>{" "}
                <a href="https://dhr.ny.gov" rel="noopener">
                  dhr.ny.gov
                </a>{" "}
                or 1-888-392-3644.
              </li>
              <li>
                <strong>NYC Commission on Human Rights:</strong>{" "}
                <a href="https://www.nyc.gov/cchr" rel="noopener">
                  nyc.gov/cchr
                </a>{" "}
                or 212-416-0197.
              </li>
            </ul>

            <h2>Free language assistance</h2>
            <p>
              Language assistance services, free of charge, are available to
              you. Once open, call our main number or email{" "}
              <a href="mailto:info@wellthrivea.com">info@wellthrivea.com</a>.
            </p>
          </Prose>

          <div className="mt-8 grid max-w-3xl gap-x-8 gap-y-3 sm:grid-cols-1">
            {LANGUAGE_TAGLINES.map(([lang, text]) => (
              <div key={lang} className="border-b border-dashed border-border pb-3 text-sm">
                <strong className="font-heading text-brand-navy">{lang}:</strong>{" "}
                <span className="text-muted-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
