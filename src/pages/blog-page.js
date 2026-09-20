import { MOCK_DATABASE } from "../shared/data/mock-db.js";
import { getText } from "../shared/config/i18n.js";
import { renderList } from "../shared/lib/dom.js";
import { renderBlogPost } from "../entities/blog/blog-post.js";

export function renderBlogPage() {
  return `<section class="container page page--blog"><header class="page__header"><h1 class="page__title page-title">${getText("blog")}</h1><p class="page__intro">${getText("blogIntro")}</p></header><div class="page__content">${renderList(MOCK_DATABASE.blogPosts, renderBlogPost, getText("noEntries"))}</div></section>`;
}
