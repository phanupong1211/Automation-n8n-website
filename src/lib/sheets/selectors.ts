// src/lib/sheets/selectors.ts
export function pick(o: any, keys: string[], fallback = "") {
  for (const k of keys) {
    if (o?.[k] !== undefined && o?.[k] !== null && o?.[k] !== "") return o[k];
  }
  return fallback;
}
