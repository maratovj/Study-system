import { localize, getText } from "../../shared/config/i18n.js";
import { escapeHtml } from "../../shared/lib/dom.js";

export function renderBlogPost(entry) {
  return `<a class="post-link" data-route href="/blog/${encodeURIComponent(entry.id)}">
          <article class="card card--post post">
          <div class="post__meta meta">
          <time datetime="${escapeHtml(entry.date)}">
          ${escapeHtml(entry.date)}
          </time>
          <span>${escapeHtml(getText("readTime"))}: ${escapeHtml(localize(entry.readTime))}</span>
          </div>
          <h2 class="post__title">${escapeHtml(localize(entry.title))}</h2>
          <p>${escapeHtml(localize(entry.content))}</p>
          </article>
          </a>`;
}
