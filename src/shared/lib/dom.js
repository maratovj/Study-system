export function createElement(tagName, className = "", textContent = "") {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function renderList(items, renderItem, emptyMessage) {
  if (!items.length) {
    return `<p class="empty-state">${escapeHtml(emptyMessage)}</p>`;
  }
  return items.map(renderItem).join("");
}
