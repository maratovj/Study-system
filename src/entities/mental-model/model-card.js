import { localize, getText } from "../../shared/config/i18n.js";
import { escapeHtml } from "../../shared/lib/dom.js";

export function renderModelCard(entry) {
  return `<article class="card card--model model-card"><span class="model-card__category meta">${escapeHtml(getText("category"))}: ${escapeHtml(entry.category)}</span><h2 class="model-card__title">${escapeHtml(localize(entry.title))}</h2><p class="model-card__summary">${escapeHtml(localize(entry.summary))}</p><details><summary class="link link--result">${escapeHtml(getText("showDetails"))}</summary><p>${escapeHtml(localize(entry.details))}</p></details></article>`;
}
