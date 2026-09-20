export const appEvents = new EventTarget();

export function emit(eventName, detail) {
  appEvents.dispatchEvent(new CustomEvent(eventName, { detail }));
}

export function subscribe(eventName, listener) {
  appEvents.addEventListener(eventName, listener);
  return () => appEvents.removeEventListener(eventName, listener);
}
