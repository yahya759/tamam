import { InquiryFormData, TAMAM_SOLUTIONS } from '../utils/automation-state';
import { LEAD_WEBHOOK_URL } from '../config';
import { getNiche } from '../niches';

export function buildLeadMessage(data: InquiryFormData): string {
  const solutions = TAMAM_SOLUTIONS.filter((s) => data.selectedSolutions.includes(s.id))
    .map((s) => s.title)
    .join('، ');

  return [
    getNiche().waMessage,
    '',
    `الاسم: ${data.name.trim()}`,
    `الشركة: ${data.businessName.trim()}`,
    `وسيلة التواصل: ${data.contact.trim()}`,
    solutions ? `أبغى أتمتة: ${solutions}` : '',
    data.notes.trim() ? `تفاصيل: ${data.notes.trim()}` : '',
  ]
    .filter((line, i, arr) => line !== '' || (i > 0 && arr[i - 1] !== ''))
    .join('\n');
}

/** Sends the lead to the configured webhook. Resolves true only on a successful response. */
export async function sendLeadToWebhook(data: InquiryFormData): Promise<boolean> {
  if (!LEAD_WEBHOOK_URL) return false;
  try {
    const res = await fetch(LEAD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name.trim(),
        businessName: data.businessName.trim(),
        contact: data.contact.trim(),
        notes: data.notes.trim(),
        solutions: data.selectedSolutions,
        source: `tamam-landing:${getNiche().id}`,
        submittedAt: new Date().toISOString(),
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
