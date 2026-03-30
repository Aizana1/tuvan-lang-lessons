export type SectionType =
  | 'text'
  | 'grammar'
  | 'phrases'
  | 'vocabulary'
  | 'exercise'
  | 'dialogue'
  | 'answers';

export type Lang = 'ru' | 'en' | 'tuvan';

export interface AudioWord {
  tuvan: string;
  ru: string;
  en: string;
  audioSrc: string;
}

export interface GrammarRule {
  titleRu: string;
  titleEn: string;
  ru: string;
  en: string;
}

export interface Exercise {
  titleRu: string;
  titleEn: string;
  instrRu: string;
  instrEn: string;
  examples?: { tuvan: string; ru: string; en: string }[];
}

export interface LessonSection {
  id: string;
  type: SectionType;
  titleRu: string;
  titleEn: string;
  titleTuvan?: string;
  rules?: GrammarRule[];
  phrases?: AudioWord[];
  words?: AudioWord[];
  exercises?: Exercise[];
  text?: { ru: string; en: string };
}

export interface Lesson {
  id: number;
  icon: string;
  titleRu: string;
  titleEn: string;
  titleTuvan: string;
  subRu: string;
  subEn: string;
  sections: LessonSection[];
}
