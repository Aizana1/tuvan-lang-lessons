import { Component, Input, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AudioBtnComponent } from "../audio-btn/audio-btn.component";
import { WordCardComponent } from "../word-card/word-card.component";
import { PhraseItemComponent } from "../phrase-item/phrase-item.component";
import { LessonSection } from "../../core/models/lesson.model";
import { LanguageService } from "../../core/services/language.service";

@Component({
  selector: "app-section-card",
  standalone: true,
  imports: [
    CommonModule,
    AudioBtnComponent,
    WordCardComponent,
    PhraseItemComponent,
  ],
  templateUrl: "./section-card.component.html",
  styleUrls: ["./section-card.component.scss"],
})
export class SectionCardComponent {
  @Input() section!: LessonSection;
  @Input() lessonId = 0;

  isOpen = signal(false);
  toggle() {
    this.isOpen.update((v) => !v);
  }

  constructor(public langSvc: LanguageService) {}

  get badgeClass(): string {
    return `section-type-badge badge-${this.section.type}`;
  }

  get badgeLabel() {
    return this.langSvc.sectionLabel(this.section.type);
  }
}
