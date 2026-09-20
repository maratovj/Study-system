import { getText } from "../config/i18n.js";

export function renderFooter() {
  return `<div class="container site-footer__inner"><span>${getText("footer")}</span><span>2026</span></div>`;
}
