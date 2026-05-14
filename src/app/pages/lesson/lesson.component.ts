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

      const isEn = this.langSvc.lang() === 'en';
      const lessonTitle = isEn ? l.titleEn : l.titleRu;
      const lessonSub   = isEn ? l.subEn   : l.subRu;

      this.title.setTitle(
        `${lessonTitle}: ${lessonSub} — Уроки тувинского языка`
      );

      const description = isEn
        ? `Lesson ${l.id} of Tuvan language: ${lessonSub}. Free interactive Tuvan lessons with audio, phrases and vocabulary.`
        : `Урок ${l.id} тувинского языка: ${lessonSub}. Бесплатные интерактивные уроки тувинского с аудио, фразами и словарём.`;

      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:title',       content: `${lessonTitle}: ${lessonSub} — Тывалап` });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ property: 'og:url',         content: `https://tuvan-language.space/lesson/${l.id}` });

      // Canonical
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        (canonical as HTMLLinkElement).rel = 'canonical';
        document.head.appendChild(canonical);
      }
      (canonical as HTMLLinkElement).href = `https://tuvan-language.space/lesson/${l.id}`;
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
