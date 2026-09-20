import { localize, getText } from "../../shared/config/i18n.js";
import { escapeHtml } from "../../shared/lib/dom.js";

export function renderLabCard(entry) {
  const tags = entry.tags.map((tag) => `<span class="tag tag--outline">${escapeHtml(tag)}</span>`).join("");
  return `<article class="grid grid--with-meta lab-item">
    <aside class="meta lab-item__meta"><span>${escapeHtml(entry.id)}</span><span>${escapeHtml(getText("date"))}: ${escapeHtml(entry.date)}</span><span class="tag tag--${escapeHtml(entry.status)}">${escapeHtml(entry.status)}</span><div class="tag-list">${tags}</div></aside>
    <div class="card card--lab lab-item__body"><h2 class="lab-item__title">${escapeHtml(localize(entry.title))}</h2><p>${escapeHtml(localize(entry.content))}</p></div>
  </article>`;
}
