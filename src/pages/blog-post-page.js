import { MOCK_DATABASE } from "../shared/data/mock-db.js";
import { getText, localize } from "../shared/config/i18n.js";
import { escapeHtml } from "../shared/lib/dom.js";

export function renderBlogPostPage(postId) {
  const post = MOCK_DATABASE.blogPosts.find((entry) => entry.id === postId);

  if (!post) {
    return `<section class="container page">
            <h1 class="page-title">404</h1>
            <p>${escapeHtml(getText("postNotFound"))}</p>
            <a class="text-link" data-route href="/blog">${escapeHtml(getText("backToBlog"))}</a>
            </section>`;
  }

  return `<section class="container page page--blog-post">
          <article class="card card--post post post--detail">
          <div class="post__meta meta">
          <time datetime="${escapeHtml(post.date)}">${escapeHtml(post.date)}</time>
          <span>${escapeHtml(getText("readTime"))}: ${escapeHtml(localize(post.readTime))}</span>
          </div>
          <h1 class="post__title page-title">${escapeHtml(localize(post.title))}</h1>
          <p>${escapeHtml(localize(post.content))}</p>
          </article>
          <a class="text-link" data-route href="/blog">${escapeHtml(getText("backToBlog"))}</a>
          </section>`;
}