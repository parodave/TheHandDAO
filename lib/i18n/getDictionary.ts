export type Locale = "fr" | "en";
export async function getDictionary(locale: Locale): Promise<any> {
  const dict = await import(`@/locales/${locale}/common.json`);
  return dict.default || dict;
}
export function t(dict: any, path: string, fallback = ""): string {
  return path.split(".").reduce((o, k) => (o && (o as any)[k] != null ? (o as any)[k] : undefined), dict) ?? fallback ?? path;
}

