import { MOCK_DATABASE } from "../shared/data/mock-db.js";
import { getText } from "../shared/config/i18n.js";
import { renderList } from "../shared/lib/dom.js";
import { renderLabCard } from "../entities/lab/lab-card.js";

export function renderLabPage() {
  return `<section class="container page page--lab"><header class="page__header"><h1 class="page__title page-title">${getText("laboratory")}</h1><p class="page__intro">${getText("labIntro")}</p></header><div class="page__content">${renderList(MOCK_DATABASE.lab, renderLabCard, getText("noEntries"))}</div></section>`;
}
