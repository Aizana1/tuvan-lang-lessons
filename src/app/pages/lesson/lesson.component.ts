import { Component, computed, inject, input, effect } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { LessonsService } from "../../core/services/lessons.service";
import { LanguageService } from "../../core/services/language.service";
import { LessonHeroComponent } from "../../components/lesson-hero/lesson-hero.component";
import { SectionCardComponent } from "../../components/section-card/section-card.component";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-lesson",
  standalone: true,
  imports: [CommonModule, LessonHeroComponent, SectionCardComponent],
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.scss"],
})
export class LessonComponent {
  private meta = inject(Meta);
  private title = inject(Title);
  readonly id = input<string>("");

  private router = inject(Router);
  private lessonsSvc = inject(LessonsService);
  public langSvc = inject(LanguageService);

  lesson = computed(() => {
    const numId = Number(this.id());
    return this.lessonsSvc.getById(numId);
  });

  lessonId = computed(() => Number(this.id()));
  totalLessons = this.lessonsSvc.getAll().length;
  hasPrev = computed(() => this.lessonId() > 1);
  hasNext = computed(() => this.lessonId() < this.totalLessons);

  constructor() {
    effect(() => {
      const l = this.lesson();
      if (!l) return;

      // Заголовок вкладки
      this.title.setTitle(
        `${l.titleRu} - Тыва дыл — Тувинский язык - Tuvan Language`
      );

      // Мета-описание
      this.meta.updateTag({
        name: "description",
        content: `${l.titleRu}. Тувинский язык — урок ${l.id}: ${l.titleRu}`,
      });

      // Canonical URL
      this.meta.updateTag({
        property: "og:url",
        content: `https://твой-домен.com/lesson/${l.id}`,
      });

      this.meta.updateTag({
        property: "og:title",
        content: `${l.titleRu} — Тыва дыл — Тувинский язык - Tuvan Language`,
      });
    });

    effect(() => {
      this.id();
      document
        .getElementById("mainContent")
        ?.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  navigate(id: number): void {
    this.router.navigate(["/lesson", id]);
  }
}
