import { localize, getText } from "../../shared/config/i18n.js";
import { escapeHtml } from "../../shared/lib/dom.js";

export function renderExplanationCard(entry) {
  return `<article class="grid grid--with-meta explanation-item"><aside class="meta explanation-item__meta"><span>${escapeHtml(entry.id)}</span><span>${escapeHtml(getText("date"))}: ${escapeHtml(entry.date)}</span><span class="tag tag--mastery">${escapeHtml(entry.masteryLevel)}</span></aside><div class="card card--explanation explanation-item__body"><h2 class="explanation-item__title">${escapeHtml(localize(entry.topic))}</h2><p>${escapeHtml(localize(entry.content))}</p></div></article>`;
}
