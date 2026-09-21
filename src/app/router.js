const ROUTES = {
  "/": "lab",
  "/models": "models",
  "/blog": "blog",
  "/explanations": "explanations"
};

function getPath() {
  const hashPath = window.location.hash.replace(/^#/, "").replace(/\/$/, "");
  const path = hashPath || "/";
  return path || "/";
}

export function getCurrentRoute() {
  const path = getPath();
  if (ROUTES[path]) {
    return { name: ROUTES[path], path };
  }

  const blogPostMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogPostMatch) {
    let id;
    try {
      id = decodeURIComponent(blogPostMatch[1]);
    } catch {
      return { name: "not-found", path };
    }

    return {
      name: "blog-post",
      path,
      id
    };
  }

  return { name: "not-found", path };
}

export function getRoutePath(routeName) {
  return Object.entries(ROUTES).find(([, name]) => name === routeName)?.[0] ?? "/";
}

export function navigate(path) {
  if (path === getPath()) {
    return;
  }
  window.location.hash = path;
}

export function startRouter(onRouteChange) {
  const handleNavigation = (event) => {
    const link = event.target.closest("a[data-route]");
    if (!link || event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    navigate(link.getAttribute("href"));
  };

  document.addEventListener("click", handleNavigation);
  window.addEventListener("hashchange", onRouteChange);
  onRouteChange();

  return () => {
    document.removeEventListener("click", handleNavigation);
    window.removeEventListener("hashchange", onRouteChange);
  };
}
