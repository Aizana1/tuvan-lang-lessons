import { Component, signal, computed, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterOutlet, NavigationEnd } from "@angular/router";
import { filter, map } from "rxjs";
import { LessonsService } from "./core/services/lessons.service";
import { LanguageService } from "./core/services/language.service";
import { LessonNavComponent } from "./components/lesson-nav/lesson-nav.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, LessonNavComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.scss"],
})
export class AppComponent {
  private router = inject(Router);
  private lessonsSvc = inject(LessonsService);
  public langSvc = inject(LanguageService);

  lessons = this.lessonsSvc.getAll();
  sidebarOpen = signal(false);
  donateOpen = signal(false);
  activeLessonId = signal(0);

  constructor() {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => (e as NavigationEnd).urlAfterRedirects)
      )
      .subscribe((url) => {
        const match = url.match(/\/lesson\/(\d+)/);
        this.activeLessonId.set(match ? Number(match[1]) : 0);
        this.sidebarOpen.set(false);
      });
  }

  breadcrumb = computed(() => {
    const l = this.lessons.find((x) => x.id === this.activeLessonId());
    if (!l)
      return this.langSvc.lang() === "en" ? "Select a lesson" : "Выберите урок";
    return this.langSvc.lang() === "en"
      ? `${l.titleEn} — ${l.subEn}`
      : `${l.titleRu} — ${l.subRu}`;
  });

  progressWidth = computed(() => {
    const id = this.activeLessonId();
    return `${Math.round((id / this.lessons.length) * 100)}%`;
  });

  selectLesson(id: number): void {
    this.router.navigate(["/lesson", id]);
  }

  openSidebar(): void {
    this.sidebarOpen.set(true);
  }
  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }
}
