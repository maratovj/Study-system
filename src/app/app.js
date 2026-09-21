import { getCurrentRoute } from "./router.js";
import { startRouter } from "./router.js";
import { onLanguageChange } from "../shared/config/i18n.js";
import { renderHeader, bindHeaderEvents } from "../shared/ui/header.js";
import { renderFooter } from "../shared/ui/footer.js";
import { renderLabPage } from "../pages/lab-page.js";
import { renderModelsPage } from "../pages/models-page.js";
import { renderBlogPage } from "../pages/blog-page.js";
import { renderBlogPostPage } from "../pages/blog-post-page.js";
import { renderExplanationsPage } from "../pages/explanations-page.js";

const appElement = document.querySelector("#app");
const headerElement = document.querySelector("#app-header");
const footerElement = document.querySelector("#app-footer");

function renderApp() {
  const route = getCurrentRoute();
  const { name } = route;
  headerElement.innerHTML = renderHeader(name === "blog-post" ? "blog" : name);
  footerElement.innerHTML = renderFooter();
  bindHeaderEvents(headerElement, renderApp);

  const pages = {
    lab: renderLabPage,
    models: renderModelsPage,
    blog: renderBlogPage,
    "blog-post": () => renderBlogPostPage(route.id),
    explanations: renderExplanationsPage
  };
  appElement.innerHTML = pages[name]?.() ?? `<section class="container page"><h1 class="page-title">404</h1><p>Page not found.</p></section>`;
  appElement.focus({ preventScroll: true });
}

onLanguageChange(renderApp);
startRouter(renderApp);
