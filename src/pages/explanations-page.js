import { MOCK_DATABASE } from "../shared/data/mock-db.js";
import { getText } from "../shared/config/i18n.js";
import { renderList } from "../shared/lib/dom.js";
import { renderExplanationCard } from "../entities/explanation/exp-card.js";

export function renderExplanationsPage() {
  return `<section class="container page page--explanations">
          <header class="page__header">
          <h1 class="page__title page-title">${getText("explanations")}</h1>
          <p class="page__intro">${getText("explanationsIntro")}</p>
          </header>
          <div class="page__content">${renderList(MOCK_DATABASE.explanations, renderExplanationCard, getText("noEntries"))}</div>
          </section>`;
}
