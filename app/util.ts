export const $ = (query: string): HTMLElement => document.querySelector(query)!
export const $$ = (query: string): HTMLElement[] => Array.from(document.querySelectorAll(query))