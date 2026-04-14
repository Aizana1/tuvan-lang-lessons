import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  computed,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ThemeService } from "../../core/services/theme.service";
import { LanguageService } from "../../core/services/language.service";
import { Lesson } from "../../core/models/lesson.model";

@Component({
  selector: "app-lesson-nav",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./lesson-nav.component.html",
  styleUrls: ["./lesson-nav.component.scss"],
})
export class LessonNavComponent {
  @Input() lessons: Lesson[] = [];
  @Input() activeLessonId = 0;
  @Input() isOpen = false;
  @Output() lessonSelected = new EventEmitter<number>();
  @Output() sidebarClose = new EventEmitter<void>();

  searchQuery = signal("");

  filteredLessons = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    if (!q) return this.lessons;
    return this.lessons.filter(
      (l) =>
        l.titleRu.toLowerCase().includes(q) ||
        l.titleEn.toLowerCase().includes(q) ||
        l.titleTuvan.toLowerCase().includes(q) ||
        l.subRu.toLowerCase().includes(q)
    );
  });

  constructor(
    public themeSvc: ThemeService,
    public langSvc: LanguageService
  ) {}

  select(id: number): void {
    this.lessonSelected.emit(id);
    this.sidebarClose.emit();
  }

  get themeIcon(): string {
    return this.themeSvc.theme() === "dark" ? "☀️" : "🌙";
  }

  get themeLabel(): string {
    return this.themeSvc.theme() === "dark" ? "Светлая" : "Тёмная";
  }

  get progressPercent(): number {
    if (!this.lessons.length) return 0;
    return Math.round((this.activeLessonId / this.lessons.length) * 100);
  }
}
