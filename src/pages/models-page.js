import { MOCK_DATABASE } from "../shared/data/mock-db.js";
import { getText } from "../shared/config/i18n.js";
import { renderList } from "../shared/lib/dom.js";
import { renderModelCard } from "../entities/mental-model/model-card.js";

export function renderModelsPage() {
  return `<section class="container page page--models"><header class="page__header"><h1 class="page__title page-title">${getText("mentalModels")}</h1><p class="page__intro">${getText("modelsIntro")}</p></header><div class="page__content grid grid--cards">${renderList(MOCK_DATABASE.mentalModels, renderModelCard, getText("noEntries"))}</div></section>`;
}
