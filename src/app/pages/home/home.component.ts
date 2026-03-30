import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  standalone: true,
  template: `
    <div class="welcome">
      <div style="font-size: 4rem; margin-bottom: 1rem">🏔️</div>
      <h2>Тывалап чугаалажыылыңар</h2>
      <p><strong>Поговорим по-тувински</strong></p>
      <p>Выберите урок в боковом меню, чтобы начать.</p>
      <div class="stripe" style="max-width:200px; margin:1.5rem auto"></div>
      <p style="font-size:.82rem; color:var(--text3)">
        Тувинский язык · Тюркская группа · 232 000 носителей
      </p>
    </div>
  `,
})
export class HomeComponent {}
