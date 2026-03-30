import { Component, computed, inject, input, effect } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { LessonsService } from "../../core/services/lessons.service";
import { LanguageService } from "../../core/services/language.service";
import { LessonHeroComponent } from "../../components/lesson-hero/lesson-hero.component";
import { SectionCardComponent } from "../../components/section-card/section-card.component";

@Component({
  selector: "app-lesson",
  standalone: true,
  imports: [CommonModule, LessonHeroComponent, SectionCardComponent],
  templateUrl: "./lesson.component.html",
  styleUrls: ["./lesson.component.scss"],
})
export class LessonComponent {
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
