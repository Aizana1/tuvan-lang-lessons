import { Injectable, signal, effect } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ThemeService {
  theme = signal<"light" | "dark">("light");

  constructor() {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    this.theme.set(prefersDark ? "dark" : "light");
    effect(() => {
      document.documentElement.setAttribute("data-theme", this.theme());
    });
  }

  toggle() {
    this.theme.update((t) => (t === "light" ? "dark" : "light"));
  }
}
