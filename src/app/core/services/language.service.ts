import { Injectable, signal } from "@angular/core";
import { SectionType } from "../models/lesson.model";

export type Lang = "ru" | "en" | "tuvan";

const SECTION_LABELS: Record<SectionType, Record<Lang, string>> = {
  text: { ru: "Текст", en: "Text", tuvan: "Текст" },
  grammar: { ru: "Грамматика", en: "Grammar", tuvan: "Грамматика" },
  phrases: { ru: "Фразы", en: "Phrases", tuvan: "Домактар" },
  vocabulary: { ru: "Слова", en: "Vocabulary", tuvan: "Сөстер" },
  exercise: { ru: "Упражнения", en: "Exercises", tuvan: "Дүжүлгелер" },
  dialogue: { ru: "Диалог", en: "Dialogue", tuvan: "Чугаалашыышкын" },
  answers: { ru: "Ответы", en: "Answers", tuvan: "Харыылар" },
};

@Injectable({ providedIn: "root" })
export class LanguageService {
  lang = signal<Lang>("ru");

  setLang(l: Lang): void {
    this.lang.set(l);
  }

  sectionLabel(type: SectionType): string {
    return SECTION_LABELS[type]?.[this.lang()] ?? type;
  }

  t(key: string): string {
    return key;
  }
}
