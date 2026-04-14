import { Component, inject } from "@angular/core";
import { LanguageService } from "../../core/services/language.service";

@Component({
  selector: "app-home",
  standalone: true,
  template: `
    <div class="welcome">
      <div style="font-size: 4rem; margin-bottom: 1rem">🏔️</div>
      <h2>Тывалап чугаалажыылыңар</h2>
      @if (lang.lang() === 'en') {
        <p><strong>Let's speak Tuvan</strong></p>
        <p>Choose a lesson from the side menu to get started.</p>
        <div class="stripe" style="max-width:200px; margin:1.5rem auto"></div>
        <p style="font-size:.82rem; color:var(--text3)">
          Tuvan language · Turkic family · 232,000 speakers
        </p>
      } @else {
        <p><strong>Поговорим по-тувински</strong></p>
        <p>Выберите урок в боковом меню, чтобы начать.</p>
        <div class="stripe" style="max-width:200px; margin:1.5rem auto"></div>
        <p style="font-size:.82rem; color:var(--text3)">
          Тувинский язык · Тюркская группа · 232 000 носителей
        </p>
      }
    </div>
  `,
})
export class HomeComponent {
  lang = inject(LanguageService);
}
