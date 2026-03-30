import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AudioWord } from "../../core/models/lesson.model";
import { LanguageService } from "../../core/services/language.service";
import { AudioBtnComponent } from "../audio-btn/audio-btn.component";

@Component({
  selector: "app-word-card",
  standalone: true,
  imports: [CommonModule, AudioBtnComponent],
  templateUrl: "./word-card.component.html",
  styleUrls: ["./word-card.component.scss"],
})
export class WordCardComponent {
  @Input() word!: AudioWord;

  constructor(public langSvc: LanguageService) {}
}
