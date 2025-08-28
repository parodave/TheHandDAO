import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: Date, locale: string = 'fr'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}