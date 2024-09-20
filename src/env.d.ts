/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
import { Alpine as AlpineType } from 'alpinejs';

declare global {
  var Alpine: AlpineType;
}

interface Window {
  Alpine: import('alpinejs').Alpine;
}
