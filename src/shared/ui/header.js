import {
  getLanguage,
  getSupportedLanguages,
  getText,
  setLanguage
} from "../config/i18n.js";
import { getRoutePath } from "../../app/router.js";

const NAVIGATION = [
  ["lab", "laboratory"],
  ["models", "mentalModels"],
  ["blog", "blog"],
  ["explanations", "explanations"]
];

export function renderHeader(currentRoute) {
  const navigation = NAVIGATION.map(([route, labelKey]) => {
    const activeClass = currentRoute === route ? ` navigation__link--active navigation__link--${route}` : "";
    return `<li class="navigation__item"><a class="navigation__link${activeClass}" data-route href="${getRoutePath(route)}">${getText(labelKey)}</a></li>`;
  }).join("");

  const options = getSupportedLanguages().map((language) => {
    const selected = language === getLanguage() ? " selected" : "";
    return `<option value="${language}"${selected}>${language.toUpperCase()}</option>`;
  }).join("");

  return `<div class="container site-header__inner">
    <a class="site-header__logo" data-route href="/" aria-label="${getText("projectNameLabel")}">${getText("projectName")}</a>
    <div class="site-header__controls">
      <span class="navigation__label">${getText("sections")}</span>
      <nav class="navigation" aria-label="${getText("sections")}"><ul class="navigation__list">${navigation}</ul></nav>
      <label class="language-select"><span class="visually-hidden">${getText("language")}</span><select class="field" data-language aria-label="${getText("language")}">${options}</select></label>
    </div>
  </div>`;
}

export function bindHeaderEvents(headerElement, onLanguageChange) {
  headerElement.querySelector("[data-language]").addEventListener("change", (event) => {
    setLanguage(event.target.value);
    onLanguageChange();
  });
}
