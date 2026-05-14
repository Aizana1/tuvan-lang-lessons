import { Component, inject } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { LanguageService } from "../../core/services/language.service";

@Component({
  selector: "app-home",
  standalone: true,
  template: `
    <div class="welcome">
      <div style="font-size: 4rem; margin-bottom: 1rem">🏔️</div>
      <h2>Тывалап чугаалажыылыңар</h2>

      @if (lang.lang() === 'en') {
        <p><strong>Let's speak Tuvan</strong></p>
        <p>Choose a lesson from the side menu to get started.</p>
        <div class="stripe" style="max-width:200px; margin:1.5rem auto"></div>

        <div class="home-about">
          <h3>Free Online Tuvan Language Course</h3>
          <p>
            This is a free interactive textbook of the <strong>Tuvan language</strong> (Тыва дыл),
            based on the coursebook <em>«Тывалап чугаалажыылыңар»</em> by K.A. Bichelday (2012).
            The course covers everyday speech, grammar, vocabulary and pronunciation.
          </p>
          <h3>What you will learn</h3>
          <ul>
            <li>Greetings and introductions</li>
            <li>Tuvan alphabet, vowels and consonants</li>
            <li>Numbers and counting</li>
            <li>Grammar: word order, pronouns, cases, verb tenses</li>
            <li>Useful phrases for everyday situations</li>
          </ul>
          <h3>About the Tuvan language</h3>
          <p>
            Tuvan (also spelled Tuvinian) is a <strong>Turkic language</strong> spoken by around
            232,000 people, primarily in the Republic of Tuva (Russia), as well as in Mongolia
            and China. It is related to Turkish, Kazakh, Kyrgyz and other Turkic languages.
          </p>
        </div>
        <p style="font-size:.82rem; color:var(--text3); margin-top:1.5rem">
          Tuvan language · Turkic family · 232,000 speakers
        </p>
      } @else {
        <p><strong>Поговорим по-тувински</strong></p>
        <p>Выберите урок в боковом меню, чтобы начать.</p>
        <div class="stripe" style="max-width:200px; margin:1.5rem auto"></div>

        <div class="home-about">
          <h3>Бесплатный курс тувинского языка онлайн</h3>
          <p>
            Это бесплатный интерактивный учебник <strong>тувинского языка</strong> (тыва дыл),
            созданный на основе пособия <em>«Тывалап чугаалажыылыңар»</em> К.А. Бичелдея (2012).
            Курс охватывает разговорную речь, грамматику, словарный запас и произношение.
          </p>
          <h3>Чему вы научитесь</h3>
          <ul>
            <li>Приветствия и знакомство</li>
            <li>Тувинский алфавит, гласные и согласные</li>
            <li>Числа и счёт</li>
            <li>Грамматика: порядок слов, местоимения, падежи, времена глаголов</li>
            <li>Полезные фразы на каждый день</li>
          </ul>
          <h3>О тувинском языке</h3>
          <p>
            Тувинский язык (тыва дыл) — <strong>тюркский язык</strong>, на котором говорят около
            232 000 человек, преимущественно в Республике Тыва (Россия), а также в Монголии и Китае.
            Он родственен турецкому, казахскому, киргизскому и другим тюркским языкам.
          </p>
        </div>
        <p style="font-size:.82rem; color:var(--text3); margin-top:1.5rem">
          Тувинский язык · Тюркская группа · 232 000 носителей
        </p>
      }
    </div>
  `,
  styles: [`
    .home-about {
      max-width: 560px;
      margin: 0 auto;
      text-align: left;
      h3 {
        font-size: 0.95rem;
        font-weight: 700;
        color: var(--text);
        margin: 1.2rem 0 0.4rem;
      }
      p {
        font-size: 0.85rem;
        color: var(--text2);
        line-height: 1.6;
        margin: 0;
      }
      ul {
        font-size: 0.85rem;
        color: var(--text2);
        line-height: 1.8;
        margin: 0;
        padding-left: 1.2rem;
      }
    }
  `]
})
export class HomeComponent {
  lang = inject(LanguageService);
  private titleSvc = inject(Title);
  private meta     = inject(Meta);

  constructor() {
    this.titleSvc.setTitle('Бесплатные уроки тувинского языка онлайн — Тывалап чугаалажыылыңар');
    this.meta.updateTag({ name: 'description', content: 'Бесплатный интерактивный учебник тувинского языка онлайн. 9 уроков с аудио, фразами, словарём и упражнениями. Тыва дыл — учите тувинский с нуля.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://tuvan-language.space' });

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      (canonical as HTMLLinkElement).rel = 'canonical';
      document.head.appendChild(canonical);
    }
    (canonical as HTMLLinkElement).href = 'https://tuvan-language.space';
  }
}
