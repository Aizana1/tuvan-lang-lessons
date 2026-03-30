import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LanguageService } from "../../core/services/language.service";
import { Lesson } from "../../core/models/lesson.model";

@Component({
  selector: "app-lesson-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./lesson-hero.component.html",
  styleUrls: ["./lesson-hero.component.scss"],
})
export class LessonHeroComponent {
  @Input() lesson!: Lesson;
  constructor(public langSvc: LanguageService) {}
}
