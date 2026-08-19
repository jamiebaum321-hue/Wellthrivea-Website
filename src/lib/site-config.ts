/* Wellthrivea site configuration. */

/**
 * URL of a HIPAA-reviewed form-processing endpoint.
 * Leave empty ("") to use the built-in email-draft fallback, which sends
 * nothing from this website to any third party.
 *
 * IMPORTANT: before pointing this at any vendor (form service, CRM, email
 * platform, etc.), complete a HIPAA/tracking-technology review and obtain a
 * Business Associate Agreement where required.
 */
export const FORM_ENDPOINT = "";

export const CONTACT_EMAIL = "info@wellthrivea.com";

export type SubmitResult = "sent" | "mailto" | "error";

/**
 * Submits a form either to the configured endpoint or, when none is set,
 * opens a pre-filled email draft in the visitor's own mail app so no visitor
 * data ever leaves through this website.
 */
export async function submitWtForm(
  formData: FormData,
  opts: { subject: string; mailto?: string }
): Promise<SubmitResult> {
  // Honeypot: silently succeed for bots
  if (String(formData.get("website") ?? "").trim() !== "") return "sent";

  if (FORM_ENDPOINT) {
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      return res.ok ? "sent" : "error";
    } catch {
      return "error";
    }
  }

  const to = opts.mailto ?? CONTACT_EMAIL;
  const lines: string[] = [];
  formData.forEach((value, key) => {
    const v = String(value).trim();
    if (key === "website" || !v) return;
    lines.push(`${key.replace(/[_-]/g, " ")}: ${v}`);
  });
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(
    opts.subject
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
  return "mailto";
}
