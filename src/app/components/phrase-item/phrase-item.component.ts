import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AudioBtnComponent } from "../audio-btn/audio-btn.component";
import { LanguageService } from "../../core/services/language.service";
import { AudioWord } from "../../core/models/lesson.model";

@Component({
  selector: "app-phrase-item",
  standalone: true,
  imports: [CommonModule, AudioBtnComponent],
  templateUrl: "./phrase-item.component.html",
  styleUrls: ["./phrase-item.component.scss"],
})
export class PhraseItemComponent {
  @Input() phrase!: AudioWord;
  @Input() sectionId = "";
  constructor(public langSvc: LanguageService) {}
}
