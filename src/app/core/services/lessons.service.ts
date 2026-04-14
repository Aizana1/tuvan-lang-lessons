import { Injectable } from "@angular/core";
import { Lesson } from "../models/lesson.model";

@Injectable({ providedIn: "root" })
export class LessonsService {
  private data: Lesson[] = [
    {
      id: 1,
      icon: "🏔️",
      titleRu: "Урок 1",
      titleEn: "Lesson 1",
      titleTuvan: "1 кичээл",
      subRu: "Знакомство. Приветствия.",
      subEn: "Introduction. Greetings.",
      sections: [
        {
          id: "l1-info",
          type: "text",
          titleRu: "О тувинском языке",
          titleEn: "About the Tuvan Language",
          text: {
            ru: `Тувинский язык входит в группу тюркских языков, к которым относятся турецкий, туркменский, татарский, якутский, казахский, узбекский, азербайджанский, алтайский, хакасский, киргизский и другие языки. 
            В Российской Федерации по переписи 2010 года проживают 26 тюркоязычных народов и народностей, насчитывающих около 10 миллионов человек. Во всем мире на тувинском языке говорят порядка 232 тысяч человек: в России – более 210 тысяч, Монголии – около 20 тысяч, КНР – около 2 тысяч человек, в Европе, Америке и других странах мира тувинским языком владеют около 1 тысячи человек.`,
            en: `The Tuvan language belongs to the Turkic language group, which includes Turkish, Turkmen, Tatar, Yakut, Kazakh, Uzbek, Azerbaijani, Altai, Khakas, Kyrgyz and other languages. According to the 2010 census, 26 Turkic-speaking peoples and ethnic groups, totaling approximately 10 million people, live in the Russian Federation. Around 232,000 people speak the Tuvan language worldwide: over 210,000 in Russia, approximately 20,000 in Mongolia, approximately 2,000 in China, and approximately 1,000 in Europe, America, and other countries.`,
          },
        },
        {
          id: "l1-pron",
          type: "grammar",
          titleRu: "Произношение",
          titleEn: "Pronunciation Rules",
          rules: [
            {
              titleRu: "1. Долгие гласные",
              titleEn: "1. Long vowels",
              ru: "Долгие гласные в письме передаются удвоенными буквами соответствующих гласных и произносить их надо слитно, как один долгий звук.",
              en: "Long vowels are represented in writing by doubling the letters of the corresponding vowels and should be pronounced together, as one long sound.",
            },
            {
              titleRu: "2. Особые звуки Ө, Ү, Ң",
              titleEn: "2. Special sounds Ө, Ү, Ң",
              ru: `Звуки Ө, Ү, Ң и конечный согласный "г" не имеют соответствий в русском языке. Учитесь их правильно произносить: 
              а) гласный Ө – произносите гласный "э", сохраняя положение языка, округлите и вытяните губы вперед, как при произнесении гласного "о";
              б) гласный Ү – произносите гласный "и", сохраняя положение языка, округлите губы и вытяните их вперед, как при произнесении гласного "у";
              в) согласный Ң – приподнимите заднюю часть спинки языка до смыкания с мягким нёбом, закрывая тем самым выход воздуха через рот; выдыхаемый воздух должен проходить через нос;
              г) конечный согласный "г" – более звонкий, чем русский "г" в словах типа "бог", "когда"; этот звук образуется в щели между корнем языка и маленьким мягконебным язычком.`,
              en: `The sounds Ө, Ү, Ң and the final consonant "г" have no equivalents in Russian. Learn to pronounce them correctly:
              a) vowel Ө – pronounce the vowel "ə", maintaining the position of the tongue, round and protrude the lips forward, as when pronouncing the vowel "о". English example: "nURse";
              b) vowel Ү – [ü] - pronounce the vowel "i", maintaining the position of the tongue, round and protrude the lips forward, as when pronouncing the vowel "u";
              c) consonant Ң – [ŋ] - lift the back of the tongue until it touches the soft palate, thereby closing the exit of air through the mouth; exhaled air should pass through the nose. English example: "soNG";
              d) final consonant "г" – [g] - more voiced than the Russian "г" in words like "бог" - [bog] -(god) and "когда" - [kogda] - (when); this sound is formed in the gap between the root of the tongue and the small soft palate.`,
            },
            {
              titleRu: "3. Ударение",
              titleEn: "3. Stress",
              ru: "Ударение в тувинских словах обычно приходится на последний слог слова.",
              en: "In Tuvan words, stress usually falls on the last syllable.",
            },
          ],
        },
        {
          id: "l1-greet",
          type: "phrases",
          titleRu: "Встреча. Приветствия.",
          titleEn: "Meeting & Greetings",
          phrases: [
            {
              tuvan: "Кирип болур мен бе?",
              ru: "Можно войти?",
              en: "May I come in?",
              audioSrc: "",
            },
            {
              tuvan: "Ийе, кириңер.",
              ru: "Да, войдите.",
              en: "Yes, please come in.",
              audioSrc: "",
            },
            { tuvan: "Экии!", ru: "Здравствуйте!", en: "Hello!", audioSrc: "" },
            {
              tuvan: "Бээр (мынаар) эртиңер.",
              ru: "Пройдите сюда (туда)",
              en: "Come in here (there)",
              audioSrc: "",
            },
            {
              tuvan: "Олуруңар",
              ru: "Садитесь.",
              en: "Please sit down.",
              audioSrc: "",
            },
            {
              tuvan: "Четтирдим!",
              ru: "Спасибо!",
              en: "Thank you!",
              audioSrc: "",
            },
            {
              tuvan: "Кандыг херектиг (айтырыглыг) келдиңер?",
              ru: "По какому делу (вопросу) пришли?",
              en: "What is the matter (issue) you came for?",
              audioSrc: "",
            },
            {
              tuvan: "Кайыын келдиңер?",
              ru: "Откуда приехали (пришли)?",
              en: "Where did you come from?",
              audioSrc: "",
            },
            {
              tuvan: "Хоорай чагыргазындан келдим.",
              ru: "Пришел из горадминистрации",
              en: "Came from the city hall",
              audioSrc: "",
            },
            {
              tuvan: "Кажан келдиңер?",
              ru: "Когда приехали (пришли)?",
              en: "When did you come?",
              audioSrc: "",
            },
            {
              tuvan: "Ам чаа келдим.",
              ru: "Только что приехал",
              en: "I just arrived",
              audioSrc: "",
            },
            {
              tuvan: "Дүүн келдим.",
              ru: "Вчера приехал",
              en: "I arrived yesterday",
              audioSrc: "",
            },
            {
              tuvan: "Кадыыңар кандыг-дыр? (Эки-ле-дир силер бе?)",
              ru: "Как ваше здоровье? ",
              en: "How is your health? (Are you doing good?)",
              audioSrc: "",
            },
            {
              tuvan: "Четтирдим, эки-дир.",
              ru: "Спасибо, всё хорошо.",
              en: "Thanks, everything is fine.",
              audioSrc: "",
            },
            {
              tuvan: "Солун чүү тур?",
              ru: "Что нового?",
              en: "What's new?",
              audioSrc: "",
            },
            {
              tuvan: "Онза чүве чогулу.",
              ru: "Ничего особенного.",
              en: "Nothing special.",
              audioSrc: "",
            },
            {
              tuvan: "Ажыл херек кандыг тур?",
              ru: "Как ваши дела?",
              en: "How are things going?",
              audioSrc: "",
            },
            {
              tuvan: "Эки-ле чоруп тур.",
              ru: "Хорошо.",
              en: "Going well.",
              audioSrc: "",
            },
            {
              tuvan: "Бөгүн даштын чылыг-дыр бе?",
              ru: "Тепло ли сегодня на улице?",
              en: "Is it warm outside today?",
              audioSrc: "",
            },
            {
              tuvan: "Ийе, чылыг-дыр.",
              ru: "Да, тепло.",
              en: "Yes, it's warm",
              audioSrc: "",
            },
            {
              tuvan: "Чок, соок-тур.",
              ru: "Нет, холодно.",
              en: "No, it's cold.",
              audioSrc: "",
            },
            {
              tuvan: "Катап кажан кирер (келир) силер?",
              ru: "Когда снова зайдете (придете)?",
              en: "When will you come in (come) again?",
              audioSrc: "",
            },
            {
              tuvan: "Даарта кирер (келир) мен.",
              ru: "Зайду (приду) завтра",
              en: "I will you come in (come) tomorrow?",
              audioSrc: "",
            },
            {
              tuvan: "Бир шак болгаш кирер (келир) мен.",
              ru: "Зайду (приду) через час",
              en: "I'll come in (come) in an hour.",
              audioSrc: "",
            },
            {
              tuvan: "Киргениңер (келгениңер) дээш четтирдим.",
              ru: "Спасибо, что зашли (пришли) ",
              en: "Thank you for coming.",
              audioSrc: "",
            },
            {
              tuvan: "Байырлыг!",
              ru: "До свидания!",
              en: "Goodbye!",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l1-words",
          type: "vocabulary",
          titleRu: "Слова",
          titleEn: "Vocabulary",
          words: [
            {
              tuvan: "бичии",
              ru: "немножко, маленько",
              en: "a bit",
              audioSrc: "",
            },
            { tuvan: "биче", ru: "маленький", en: "small", audioSrc: "" },
            { tuvan: "улуг", ru: "большой", en: "big, large", audioSrc: "" },
            { tuvan: "мен", ru: "я", en: "I", audioSrc: "" },
            { tuvan: "сен", ru: "ты", en: "you (singular.)", audioSrc: "" },
            {
              tuvan: "силер",
              ru: "вы",
              en: "you (plural or polite form to someone older or you don't know.)",
              audioSrc: "",
            },
            {
              tuvan: "ол",
              ru: "он, она, оно",
              en: "he, she, it",
              audioSrc: "",
            },
            { tuvan: "олар", ru: "они", en: "they", audioSrc: "" },
            { tuvan: "чоруур", ru: "ехать", en: "to go", audioSrc: "" },
            { tuvan: "олурар", ru: "сидеть", en: "to sit", audioSrc: "" },
            {
              tuvan: "көөр",
              ru: "смотреть",
              en: "to see, to watch",
              audioSrc: "",
            },
            { tuvan: "бээр", ru: "дать, отдать ", en: "to give", audioSrc: "" },
            {
              tuvan: "алыр",
              ru: "брать, взять ",
              en: "to get, to take",
              audioSrc: "",
            },
            { tuvan: "ынаар", ru: "туда ", en: "there", audioSrc: "" },
            {
              tuvan: "мынаар",
              ru: "сюда",
              en: "to here (pointing to the location)",
              audioSrc: "",
            },
            {
              tuvan: "айтырыг",
              ru: "вопрос",
              en: "question, issue",
              audioSrc: "",
            },
            { tuvan: "харыы", ru: "ответ", en: "response", audioSrc: "" },
            { tuvan: "даарта", ru: "завтра", en: "tomorrow", audioSrc: "" },
            { tuvan: "ам", ru: "сейчас", en: "now", audioSrc: "" },
            {
              tuvan: "мында",
              ru: "здесь",
              en: "here (object is already located here)",
              audioSrc: "",
            },
            {
              tuvan: "ында",
              ru: "здесь",
              en: "there (object is already located there)",
              audioSrc: "",
            },
            {
              tuvan: "кандыг",
              ru: "как, какой",
              en: "how, what ...",
              audioSrc: "",
            },
            { tuvan: "ындыг", ru: "такой", en: "such", audioSrc: "" },
            { tuvan: "ийе", ru: "да", en: "yes", audioSrc: "" },
            { tuvan: "чок", ru: "нет", en: "no", audioSrc: "" },
            {
              tuvan: "ажыл; ажыл херек",
              ru: "дело, работа",
              en: "business, work",
              audioSrc: "",
            },
            {
              tuvan: "соок",
              ru: "холодно, холодный",
              en: "cold",
              audioSrc: "",
            },
            { tuvan: "чылыг", ru: "тепло, теплый", en: "warm", audioSrc: "" },
            { tuvan: "дүн", ru: "ночь", en: "night", audioSrc: "" },
            { tuvan: "хүн", ru: "день", en: "day", audioSrc: "" },
            { tuvan: "кежээ", ru: "вечер", en: "evening", audioSrc: "" },
            { tuvan: "эртен", ru: "утро", en: "morning", audioSrc: "" },
            { tuvan: "даарта", ru: "завтра", en: "tomorrow", audioSrc: "" },
            { tuvan: "кирер", ru: "войти", en: "come in, enter", audioSrc: "" },
            { tuvan: "үнер", ru: "выйти", en: "exit", audioSrc: "" },
            { tuvan: "онза", ru: "особый", en: "special", audioSrc: "" },
            {
              tuvan: "эки",
              ru: "хорошо, хороший",
              en: "good, well",
              audioSrc: "",
            },
            { tuvan: "багай", ru: "плохо, плохой", en: "bad", audioSrc: "" },
            {
              tuvan: "болур",
              ru: "можно",
              en: "you can, allowed to do",
              audioSrc: "",
            },
            {
              tuvan: "хоржок; болбас; ынчанмас",
              ru: "нельзя",
              en: "it's prohibited",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l1-ex",
          type: "exercise",
          titleRu: "Упражнения",
          titleEn: "Exercises",
          exercises: [
            {
              titleRu: "Упражнение 1",
              titleEn: "Exercise 1",
              instrRu:
                "Переведите: а) Олуруп болур бе?; б) Ынаар эртиңер; в) Даарта келир силер бе?",
              instrEn:
                "Translate: а) Олуруп болур бе?; б) Ынаар эртиңер; в) Даарта келир силер бе?",
            },
            {
              titleRu: "Упражнение 2",
              titleEn: "Exercise 2",
              instrRu: "Переведите: а) Приехал вечером; б) Вы завтра придете?",
              instrEn:
                "Translate: а) I arrived yesterday; б) Will you come tomorrow?",
            },
          ],
        },
        {
          id: "l1-answers",
          type: "answers",
          titleRu: "Ответы к упражнениям",
          titleEn: "Answer Key",
          exercises: [
            {
              titleRu: "Ответы к упражнению 1",
              titleEn: "Answers to Exercise 1",
              instrRu: "",
              instrEn: "",
              examples: [
                {
                  tuvan: "Олуруп болур бе?",
                  ru: "Можно мне сесть?",
                  en: "May I sit down?",
                },
                {
                  tuvan: "Ынаар эртиңер",
                  ru: "Пожалуйста, идите туда.",
                  en: "Please go there.",
                },
                {
                  tuvan: "Даарта кээр сен бе?",
                  ru: "Придёшь завтра?",
                  en: "Will you come tomorrow?",
                },
              ],
            },
            {
              titleRu: "Ответы к упражнению 2",
              titleEn: "Answers to Exercise 2",
              instrRu: "",
              instrEn: "",
              examples: [
                {
                  tuvan: "Дүүн келдим.",
                  ru: "Приехал вечером.",
                  en: "I arrived yesterday?",
                },
                {
                  tuvan: "Даарта кээр сен бе?",
                  ru: "Придёшь завтра?",
                  en: "Will you come tomorrow?",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      icon: "🔤",
      titleRu: "Урок 2",
      titleEn: "Lesson 2",
      titleTuvan: "Ийиги кичээл",
      subRu: "Гласные и согласные. Знакомство. Счёт до 100.",
      subEn: "Vowels & Consonants. Introduction. Counting to 100.",
      sections: [
        {
          id: "l2-phonetics",
          type: "grammar",
          titleRu: "Гласные и согласные",
          titleEn: "Vowels and Consonants",
          titleTuvan: "Ажык болгаш ажык эвес үннер",
          rules: [
            {
              titleRu: "24 гласных",
              titleEn: "Vowels — 24",
              ru: `Гласных звуков в тувинском языке 24: краткие гласные : а, э, и, о, ө, у, ү, ы; долгие: аа, ээ, ии, оо, өө, уу, үү, ыы; фарингализованные: аъ, эъ, иъ, оъ, өъ, уъ, үъ, ыъ.
              Фарингализованные гласные произносятся как бы сдавленным голосом при напряженном положении глотки. Они обозначаются сочетанием гласной с твердым знаком в словах "аът – лошадь"; "эът – мясо"; "чүък – груз"; "оът – трава"; "дүъш – полдень"; "каът – слой, этаж"; "чаъс – дождь"; "чөъп – гуща"; "аъш-чем – пища". 
              В остальных словах они пишутся одинарными буквами, т.е. как обычные краткие гласные, но в мини- словариках в конце пособия они обозначены по схеме «гласный + ъ». `,
              en: `There are 24 vowel sounds in the Tuvan language: short vowels: а, э, и, о, ө, у, ү, ы; long vowels: аа, ээ, ии, оо, өө, уу, үү, ыы; pharyngealized vowels: аъ, эъ, иъ, оъ, өъ, уъ, үъ, ыъ.
              Pharyngealized vowels are pronounced as if with a stifled voice and a tense pharynx. They are indicated by a combination of a vowel with a hard sign in the words "aът - horse"; "эът - meat"; "чүък - cargo"; "оът - grass"; "дүъш - afternoon"; "каът - layer, floor"; "чаъс - rain"; "чөъп - thicket"; "аъш-чем - food".
              In other words they are written with single letters, i.e. like ordinary short vowels, but in the mini-dictionaries at the end of the manual they are designated according to the scheme “vowel + ъ”.`,
            },
            {
              titleRu: "18 согласных",
              titleEn: "Consonants — 18",
              ru: `Согласных звуков в тувинском языке 18: т, п, с, ш, х; слабые: т-д, п-б, с-з, ш-ж, к-г, ч; сверхслабые: й, л, м, н, ё, р, г.
              Сильные согласные произносятся всегда глухо и употребляются только в начале слов: "сан – счет, число"; "паш – котел"; "тас – лысый"; "шак – время, часы"; "хол – рука". 
              Слабые согласные употребляются в любой позиции и могут быть глухими и звонкими, в зависимости от позиции и качества сочетаемых согласных: "час (слабые ч, с)", "эзир (слабый з)", "дөжү (слабые д, ж)".`,
              en: `There are 18 consonants in the Tuvan language: т, п, с, ш, х; weak consonants: т-д, п-б, с-з, ш-ж, к-г, ч; superweak consonants: й, л, м, н, ё, р, г.
Strong consonants are always pronounced voiceless and are used only at the beginning of words: "сан – account, number"; "паш – cauldron"; "тас – bald"; "шак – time, hours"; "хол – hand".
Weak consonants are used in any position and can be voiceless or voiced, depending on the position and quality of the consonants they combine: "час (weak ch, s)", "эзир (weak z)", "дөжү (weak d, zh)".`,
            },
          ],
        },
        {
          id: "l2-meet",
          type: "phrases",
          titleRu: "Знакомство",
          titleEn: "Getting Acquainted",
          titleTuvan: "Таныжылга",
          phrases: [
            {
              tuvan: "Таныжып көрүңер.",
              ru: "Познакомьтесь, пожалуйста.",
              en: "Please get acquainted to each other.",
              audioSrc: "",
            },
            {
              tuvan: "Адыңар кымыл?",
              ru: "Как вас зовут?",
              en: "What is your name?",
              audioSrc: "",
            },
            {
              tuvan: "Мээң адым...",
              ru: "Меня зовут …",
              en: "My name is …",
              audioSrc: "",
            },
            {
              tuvan: "Ооң ады...",
              ru: "Его/её зовут …",
              en: "His/Her name is …",
              audioSrc: "",
            },
            {
              tuvan: "Буруулуг болдум, силерниң адыңарны уткан-дыр мен",
              ru: "Извините, я забыл, как вас зовут.",
              en: "I'm sorry, I forgot your name.",
              audioSrc: "",
            },
            {
              tuvan: "Ооң ады кым ийик?",
              ru: "Как его/её зовут? ",
              en: "What's his/her name?",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l2-numbers",
          type: "grammar",
          titleRu:
            "Счёт до 100. Порядок слов в предложении. Вопросительные слова ",
          titleEn: "Counting to 100. Word order in a sentence. Question words ",
          titleTuvan: "Санавыр",
          rules: [
            {
              titleRu: "Числа 1—10",
              titleEn: "Numbers 1—10",
              ru: "1 — бир, 2 — ийи, 3 — үш, 4 — дөрт, 5 — беш, 6 — алды, 7 — чеди, 8 — сес, 9 — тос, 10 — он",
              en: "1 — бир, 2 — ийи, 3 — үш, 4 — дөрт, 5 — беш, 6 — алды, 7 — чеди, 8 — сес, 9 — тос, 10 — он",
            },
            {
              titleRu: "Числа 11—90",
              titleEn: "Numbers 11—90",
              ru: `20 — чээрби, 30 — үжен, 40 — дөртен, 50 — бежен, 60 — алдан, 70 — чеден, 80 — сезен, 90 — тозан.`,
              en: "20 — чээрби, 30 — үжен, 40 — дөртен, 50 — бежен, 60 — алдан, 70 — чеден, 80 — сезен, 90 — тозан.",
            },
            {
              titleRu: "Числа 11—90",
              titleEn: "Numbers 11—90",
              ru: `В составных числительных сначала называется десяток, а затем – единица: 22 = чээрби ийи (дословно: двадцать два), 15 = он беш (дословно: десять пять), 71 = чеден бир (дословно: семьдесят один).
              Как определение, числительные всегда употребляются перед существительными; при этом форма существительного не связана с числительным: пять дней – беш хонук (дословно: пять день); три карандаша – үш карандаш (дословно: три карандаш); сто дней – чүс хүн (дословно: сто день).`,
              en: `In compound numerals, the ten is named first, followed by the unit: 22 = чээрби ийи (literally: twenty-two), 15 = он беш (literally: ten five), 71 = чеден бир (literally: seventy-one). 
              As an adjective, numerals are always used before nouns; in this case, the noun form is not related to the numeral: five days – беш хонук (literally: five day); three pencils – үш карандаш (literally: three pencil); one hundred days – чүс хүн (literally: one hundred day).`,
            },
            {
              titleRu: "Порядок слов в предложении",
              titleEn: "Word order in a sentence",
              ru: `<ol><li>Сказуемое в тувинском предложении всегда стоит на последнем месте.</li>
              <li>Определение всегда стоит перед определяемым словом:
              <em>кызыл тук</em> – кызыл (красный), тук (знамя);
              <em>улуг бажың</em> – улуг (большой), бажың (дом).
              </li>
              </ol>`,
              en: `<ol><li>The predicate in a Tuvan sentence always comes last.</li>
              <li>The attribute always comes before the word it modifies: <em>кызыл тук</em> – кызыл (red), тук (flag); <em>улуг бажың</em> – улуг (big), бажың (house).
              </li>
              </ol>`,
            },
            {
              titleRu: `Вопросительные слова "КТО?", "ЧТО?"`,
              titleEn: `Question words "WHO?", "WHAT?"`,
              ru: `<ul>Вопрос <b>кым?</b> (кто?) употребляется только по отношению к человеку.
              <li>Кто это? – Бо кымыл?</li>
              <li>Кто скажет? – Кым чугаалаарыл?</li>
              <li>Кто пришел? – Кым келди?</li>
              </ul>
              <ul>Вопрос <b>чүү?</b> (что?) ставится во всех остальных случаях:
              <li>Что это? – Бо чүл?</li>
              <li>Кто это (о животных)? – Бо чүл?</li>
              <li>Что надо? – Чүү херегил?</li>
              <li>Что вы сказали? – Чүү дидиңер?</li>
              </ul>
              `,
              en: `1. The predicate in a Tuvan sentence always comes last. 2. The attribute always comes before the word it modifies: кызыл тук – кызыл (red), тук (flag); улуга бажың – улуг (big), бажың (house).`,
            },
          ],
        },
        {
          id: "l2-words",
          type: "vocabulary",
          titleRu: "Слова",
          titleEn: "Vocabulary",
          words: [
            { tuvan: "ат", ru: "имя", en: "name", audioSrc: "" },
            {
              tuvan: "таныжар",
              ru: "знакомиться",
              en: "to get acquainted",
              audioSrc: "",
            },
            { tuvan: "мээң", ru: "мой", en: "my", audioSrc: "" },
            { tuvan: "сээң", ru: "твой", en: "your", audioSrc: "" },
            { tuvan: "ооң", ru: "его/её", en: "his/her", audioSrc: "" },
            { tuvan: "аңаа", ru: "ему/ей", en: "to him/her", audioSrc: "" },
            {
              tuvan: "адаар",
              ru: "звать",
              en: "to call (by name)",
              audioSrc: "",
            },
            { tuvan: "уттур", ru: "забыть", en: "to forget", audioSrc: "" },
            { tuvan: "сактыр", ru: "помнить", en: "to remember", audioSrc: "" },
            {
              tuvan: "сактып алыр",
              ru: "запомнить",
              en: "to remember",
              audioSrc: "",
            },
            {
              tuvan: "чурттакчы",
              ru: "житель",
              en: "resident",
              audioSrc: "",
            },
            {
              tuvan: "чурттаар",
              ru: "жить",
              en: "to live",
              audioSrc: "",
            },
            {
              tuvan: "бодум",
              ru: "сам(а)",
              en: "by my own, by myself",
              audioSrc: "",
            },
            {
              tuvan: "бистиң",
              ru: "наш",
              en: "our",
              audioSrc: "",
            },
            {
              tuvan: "бистиң",
              ru: "наш",
              en: "our",
              audioSrc: "",
            },
            {
              tuvan: "турар",
              ru: "быть, находиться",
              en: "to be",
              audioSrc: "",
            },
            {
              tuvan: "садыг",
              ru: "магазин",
              en: "store, shop",
              audioSrc: "",
            },
            {
              tuvan: "хоорай",
              ru: "город",
              en: "city, town",
              audioSrc: "",
            },
            {
              tuvan: "ажыг",
              ru: "более",
              en: "more than",
              audioSrc: "",
            },
            { tuvan: "ажылдаар", ru: "работать", en: "to work", audioSrc: "" },
          ],
        },
        {
          id: "l2-ex",
          type: "exercise",
          titleRu: "Упражнения",
          titleEn: "Exercises",
          exercises: [
            {
              titleRu: "Упражнение 1",
              titleEn: "Exercise 1",
              instrRu: `Прочтите. Переведите при помощи словаря: <br><em>Мен Кызылда чурттап турар мен. Бистиң хоорайывыс чүс ажыг муң ажыг чурттакчылыг. Мен бодум садыгда ажылдап турар мен.</em>`,
              instrEn: `Translate using new vocabulary: <br><em>Мен Кызылда чурттап турар мен. Бистиң хоорайывыс чүс ажыг муң ажыг чурттакчылыг. Мен бодум садыгда ажылдап турар мен.</em>`,
            },
            {
              titleRu: "Упражнение 2",
              titleEn: "Exercise 2",
              instrRu: `Прочитайте и переведите: <br><em>Бөгүн 17-ниң хүнү. Даарта мен ажылдаар мен. Силер кажан келдиңер? Адыңар кымыл? Мээң адым… Бо чүл? Бо садыг-дыр</em>`,
              instrEn: `Read and translate: <br><em>Бөгүн 17-ниң хүнү. Даарта мен ажылдаар мен. Силер кажан келдиңер? Адыңар кымыл? Мээң адым… Бо чүл? Бо садыг-дыр</em>`,
            },
          ],
        },
        {
          id: "l2-answers",
          type: "answers",
          titleRu: "Ответы к упражнениям",
          titleEn: "Answer Key",
          exercises: [
            {
              titleRu: "Ответы к упражнению 1",
              titleEn: "Answers to Exercise 1",
              instrRu: "",
              instrEn: "",
              examples: [
                {
                  tuvan:
                    "Мен Кызылда чурттап турар мен. Бистиң хоорайывыс чүс ажыг муң ажыг чурттакчылыг. Мен бодум садыгда ажылдап турар мен.",
                  ru: "Я живу в Кызыле. В нашем городе более 100 тысяч жителей. Я работаю в магазине.",
                  en: "I live in Kyzyl. Our city has a population of over 100,000. I work in a store.",
                },
              ],
            },
            {
              titleRu: "Ответы к упражнению 2",
              titleEn: "Answers to Exercise 2",
              instrRu: "",
              instrEn: "",
              examples: [
                {
                  tuvan:
                    "Бөгүн 17-ниң хүнү. Даарта мен ажылдаар мен. Силер кажан келдиңер? Адыңар кымыл? Мээң адым... . Бо чүл? Бо садыг-дыр.",
                  ru: "Сегодня 17-е число. Завтра я работаю. Когда вы приехали? Как Вас зовут? Меня зовут ... . Что это? Это магазин.",
                  en: "Today is the 17th. Tomorrow I work. When did you arrive? What is your name? My name is ... . What is this? This is a store.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      icon: "🎉",
      titleRu: "Урок 3",
      titleEn: "Lesson 3",
      titleTuvan: "3 кичээл",
      subRu: "Звуки Б,Д,П,Т. Поздравления. Счёт 100—1 000 000.",
      subEn: "Sounds B,D,P,T. Congratulations. Counting 100—1,000,000.",
      sections: [
        {
          id: "l3-sounds",
          type: "grammar",
          titleRu: "Звуки Б, Д и П, Т. Счёт 100—1 000 000.",
          titleEn: "Sounds B, D and P, T. Counting 100—1,000,000.",
          rules: [
            {
              titleRu: "Б, Д и П, Т в начале слова",
              titleEn: "B, D at the start of a word",
              ru: `<ol><li>Звуки <b>Б</b>, <b>Д</b> в начале слова произносятся как глухие, но неприрывные. Примеры: <i>бажың (дом), даг (гора)</i>.</li>
              <li>Звуки <b>П</b>, <b>Т</b> в начале некоторых слов произносятся как взрывные сильные придыхательные согласные: <i>паш – котел, тараа – ячмень, пар – тигр, тос – девять</i>.
              </li>
              </ol>`,
              en: `<ol><li>The sounds <b>Б</b> and <b>Д</b> at the beginning of a word are pronounced as voiceless, but continuous sounds. Examples: <em>бажың (house), даг (mountain).</li>
              <li>The sounds <b>П</b> and <b>Т</b> at the beginning of some words are pronounced as plosive, strong, aspirated consonants: <em>паш – cauldron, тараа – barley, пар – tiger, тос – nine.</em>
              </li>
              </ol>`,
            },
            {
              titleRu: "Счёт 100—1 000 000",
              titleEn: "Counting 100—1,000,000",
              ru: `<ul><li><b>Сотни:</b> 100 – чүс, 200 – ийи чүс, 300 – үш чүс и т.д.; к названию соответствующей единицы (от одного до девяти), обозначающей порядок сотни, добавляйте слово чүс – сто, например, 900 – тос (девять) чүс (сто) – тос чүс.</li>
              <li><b>Тысячи:</b> 1 000 – муң, бир муң; 2 000 – ийи муң; 3 000 – үш муң и т.д.; к названию соответствующей единицы (от одного до девяти), обозначающей порядок тысячи, добавляйте слово <b>муң</b> – тысяча, например: 7 000 – чеди (семь) муң (тысяча) – чеди муң.
              </li>
              <li><b>Десятки тысяч:</b> 10 000 – он муң, 20 000 – чээрби муң, 30 000 үжен муң и т.д.; к названию соответствующей десятки (от десяти до девяноста), обозначающей порядок десятка тысяч, добавляйте слово <b>муң</b> – тысяча, например, 60 000 – алдан (шестьдесят) муң (тысяча) – алдан муң.
              </li>
              <li><b>Сотни тысяч:</b> 100 000 – чүс муң, 200 000 – ийи чүс муң, 300 000 – үш чүс муң и т.д.; к названию соответствующей сотни добавляйте слово <b>муң</b> – тысяча, например, 500 000 – беш чүс (пятьсот) муң (тысяча) – беш чүс муң.
              </li>
              </ul>`,
              en: `<ul><li><b>Hundreds:</b> 100 – chүs, 200 – iii chүs, 300 – үш chүs, etc.; to the name of the corresponding unit (from one to nine), indicating the order of a hundred, add the word chүs – hundred, for example, 900 – tos (nine) chүs (hundred) – tos chүs.</li> 
              <li><b>Thousands:</b> 1,000 – mun, bir mun; 2,000 – iyi mun; 3,000 – ush mun, etc.; To the name of the corresponding unit (from one to nine), denoting the order of a thousand, add the word <b>муң</b> – thousand, for example: 7,000 – чеди (seven) муң (thousand) – чеди муң.
              </li>
              <li><b>Tens of thousands:</b> 10,000 – он муң, 20,000 – чээрби муң, 30,000 үжен муң, etc.; to the name of the corresponding decimal place (from ten to ninety), denoting the order of ten thousands, add the word <b>муң</b> – thousand, for example, 60,000 – алдан (sixty) муң (thousand) – алдан муң.
              </li> 
              <li><b>Hundreds of thousands:</b> 100,000 – chus mun, 200,000 – iyi chus mun, 300,000 – ush chus mun, etc.; to the name of the corresponding hundred, add the word <b>mun</b> - thousand, for example, 500,000 - besh chүs (five hundred) mun (thousand) - besh chүs mun. 
              </li> 
              </ul>`,
            },
          ],
        },
        {
          id: "l3-congrats",
          type: "phrases",
          titleRu: "Поздравления",
          titleEn: "Congratulations",
          titleTuvan: "Байыр чедирери",
          phrases: [
            {
              tuvan: "Силерге байыр чедирип тур мен!",
              ru: "Поздравляю вас!",
              en: "Congratulations!",
              audioSrc: "",
            },
            {
              tuvan:
                "Байырлал (Чаа чыл, төрүттүнген хүнүңер) таварыштыр Силерге байыр чедирип тур мен!",
              ru: "Поздравляю вас с праздником (Новым годом, днем рождения)!",
              en: "Happy holiday (New Year, birthday)!",
              audioSrc: "",
            },
            {
              tuvan:
                "Тиилелгеңер-биле Силерге байыр чедирерин чөпшээреп көрүңер!",
              ru: "Разрешите поздравить вас с победой!",
              en: "Let me congratulate you on your victory!",
              audioSrc: "",
            },
            {
              tuvan: "Экини күзедим!",
              ru: "Всего вам доброго!",
              en: "All the best to you!",
              audioSrc: "",
            },
            {
              tuvan: "Кадык-чаагай болуңар!",
              ru: "Будьте здоровы! ",
              en: "Be healthy!",
              audioSrc: "",
            },
            {
              tuvan: "Аас-кежикти (чедиишкинни, кадыкшылды) силерге күзедим!",
              ru: "Желаю вам счастья (успеха, здоровья)!",
              en: "I wish you happiness (success, health)!",
              audioSrc: "",
            },
            {
              tuvan: "Май бирниң байыры-биле!",
              ru: "С праздником Первомая!",
              en: "Happy 1st May Day!",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l3-words",
          type: "vocabulary",
          titleRu: "Слова",
          titleEn: "Vocabulary",
          words: [
            {
              tuvan: "байыр чедирер",
              ru: "поздравлять",
              en: "to congratulate",
              audioSrc: "",
            },

            {
              tuvan: "төрүттүнген хүнү",
              ru: "день рождения",
              en: "birthday",
              audioSrc: "",
            },
            {
              tuvan: "куда дүжүрген хүнү",
              ru: "день свадьбы",
              en: "wedding day",
              audioSrc: "",
            },
            {
              tuvan: "Тиилелге хүнү",
              ru: "День Победы",
              en: "Victory day",
              audioSrc: "",
            },
            {
              tuvan: "Ада-чурттуң камгалакчыларының хүнү",
              ru: "День защитников Отечества",
              en: "Defenders of the Fatherland Day",
              audioSrc: "",
            },
            {
              tuvan: "Март 8-тиң хүнү",
              ru: "День 8 Марта",
              en: "8th of March day",
              audioSrc: "",
            },
            {
              tuvan: "Республика хүнү",
              ru: "День республики",
              en: "Republic Day",
              audioSrc: "",
            },
            {
              tuvan: "Россияның конституциязының хүнү",
              ru: "День Российской конституции",
              en: "Russian Constitution Day",
              audioSrc: "",
            },
            {
              tuvan: "Тываның конституциязының хүнү",
              ru: "День Тувинской конституции",
              en: "Tuvan Constitution Day",
              audioSrc: "",
            },
            {
              tuvan: "Шагаа",
              ru: "Шагаа - Тувинский Новый год",
              en: "Shagaa - Tuvan New Year",
              audioSrc: "",
            },
            {
              tuvan: "Чаа чыл",
              ru: "Новый год",
              en: "New Year",
              audioSrc: "",
            },
            {
              tuvan: "чыскаал",
              ru: "парад",
              en: "parade",
              audioSrc: "",
            },
            {
              tuvan: "аас-кежик",
              ru: "счастье",
              en: "happiness",
              audioSrc: "",
            },
            {
              tuvan: "кадыкшыл",
              ru: "здоровье",
              en: "health",
              audioSrc: "",
            },
            {
              tuvan: "чедиишкин",
              ru: "успех",
              en: "success",
              audioSrc: "",
            },
            {
              tuvan: "күзээр",
              ru: "пожелать",
              en: "to wish",
              audioSrc: "",
            },
            {
              tuvan: "сан",
              ru: "счет, цифра",
              en: "number",
              audioSrc: "",
            },
            {
              tuvan: "түң",
              ru: "сумма",
              en: "sum",
              audioSrc: "",
            },
            {
              tuvan: "амыдырал; чуртталга, амыдырал-чуртталга",
              ru: "жизнь",
              en: "life",
              audioSrc: "",
            },
            {
              tuvan: "улуг",
              ru: "большой",
              en: "big",
              audioSrc: "",
            },
            {
              tuvan: "биче, бичии",
              ru: "маленький",
              en: "small",
              audioSrc: "",
            },
            {
              tuvan: "шак",
              ru: "время, часы",
              en: "time, hour, a watch",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l3-ex",
          type: "exercise",
          titleRu: "Упражнения",
          titleEn: "Exercises",
          exercises: [
            {
              titleRu: "Упражнение 1",
              titleEn: "Exercise 1",
              instrRu: `<ol>Напишите по данным образцам и прочитайте вслух числительные, обозначенные цифрами:
              <li><em>17 – он (десять) чеди (семь) – он чеди; 33 – үжен (тридцать) үш (три) – үжен үш;</em> <b>45; 85; 14; 99; 62; 11; 84;</b></li>
              <li><em>214 – ийи (два) чүс (сто он (десять) дөрт (четыре) – ийи чүс он дөрт;</em> <b>999; 136; 540; 312; 725; 333;</b></li>
              <li><em>1988 – бир (один) муң (тысяча) тос (девять) чүс (сто) сезен (восемьдесят) сес (восемь) – бир муң тос чүс сезен сес;</em> <b>3462; 7858; 6005; 4596; 2949; 8333; 4540;</b></li>
              <li><em>92665 – тозан (девяносто) ийи (два) муң (тысяча) алды (шесть) чүс (сто) алдан (шестьдесят) беш (пять) – тозан ийи муң алды чүс алдан беш;</em> <b>70 745; 1 433; 62 662; 49 004; 97 510;</b></li>
              <li><em>454 619 – дөрт (четыре) чүс (сто) бежен (пятьдесят) дөрт (четыре) муң (тысяча) алды (шесть) чүс (сто) он (десять) тос (девять) – дөрт чүс бежен дөрт муң алды чүс он тос;</em> <b>994 333; 345 047; 640 000; 800 001; 670 745.</b></li>
              </ol>`,
              instrEn: `<ol>Write the numerals indicated by numbers using the given examples and read them aloud:
              <li><em>17 – он (ten) чеди (seven) – он чеди; 33 – үжен (thirty) үш (three) – үжен үш;</em> <b>45; 85; 14; 99; 62; 11; 84;</b></li> 
              <li><em>214 – ийи (two) чүс (one hundred он (ten) дөрт (four) – ийи чүс он дөрт;</em> <b>999; 136; 540; 312; 725; 333;</b></li> 
              <li><em>1988 – бир (one) муң (thousand) тос (nine) чүс (one hundred) сезен (eighty) сес (eight) – бир муң тос чүс сезен сес;</em> <b>3462; 7858; 6005; 4596; 2949; 8333; 4540;</b></li> 
              <li><em>92665 – tozan (ninety) iyi (two) mun (one thousand) aldy (six) chүs (one hundred) aldan (sixty) besh (five) – tozan iyi mun aldy chүs aldan besh;</em> <b>70 745; 1 433; 62,662; 49 004; 97,510;</b></li> 
              <li><em>454 619 – дөрт (four) чүс (hundred) бежен (fifty) дөрт (four) муң (thousand) алды (six) чүс (hundred) он (ten) тос (nine) – дөрт чүс бежен дөрт муң алды чүс он тос;</em> <b>994 333; 345 047; 640,000; 800 001; 670 745.</b></li> 
              </ol>`,
            },
            {
              titleRu: "Упражнение 2",
              titleEn: "Exercise 2",
              instrRu: `Ответьте на вопросы: <br><em>Каш шак-тыр? Кым келди? Кажан келир силер?</em>`,
              instrEn: `Answer the questions: <br><em>Каш шак-тыр? Кым келди? Кажан келир силер?</em>`,
            },
          ],
        },
        {
          id: "l3-answers",
          type: "answers",
          titleRu: "Ответы к упражнениям",
          titleEn: "Answer Key",
          exercises: [
            {
              titleRu: "Ответы к упражнению 1",
              titleEn: "Answers to Exercise 1",
              instrRu: "",
              instrEn: "",
              examples: [
                {
                  tuvan: `45; 85; 14; 99; 62; 11; 84;<br>
                999; 136; 540; 312; 725; 333;<br> 
                3462; 7858; 6005; 4596; 2949; 8333; 4540;<br>
                70 745; 1 433; 62 662; 49 004; 97 510;<br>
                994 333; 345 047; 640 000; 800 001; 670 745<br>`,
                  ru: `<b>45</b> — дөртен беш; <b>85</b> — сезен беш; <b>14</b> — он дөрт; <b>99</b> — тозан тос; <b>62</b> — алдан ийи; <b>11</b> — он бир; <b>84</b> — сезен дөрт;<br>
                <b>999</b> — тос чүс тозан тос; <b>136</b> — бир чүс үжен алды; <b>540</b> — беш чүс дөртен; <b>312</b> — үш чүс он ийи; <b>725</b> — чеди чүс чээрби беш; <b>333</b> — үш чүс үжен үш; <b>3462</b> — үш муң дөрт чүс алдан ийи;<br>
                <b>7858</b> — чеди муң сес чүс бежен сес; <b>6005</b> — алды муң беш; <b>4596</b> — дөрт муң беш чүс тозан алды; <b>2949</b> — ийи муң тос чүс дөртен тос; <b>8333</b> — сес муң үш чүс үжен үш; <b>4540</b> — дөрт муң беш чүс дөртен; <br>
                <b>70 745</b> — чеди он муң чеди чүс дөртен беш; <b>1 433</b> — бир муң дөрт чүс үжен үш; <b>62 662</b> — алдан ийи муң алты чүс алдан ийи; <b>49 004</b> — дөртен тос муң дөрт; <b>97 510</b> — тозан чеди муң беш чүс он; <br>
                <b>994 333</b> — тос чүс тозан дөрт муң үш чүс үжен үш; <b>345 047</b> — үш чүс дөртен беш муң дөртен чеди; <b>640 000</b> — алды чүс дөртен муң; <b>800 001 </b> — сес чүс муң бир; <b>670 745</b> — алды чүс чеди он муң чеди чүс дөртен беш`,
                  en: `<b>45</b> — дөртен беш; <b>85</b> — сезен беш; <b>14</b> — он дөрт; <b>99</b> — тозан тос; <b>62</b> — алдан ийи; <b>11</b> — он бир; <b>84</b> — сезен дөрт;<br>
                <b>999</b> — тос чүс тозан тос; <b>136</b> — бир чүс үжен алды; <b>540</b> — беш чүс дөртен; <b>312</b> — үш чүс он ийи; <b>725</b> — чеди чүс чээрби беш; <b>333</b> — үш чүс үжен үш; <b>3462</b> — үш муң дөрт чүс алдан ийи;<br>
                <b>7858</b> — чеди муң сес чүс бежен сес; <b>6005</b> — алды муң беш; <b>4596</b> — дөрт муң беш чүс тозан алды; <b>2949</b> — ийи муң тос чүс дөртен тос; <b>8333</b> — сес муң үш чүс үжен үш; <b>4540</b> — дөрт муң беш чүс дөртен; <br>
                <b>70 745</b> — чеди он муң чеди чүс дөртен беш; <b>1 433</b> — бир муң дөрт чүс үжен үш; <b>62 662</b> — алдан ийи муң алты чүс алдан ийи; <b>49 004</b> — дөртен тос муң дөрт; <b>97 510</b> — тозан чеди муң беш чүс он; <br>
                <b>994 333</b> — тос чүс тозан дөрт муң үш чүс үжен үш; <b>345 047</b> — үш чүс дөртен беш муң дөртен чеди; <b>640 000</b> — алды чүс дөртен муң; <b>800 001 </b> — сес чүс муң бир; <b>670 745</b> — алды чүс чеди он муң чеди чүс дөртен беш`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      icon: "❓",
      titleRu: "Урок 4",
      titleEn: "Lesson 4",
      titleTuvan: "4 кичээл",
      subRu: "Вопросительные предложения. Частицы бе, эвес, чок.",
      subEn: "Question Sentences. Particles бе, эвес, чок.",
      sections: [
        {
          id: "l4-q",
          type: "grammar",
          titleRu: "Вопросительные предложения",
          titleEn: "Question Sentences",
          titleTuvan: "Айтырыг домактары",
          rules: [
            {
              titleRu: "Частица бе?",
              titleEn: "Particle бе?",
              ru: `<ol>Вопросительные предложения тувинского языка строятся:<li>при помощи вопросительной частицы <b>бе?</b> Например, утвердительное предложение: <i>Алыр силер – Вы получите (возьмете)<i/>; вопросительное: <i>Алыр силер бе? – Вы будете получать (возьмете ли)?</i>.</li>
              <li>при помощи вопросительных слов <b>кажан?– когда?; каяа? – где </b>(быть, находиться); <b>кандыг? – какой?; кайда? – где </b>(находится)<b>? канчап – как </b>(каким образом)<b>? чүге? – почему?</b>; и т.д.;
              </li>
              <li>в 3-м лице при помощи вопросительного слова и окончания <b>-л, (-ыл, -ил, -ул, -үл)</b>: <i>Адыңар кымыл (кым+ыл)? – Как Ваше имя? Чүү херегил (херек+ил)? – Что нужно?</i>
              </li>
              </ol>`,
              en: `<ol>Tuvan interrogative sentences are constructed:<li>using the interrogative particle <b>бе?</b> For example, an affirmative sentence: <i>Алыр силер – You will receive (take)<i/>; interrogative: <i>Алыр силер бе? – Will you receive (take)?</i>.</li>
              <li>using the interrogative words <b>кажан? – when?; каяа? – where</b>(to be, to be); <b>кандыг? – what?; кайда? – where</b>(is)<b>? канчап – how</b>(in what way)<b>? чүге? – why?</b>; etc.;
              </li> 
              <li>in the 3rd person using a question word and the ending <b>-л, (-ыл, -ил, -ул, -үл)</b>: <i>Адыңар кымыл (кым+ыл)? – What is your name? Чүү херегил (херек+ил)? – What do you need?</i> 
              </li> 
              </ol>`,
            },
            {
              titleRu: "Вопросительные слова",
              titleEn: "Question words",
              ru: "кажан? — когда? кайда? — где? кандыг? — какой? кайын? — откуда? канчаар? — как? чүге? — почему?",
              en: "кажан? — when? кайда? — where? кандыг? — what kind? кайын? — from where? канчаар? — how? чүге? — why?",
            },
            {
              titleRu: "Частицы эвес и чок",
              titleEn: "Particles эвес and чок",
              ru: `Частицы <b>чок</b> и <b>эвес</b> употребляются после тех слов, к которым они относятся: 1. Мында эжик чок – Здесь нет двери; балык чок – рыбы нет; 2. Бо эжик эвес, а соңга-дыр – Это не дверь, а окно; Бо чаа эвес идик-тир – Это не
              новая обувь; Мен эвес, а силер харыылаар силер – Не я, а вы будете отвечать; Мында кат эвээш эвес – Здесь ягод немало.`,
              en: `The particles <b>чок</b> and <b>эвес</b> are used after the words to which they relate: 1. Мында эжик чок - There is no door here; балык чок - no fish; 2. Бо эжик эвес, а соңга-дыр - This is not a door, but a window; Бо чаа эвес идик-тир  – This is not  
              new shoes; Мен эвес, а силер харыылаар силер - Not I, but you will answer; Мында кат эвээш эвес – There are a lot of berries here.`,
            },
          ],
        },
        {
          id: "l4-qphrases",
          type: "phrases",
          titleRu: "Примеры вопросительных предложений",
          titleEn: "Question Sentence Examples",
          phrases: [
            {
              tuvan: "Каш шак-тыр?",
              ru: "Сколько времени?",
              en: "What time is it?",
              audioSrc: "",
            },
            {
              tuvan: "Кажан келир мен? ",
              ru: "Когда мне прийти?",
              en: "When should I come?",
              audioSrc: "",
            },
            {
              tuvan: "Кайнаар баар силер?",
              ru: "Куда пойдете?",
              en: "When will you go?",
              audioSrc: "",
            },
            {
              tuvan: "Кайыын келдиңер?",
              ru: "Откуда пришли?",
              en: "Where did you come from?",
              audioSrc: "",
            },
            {
              tuvan: "Каяа ужуражыр бис?",
              ru: "Где встретимся?",
              en: "Where shall we meet?",
              audioSrc: "",
            },
            {
              tuvan: "Ам канчаар бис?",
              ru: "Как нам теперь быть?",
              en: "What should we do now?",
              audioSrc: "",
            },
            {
              tuvan: "Ол ам кайдал?",
              ru: "Где он сейчас?",
              en: "Where is he now?",
              audioSrc: "",
            },
            {
              tuvan: "Чүге ындыгыл?",
              ru: "Почему так?",
              en: "Why is it like this?",
              audioSrc: "",
            },
            {
              tuvan: "Чүге келбедиңер?",
              ru: "Почему не пришли?",
              en: "Why didn't you come?",
              audioSrc: "",
            },
            {
              tuvan: "Кандыг ном алыр силер?",
              ru: "Какую книгу возьмете?",
              en: "Which book will you take?",
              audioSrc: "",
            },
            {
              tuvan: "Кайда ажылдап турар силер?",
              ru: "Где вы работаете?",
              en: "Where do you work?",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l4-words",
          type: "vocabulary",
          titleRu: "Слова",
          titleEn: "Vocabulary",
          words: [
            {
              tuvan: "бедик",
              ru: "высокий, высоко",
              en: "high, tall",
              audioSrc: "",
            },
            {
              tuvan: "чавыс",
              ru: "низкий, низко",
              en: "short, low",
              audioSrc: "",
            },
            { tuvan: "чалгаа", ru: "ленивый", en: "lazy", audioSrc: "" },
            {
              tuvan: "кызымак, кежээ",
              ru: "работящий, трудолюбивый",
              en: "hardworking",
              audioSrc: "",
            },
            { tuvan: "хоорай", ru: "город", en: "city", audioSrc: "" },
            { tuvan: "суур", ru: "деревня", en: "village", audioSrc: "" },
            {
              tuvan: "улуг",
              ru: "большой",
              en: "big",
              audioSrc: "",
            },
            {
              tuvan: "биче, бичии",
              ru: "маленький",
              en: "small",
              audioSrc: "",
            },
            {
              tuvan: "делгем",
              ru: "широкий, широко",
              en: "wide",
              audioSrc: "",
            },
            { tuvan: "кызыы", ru: "узкий", en: "narrow", audioSrc: "" },
            {
              tuvan: "соок",
              ru: "холодный, холодно",
              en: "cold",
              audioSrc: "",
            },
            { tuvan: "чылыг", ru: "теплый, тепло", en: "warm", audioSrc: "" },
            { tuvan: "аът", ru: "лошадь", en: "horse", audioSrc: "" },
            { tuvan: "инек", ru: "корова", en: "cow", audioSrc: "" },
            {
              tuvan: "чазак (чазак чери)",
              ru: "правительство",
              en: "government",
              audioSrc: "",
            },
            {
              tuvan: "чазак кежигүнү",
              ru: "член правительства",
              en: "member of the government",
              audioSrc: "",
            },
            {
              tuvan: "Чазак бажыңы",
              ru: "Дом правительства",
              en: "Government House",
              audioSrc: "",
            },
            { tuvan: "сайыт", ru: "министр", en: "secretary", audioSrc: "" },
            { tuvan: "депутат", ru: "депутат", en: "deputy", audioSrc: "" },
            {
              tuvan: "эргелел (эргелел чери)",
              ru: "управление",
              en: "governance",
              audioSrc: "",
            },
            {
              tuvan: "эргелел даргазы",
              ru: "начальник управления",
              en: "head of governance",
              audioSrc: "",
            },
            { tuvan: "килдис", ru: "отдел", en: "department", audioSrc: "" },
            {
              tuvan: "килдис даргазы, килдизиниң даргазы",
              ru: "начальник отдела",
              en: "head of department",
              audioSrc: "",
            },
            {
              tuvan: "албан (албан чери)",
              ru: "служба",
              en: "service",
              audioSrc: "",
            },
            {
              tuvan: "албан(ының) даргазы",
              ru: "руководитель службы",
              en: "head of service",
              audioSrc: "",
            },
            { tuvan: "чөвүлел", ru: "совет", en: "council", audioSrc: "" },
            {
              tuvan: "Россия Федерациязы",
              ru: "Российская Федерация",
              en: "Russian Federation",
              audioSrc: "",
            },
            {
              tuvan: "Россия Федерациязының Президентизи",
              ru: "Президент Российской Федерации ",
              en: "President of the Russian Federation",
              audioSrc: "",
            },
            {
              tuvan: "Россия Федерациязының Чазаа",
              ru: "Правительство Российской Федерации",
              en: "Government of the Russian Federation",
              audioSrc: "",
            },
            {
              tuvan: "Россия Федерациязының Чазааның Даргазы",
              ru: "Председатель Правительства Российской Федерации",
              en: "Chairman of the Government of the Russian Federation",
              audioSrc: "",
            },
            {
              tuvan: "Россия Федерациязының Федералдыг Хуралының Күрүне Думазы",
              ru: "Государственная Дума Федерального Собрания Российской Федерации",
              en: "State Duma of the Federal Assembly of the Russian Federation",
              audioSrc: "",
            },
            {
              tuvan:
                "Россия Федерациязының Федералдыг Хуралының Федерация Чөвүлели",
              ru: "Совет Федерации Федерального Собрания Российской федерации",
              en: "Federation Council of the Federal Assembly of the Russian Federation",
              audioSrc: "",
            },
            {
              tuvan: "Тыва Республика",
              ru: "Республика Тыва",
              en: "Republic of Tuva",
              audioSrc: "",
            },
            {
              tuvan: "Тыва Республиканың Чазаа",
              ru: "Правительство Республики Тыва",
              en: "Government of the Republic of Tyva",
              audioSrc: "",
            },
            {
              tuvan: "Тыва Республиканың Чазааның Даргазы",
              ru: "Председатель Правительства Республики Тыва",
              en: "Chairman of the Government of the Republic of Tyva",
              audioSrc: "",
            },
            {
              tuvan: "Тыва Республиканың Баштыңы",
              ru: "Глава Республики Тыва",
              en: "Head of the Republic of Tuva",
              audioSrc: "",
            },
            {
              tuvan: "Тыва Республиканың Дээди Хуралы (парламентизи)",
              ru: "Верховный Хурал (парламент) Республики Тыва",
              en: "Supreme Khural (parliament) of the Republic of Tyva",
              audioSrc: "",
            },
            { tuvan: "кожуун", ru: "район", en: "district", audioSrc: "" },
            { tuvan: "суму", ru: "поселение", en: "settlement", audioSrc: "" },
            { tuvan: "баштың(ы)", ru: "глава", en: "head", audioSrc: "" },
            {
              tuvan: "хоорай баштыңы",
              ru: "глава города",
              en: "head of the city",
              audioSrc: "",
            },
            {
              tuvan: "кожуун баштыңы",
              ru: "глава кожууна",
              en: "head of the district",
              audioSrc: "",
            },
            {
              tuvan: "суму баштыңы",
              ru: "глава сумона",
              en: "head of the settlement",
              audioSrc: "",
            },
            {
              tuvan: "чагырга чери",
              ru: "администрация",
              en: "administration",
              audioSrc: "",
            },
            {
              tuvan: "чагырга даргазы",
              ru: "председатель администрации",
              en: "Chairman of the Administration",
              audioSrc: "",
            },
            {
              tuvan: "хоорай чагыргазы",
              ru: "мэрия",
              en: "city ​hall",
              audioSrc: "",
            },
            {
              tuvan: "хоорай чагырыкчызы",
              ru: "мэр",
              en: "mayor",
              audioSrc: "",
            },
            {
              tuvan: "кожуун чагыргазының даргазы",
              ru: "председатель администрации кожууна",
              en: "Chairman of the District Administration",
              audioSrc: "",
            },
            {
              tuvan: "суму чагыргазының даргазы",
              ru: "председатель администрации сумона",
              en: "Chairman of the Settlement Administration",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l4-ex",
          type: "exercise",
          titleRu: "Упражнения",
          titleEn: "Exercises",
          exercises: [
            {
              titleRu: "Упражнение 1",
              titleEn: "Exercise 1",
              instrRu: `<ol>Дайте утвердительный или отрицательный ответ на следующие вопросы по данному образцу:
              <li>Ажылдап турар силер бе? – Вы работаете? <b>Ответы:</b> Ийе, ажылдап турар мен – Да, я работаю; Чок, ажылдавайн турар мен. – Нет, я не работаю.</li>
              <li>Бо бөгүнгү солун бе? – Это сегодняшняя газета?</li>
              <li>Кино көөр силер бе? – Вы будете смотреть кино?</li>
              <li>Соок суг бар бе? – Есть ли холодная вода?</li>
              </ol>`,
              instrEn: `<ol>Give an affirmative or negative answer to the following questions based on this sample: 
              <li>Ажылдап турар силер бе? -Are you working? <b>Answers:</b> Ийе, ажылдап турар мен - Yes, I work; Чок, ажылдавайн турар мен. – No, I don't work.</li> 
              <li>Бо бөгүнгү солун бе? – Is this today's newspaper?</li> 
              <li>Кино көөр силер бе? – Will you watch a movie?</li> 
              <li>Соок суг бар бе? – Is there cold water?</li> 
              </ol>`,
            },
            {
              titleRu: "Упражнение 2",
              titleEn: "Exercise 2",
              instrRu: `Переведите вопросы на тувинский язык. <br><em>Где вы работаете? Когда встретимся? Когда пришли? Когда будет день вашего рождения? Почему вы пришли?</em>`,
              instrEn: `Translate the questions into Tuvan language: <br><em>Where do you work? When will we meet? When did you arrive? When is your birthday? Why did you come?</em>`,
            },
            {
              titleRu: "Упражнение 3",
              titleEn: "Exercise 3",
              instrRu: `При помощи словарика переведите выражения: <br><em>Хоорай эвес – суур-дур; улуг эвес, бичии- дир; делгем эвес, кызыы-дыр; бедик эвес, чавыс-тыр; чалгаа эвес, кежээ-дир, соок эвес, чылыг-дыр; аът эвес, инек-тир; чээрби эвес, чээрби бир-дир.</em>`,
              instrEn: `Use a dictionary to translate the expressions: <br><em>Хоорай эвес – суур-дур; улуг эвес, бичии- дир; делгем эвес, кызыы-дыр; бедик эвес, чавыс-тыр; чалгаа эвес, кежээ-дир, соок эвес, чылыг-дыр; аът эвес, инек-тир; чээрби эвес, чээрби бир-дир.</em>`,
            },
          ],
        },
        {
          id: "l4-answers",
          type: "answers",
          titleRu: "Ответы к упражнениям",
          titleEn: "Answer Key",
          exercises: [
            {
              titleRu: "Ответы к упражнению 2",
              titleEn: "Answers to Exercise 2",
              instrRu: "",
              instrEn: "",
              examples: [
                {
                  tuvan: `Кайда ажылдап турар силер? Кажан ужуражыр бис? Кажан келдиңер? Силерниң төрүттүнген хүнүңер кажан болур? Чүге келдиңер?`,
                  ru: `Где вы работаете? Когда встретимся? Когда пришли? Когда будет день вашего рождения? Почему вы пришли?`,
                  en: `Where do you work? When will we meet? When did you arrive? When is your birthday? Why did you come?`,
                },
              ],
            },
            {
              titleRu: "Ответы к упражнению 3",
              titleEn: "Answers to Exercise 3",
              instrRu: "",
              instrEn: "",
              examples: [
                {
                  tuvan: `Хоорай эвес – суур-дур; улуг эвес, бичии- дир; делгем эвес, кызыы-дыр; бедик эвес, чавыс-тыр; чалгаа эвес, кежээ-дир, соок эвес, чылыг-дыр; аът эвес, инек-тир; чээрби эвес, чээрби бир-дир.`,
                  ru: `Это не город – это село; не большое, маленькое; не широкое, узкое; не высокое, низкое; не ленивый, трудолюбивый; не холодное, тёплое; это не лошадь, это корова; это не двадцать, это двадцать один`,
                  en: `It is not a city – it is a village; it's not big, it's small; it's not wide, it's narrow; it's not tall, it's short; not lazy, but hardworking; it's not cold, it's warm; it's not a horse, it's a cow; it's not twenty, it's twenty one`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      icon: "👤",
      titleRu: "Урок 5",
      titleEn: "Lesson 5",
      titleTuvan: "5 кичээл",
      subRu: "Личные местоимения.",
      subEn: "Personal Pronouns.",
      sections: [
        {
          id: "l5-pronouns",
          type: "grammar",
          titleRu: "Личные местоимения",
          titleEn: "Personal Pronouns",
          titleTuvan: "Арынның ат оруннары",
          rules: [
            {
              titleRu: "Таблица местоимений",
              titleEn: "Pronouns table",
              ru: `<ul>
              <li> 1-е л.: мен (я), бис (мы). </li>
              <li>2-е л.: сен (ты), силер (вы). </li>
              <li> 3-е л.: ол (он/она), олар (они).</li>
              </ul>
            <br>
              <b>Примечание 1.</b> Личные местоимения в именительном падеже обычно используются в роли подлежащего в предложении. <br>
              Например: <i>Сен кир – Ты заходи. Силер кириңер – Вы заходите. Бис кирдивис – Мы вошли. Силер кирдиңер – Вы вошли. Ол кирди – Он вошел. Олар кирдилер – Они вошли.<br></i>
               <b>Примечание 2.</b> В конце предложения слова <b> мен, сен, бис, силер </b> являются показателями лица и числа сказуемого. <br>
               Например: <i>Мен ажылдаар мен – Я буду работать. Сен келир сен – Ты придешь. Бис ажылдаар бис – Мы будем работать. Силер чугаалаар силер – Вы скажете. Мен ажылчын
               мен – Я рабочий. Сен башкы сен – Ты учитель. Силер аныяк силер – Вы молоды. Бис бежелээн бис – Нас пятеро.<br></i>
               В таких предложениях подлежащее можно опустить (можно сказать: <i>Ажылчын болур мен. Келир сен. Ажылдаар бис. Чугаалаар силер</i>), но употребление показателя лица и числа сказуемого обязательно.
              `,
              en: `
              <ul>
              <li> 1st p.: мен (I), бис (we). </li>
              <li> 2nd p.: сен (you sing.), силер (you pl./formal). </li>
              <li> 3rd p.: ол (he/she), олар (they).</li>
              </ul>
              <br>
              <b>Note 1.</b> Personal pronouns in the nominative case are usually used as the subject of a sentence.  <br>
              For example: <i>Сен кир – You come in. Силер кириңер – You come in. Бис кирдивис – We came in. Силер кирдиңер – You came in. Ол кирди – He came in. Олар кирдилер – They came in.<br></i>
              <b>Note 2.</b> At the end of a sentence, the words <b>мен, сен, бис, силер</b> indicate the person and number of the predicate.
              For example: <i>Мен ажылдаар мен – I will work. Сен килир сен – You will come. Бис ажылдаар бис – We will work. Силер чугаалаар силер – You will say. Мен ажылчын
              мен – I am a worker. Сен башкы сен – You are a teacher. Силер аныяк силер  - You are young.  Бис бежелээн бис – There are five of us.<br></i>
              In such sentences, the subject can be omitted (you can say: <i>Ажылчын болур мен. Келир сен. Ажылдаар бис. Чугаалаар силер</i>), but the use of person and number indicators of the predicate is mandatory.`,
            },
          ],
        },
        {
          id: "l5-words",
          type: "vocabulary",
          titleRu: "Слова",
          titleEn: "Vocabulary",
          words: [
            { tuvan: "эмчи", ru: "врач", en: "doctor", audioSrc: "" },
            {
              tuvan: "башкы",
              ru: "учитель (учительница)",
              en: "teacher",
              audioSrc: "",
            },
            {
              tuvan: "өөреникчи",
              ru: "ученик",
              en: "student, pupil",
              audioSrc: "",
            },
            { tuvan: "аныяк", ru: "молодой", en: "young", audioSrc: "" },
            {
              tuvan: "адаар",
              ru: "называть",
              en: "to call (by name)",
              audioSrc: "",
            },
            { tuvan: "ажылдакчы", ru: "рабочий", en: "worker", audioSrc: "" },
            {
              tuvan: "турар (тур)",
              ru: "стоять, быть",
              en: "to stand, to be",
              audioSrc: "",
            },
            { tuvan: "олурар", ru: "сидеть", en: "to sit", audioSrc: "" },
            {
              tuvan: "чыдар (чыт)",
              ru: "лежать",
              en: "to lie (on something)",
              audioSrc: "",
            },
            {
              tuvan: "чораар",
              ru: "ходить, находиться",
              en: "to walk, to be located",
              audioSrc: "",
            },
            {
              tuvan: "ужуражыр",
              ru: "встречаться",
              en: "to meet",
              audioSrc: "",
            },
            {
              tuvan: "келир (кээр)",
              ru: "приходить",
              en: "to come",
              audioSrc: "",
            },
            { tuvan: "эжик", ru: "дверь", en: "door", audioSrc: "" },
            { tuvan: "балык", ru: "рыба", en: "fish", audioSrc: "" },
            { tuvan: "өртек", ru: "цена", en: "price", audioSrc: "" },
            { tuvan: "ажык", ru: "польза", en: "benefit, use", audioSrc: "" },
            { tuvan: "солун", ru: "газета", en: "newspaper", audioSrc: "" },
            {
              tuvan: "көөр",
              ru: "смотреть",
              en: "to look, to watch, to see",
              audioSrc: "",
            },
            { tuvan: "чаа", ru: "новый", en: "new", audioSrc: "" },
            {
              tuvan: "эрги",
              ru: "старый (о предметах, вещах)",
              en: "old (about things)",
              audioSrc: "",
            },
            { tuvan: "идик", ru: "обувь", en: "shoe", audioSrc: "" },
            {
              tuvan: "харыылаар",
              ru: "отвечать",
              en: "to response",
              audioSrc: "",
            },
            { tuvan: "эвээш", ru: "мало", en: "few", audioSrc: "" },
            { tuvan: "хөй", ru: "много", en: "many", audioSrc: "" },
            { tuvan: "суг", ru: "вода", en: "water", audioSrc: "" },
            { tuvan: "баар (чоруур)", ru: "пойти", en: "to go", audioSrc: "" },
            { tuvan: "ном", ru: "книга", en: "book", audioSrc: "" },
            { tuvan: "ийе", ru: "да", en: "yes", audioSrc: "" },
            { tuvan: "чок", ru: "нет", en: "no", audioSrc: "" },
            { tuvan: "эвес", ru: "не", en: "not", audioSrc: "" },
            { tuvan: "бээр", ru: "давать (дать)", en: "to give", audioSrc: "" },
            { tuvan: "алыр", ru: "брать", en: "to take", audioSrc: "" },
          ],
        },
        {
          id: "l5-ex",
          type: "exercise",
          titleRu: "Упражнения",
          titleEn: "Exercises",
          exercises: [
            {
              titleRu: "Упражнение 1",
              titleEn: "Exercise 1",
              instrRu: `Составьте короткие предложения с данными глаголами, употребляя слова <b>мен, сен, бис, силер</b> в одних предложениях в роли подлежащего, в других – показателя лица и числа сказуемого.\n
              Бижиир – писать; дыңнаар – слушать; дыңнаан – слушал; өөренир – учиться; билир – знать; алыр – брать; бээр – давать (дать).`,
              instrEn: `Create short sentences with these verbs, using the words <b>мен, сен, бис, силер</b> in some sentences as the subject, and in others as the person and number marker of the predicate.\n 
              Бижиир – to write; дыңнаар – to listen; дыңнаан – listened; өөренир – to study; билир – to know; алыр – to take; бээр – to give (give).`,
            },
            {
              titleRu: "Упражнение 2",
              titleEn: "Exercise 2",
              instrRu: `Вместо точек употребите соответствующие показатели лица и числа сказуемого, где это необходимо. Объясните, почему поставили в предложении именно этот, а не другой показатель. В каких предложениях нет необходимости ставить показатели лица и числа?<br>
              Вы назовете. – Силер адаар … <br>
              Они будут работать. – Олар ажылдаар …<br>
              Мы поедем. – Бис чоруур …<br>
              Ты молодой. – Сен аныяк …<br>
              Он войдет. – Ол кирер …<br>
              Я врач. – Мен эмчи …<br>
              Они придут. – Олар келирлер …<br>
              `,
              instrEn: `Instead of periods, use the appropriate markers of person and number of the predicate where necessary. Explain why you used this marker and not another. Which sentences do not require markers of person and number?<br>
              You'll name them. - Силер адаар … <br>
              They will work. - Олар ажылдаар …<br>
              We will go. - Бис чоруур …<br>
              You are young. - Сен аныяк …<br>
              He will come in. - Ол кирер …<br>
              I am a doctor. - Мен эмчи …<br>
              They will come. - Олар келирлер …<br>`,
            },
            {
              titleRu: "Упражнение 3",
              titleEn: "Exercise 3",
              instrRu: `Читайте. Обратите внимание на правильное произношение всех звуков в словах и определите их отличие.\n
              <i>Ал – аал; ол – оол; даш – дааш; ат – аът; сын – сыын; к=р – к==р; от – оът, эт – эът; чон – чоон; час – чаъс; кат – каът; чүк – чүък; сарыг – саарыг; бо – боо; дүн – дүүн.</i>`,
              instrEn: `Read. Pay attention to the correct pronunciation of all the sounds in the words and identify their differences.\n
              <i>Ал – аал; ол – оол; даш – дааш; ат – аът; сын – сыын; к=р – к==р; от – оът, эт – эът; чон – чоон; час – чаъс; кат – каът; чүк – чүък; сарыг – саарыг; бо – боо; дүн – дүүн.</i>`,
            },
          ],
        },
        {
          id: "l5-answers",
          type: "answers",
          titleRu: "Ответы к упражнениям",
          titleEn: "Answer Key",
          exercises: [
            {
              titleRu: "Ответы к упражнению 2",
              titleEn: "Answers to Exercise 2",
              instrRu: "",
              instrEn: "",
              examples: [
                {
                  tuvan: `Силер адаар силер. <br>
              Олар ажылдаар. <br>
              Бис чоруур бис. <br>
              Сен аныяк сен. <br>
              Ол кирер. <br>
              Мен эмчи мен. <br>
              Олар келирлер. <br>`,
                  ru: `Вы назовете.<br>
                  Они будут работать.<br>
                  Мы поедем.<br>
                  Ты молодой. <br>
                  Он войдет. <br>
                  Я врач. <br>
                  Они придут.<br>
                  `,
                  en: `You'll call them.<br>
              They will work.<br>
              We will go.<br>
              You are young. <br>
              He will come in.<br>
              I am a doctor.<br>
              They will come.<br>`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 6,
      icon: "🔊",
      titleRu: "Урок 6",
      titleEn: "Lesson 6",
      titleTuvan: "6 кичээл",
      subRu: "Гармония гласных. Множественное число существительных.",
      subEn: "Vowel Harmony. Plural of Nouns.",
      sections: [
        {
          id: "l6-harmony",
          type: "grammar",
          titleRu: "Гармония гласных",
          titleEn: "Vowel Harmony",
          titleTuvan: "Ажык үннерниң аяннажылгазы",
          rules: [
            {
              titleRu: "Гармония гласных",
              titleEn: "Vowel Harmony",
              ru: `Важное значение в тувинском языке имеет деление гласных на две группы по характеру их произношения: <br>
              а) группа мягкорядных гласных, произносимых передней частью спинки языка – <b>э, и, ө, ү, ээ, ии, өө, үү, эъ, иъ, өъ, үъ</b>;
              б) группа твердорядных гласных, произносимых задней частью спинки языка – <b>а, ы, о, у, аа, ыы, оо, уу, аъ, ыъ, оъ, уъ</b>.<br>
              Гармония гласных означает возможность или невозможность сочетания тех или иных гласных в пределах слова. Основные положения гармонии гласных тувинского языка гласят:
              <ol>
              <li>если в первом слоге имеется какой-нибудь гласный мягкого ряда <b>(э, ээ, эъ, и, ии, иъ, ө, өө, өъ, ү, үү, үъ)</b>, то в последующих слогах могут употребляться только гласные мягкого ряда: эм – лекарство, эмнер – лекарства, эмнеривис – наши лекарства;</li>
              <li>если в первом слоге слова имеется какой-нибудь гласный твердого ряда <b>(а, аа, аъ, ы, ыы, ыъ, о, оо, оъ, у, уу, уъ)</b>, то в последующих слогах могут употребляться только гласные твердого ряда: хол – рука, холум – моя рука, холдарым – мои руки.</li>
              </ol>
              `,
              en: `In the Tuvan language, the division of vowels into two groups based on their pronunciation is important: <br>
              a) the group of soft vowels, pronounced with the front of the tongue – <b>э, и, ө, ү, ээ, ии, өө, үү, эъ, иъ, өъ, үъ</b>;
              b) the group of hard vowels, pronounced with the back of the tongue – <b>а, ы, о, у, аа, ыы, оо, уу, аъ, ыъ, оъ, уъ</b>.<br>
              Vowel harmony refers to the possibility or impossibility of combining certain vowels within a word. The basic principles of vowel harmony in the Tuvan language are as follows:
              <ol>
              <li>If the first syllable contains a soft vowel <b>(э, ээ, эъ, и, ии, иъ, ө, өө, өъ, ү, үү, үъ)</b>, then only soft vowels may be used in subsequent syllables: эм – medicine, эмнер – medicines, эмнеривис – our medications;</li>
              <li>If the first syllable of a word contains a hard vowel <b>(а, аа, аъ, ы, ыы, ыъ, о, оо, оъ, у, уу, уъ)</b>, then only hard vowels may be used in subsequent syllables: хол – hand, холум – my hand, холдарым – my hands.</li>
              </ol>`,
            },
          ],
        },
        {
          id: "l6-plural",
          type: "grammar",
          titleRu: "Множественное число",
          titleEn: "Plural of Nouns",
          rules: [
            {
              titleRu: "Множественное число",
              titleEn: "Plural of Nouns",
              ru: `<ol>
              Множественное число существительных образуется при помощи окончаний <b>-лар, -лер, -нар, -нер, -дар, -дер, -тар, -тер</b>, прибавляемых к основе:
              <li>если основа слова оканчивается на гласные или согласные <b>р, г, й</b>, то прибавляется окончание <b>-лар</b> или <b>-лер</b>, например: чер + лер = черлер – земли, места; салбыр + лар = салбырлар – отделения; өг + лер = өглер – юрты; даг + лар = даглар – горы; ай + лар = айлар – месяцы; тей + лер = тейлер – сопки; хеме + лер = хемелер – лодки;</li>
              <li>если основа слова оканчивается на согласные <b>м, н, ң</b>, то прибавляется окончание <b>-нар</b> или <b>-нер</b>, например: хем + нер = хемнер – реки; сан + нар = саннар – числа; чең + нер = чеңнер – рукава; аң + нар = аңнар – звери; согун + нар = согуннар – стрелы;</li>
              <li>если основа слова оканчивается на согласный <b>л</b>, то прибавляется окончание <b>-дар</b> или <b>-дер</b>, например, хөл + дер = хөлдер – озёра; хол + дар = холдар – руки;</li>
              <li>если основа слова оканчивается на глухие согласные, то прибавляется окончание <b>-тар</b> или <b>-тер</b>, например: орук + тар = оруктар – дороги; белек + тер = белектер – подарки.</li>
              </ol>`,
              en: `<ol>
              The plural of nouns is formed using the endings <b>-лар, -лер, -нар, -нер, -дар, -дер, -тар, -тер</b>, added to the stem:
              <li>if the stem of a word ends in the vowels or consonants <b>р, г, й</b>, then the ending <b>-лар</b> or <b>-лер</b> is added, for example: чер + лер = черлер – lands, places; салбыр + лар = салбырлар – departments; өг + лер = өглер – yurts; даг + лар = даглар – mountains; ай + лар = айлар – months; тей + лер = тейлер – hills; heme + ler = hemeler - boats;</li> 
              <li>if the stem of the word ends in the consonants <b>м, н, ң</b>, then the ending <b>-нар</b> or <b>-нер</b> is added, for example: хем + нер = хемнер - rivers; сан + нар = саннар – numbers; чең + нер = чеңнер – sleeves; аң + нар = аңнар – animals; согун + нар = согуннар – arrows;</li> 
              <li>if the stem of the word ends in a consonant <b>л</b>, then the ending <b>-дар</b> or <b>-дер</b> is added, for example, хөл + дер = хөлдер - lakes; хол + дар = холдар – hands;</li>
              <li>If the stem of a word ends in voiceless consonants, the ending <b>-тар</b> or <b>-тер</b> is added, for example: орук + тар = оруктар – roads; белек + тер = белектер – gifts.</li>
              </ol>`,
            },
          ],
        },
        {
          id: "l6-words",
          type: "vocabulary",
          titleRu: "Вопросы",
          titleEn: "Questions",
          words: [
            {
              tuvan: "Кайда?",
              ru: "Где? (про статику)",
              en: "Where? (static)",
              audioSrc: "",
            },
            {
              tuvan: "Кайда турарыл?",
              ru: "Где он(а) находится?",
              en: "Where is he/she?",
              audioSrc: "",
            },
            {
              tuvan: "Кайда чор?",
              ru: "Где он(а) ходит (находится)?",
              en: "Where is he/she going (located)?",
              audioSrc: "",
            },
            {
              tuvan: "Кайда силер?",
              ru: "Где вы?",
              en: "Where are you?",
              audioSrc: "",
            },
            {
              tuvan: "Кайда чурттап турар силер?",
              ru: "Где вы живете?",
              en: "Where do you live?",
              audioSrc: "",
            },
            {
              tuvan: "Каяа?",
              ru: "Где? (про динамику)",
              en: "Where? (dynamic)",
              audioSrc: "",
            },
            {
              tuvan: "Каяа чордуңар?",
              ru: "Где вы ходили (находились)?",
              en: "Where have you been?",
              audioSrc: "",
            },
            {
              tuvan: "Каяа келир силер?",
              ru: "Куда вы приедете (придете)?",
              en: "Where will you come?",
              audioSrc: "",
            },
            {
              tuvan: "Каяа дужуп алыр бис?",
              ru: "Где мы встретимся?",
              en: "Where will we meet?",
              audioSrc: "",
            },
            {
              tuvan: "Кажан?",
              ru: "Когда?",
              en: "When?",
              audioSrc: "",
            },
            {
              tuvan: "Кажан келир силер?",
              ru: "Когда вы придете (приедете)?",
              en: "When will you come?",
              audioSrc: "",
            },
            {
              tuvan: "Кажан келдиңер?",
              ru: "Когда вы пришли (приехали)?",
              en: "When did you come?",
              audioSrc: "",
            },
            {
              tuvan: "Кажан келир мен?",
              ru: "Когда я приду?",
              en: "When should/will I come?",
              audioSrc: "",
            },
            {
              tuvan: "Кажан эгелээрил?",
              ru: "Когда начнется?",
              en: "When will it start?",
              audioSrc: "",
            },
            {
              tuvan: "Кайнаар?",
              ru: "Куда?",
              en: "Where? (direction)",
              audioSrc: "",
            },
            {
              tuvan: "Кайнаар баар силер?",
              ru: "Куда пойдете?",
              en: "Where will you go?",
              audioSrc: "",
            },
            {
              tuvan: "Кайнаар баар бис?",
              ru: "Куда пойдем?",
              en: "Where will we go?",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l6-words",
          type: "vocabulary",
          titleRu: "Выражения",
          titleEn: "Expressions",
          words: [
            {
              tuvan: "Кирип моорлаңар!",
              ru: "Добро пожаловать!",
              en: "Welcome!",
              audioSrc: "",
            },
            {
              tuvan: "Кирип болур бе?",
              ru: "Можно войти?",
              en: "Can I (we) come in?",
              audioSrc: "",
            },
            {
              tuvan: "Кириңер!",
              ru: "Входите!",
              en: "Come in!",
              audioSrc: "",
            },
            {
              tuvan: "Бээр олуруңар",
              ru: "Садитесь сюда",
              en: "Sit here",
              audioSrc: "",
            },
            {
              tuvan: "Бээр эртиңер",
              ru: "Пройдите сюда",
              en: "Please come here (to us)",
              audioSrc: "",
            },
            {
              tuvan: "Бистиинге келиңер",
              ru: "Приходите к нам",
              en: "Please come to us (our house)",
              audioSrc: "",
            },
            {
              tuvan: "Шайдан ишкеш барыңар",
              ru: "Выпейте чашку чая",
              en: "Have a cup of tea",
              audioSrc: "",
            },
            {
              tuvan: "Маңаа таакпылап болур ирги бе?",
              ru: "Здесь можно курить?",
              en: "Is it allowed to smoke here?",
              audioSrc: "",
            },
            {
              tuvan: "Чок, маңаа таакпылап болбас",
              ru: "Нет, здесь нельзя курить.",
              en: "No, it's prohibited to smoke here",
              audioSrc: "",
            },
            {
              tuvan: "Үе каш?",
              ru: "Сколько времени?",
              en: "What time is it?",
              audioSrc: "",
            },
            {
              tuvan: "Кажан эгелээр-дир?",
              ru: "Когда начнётся?",
              en: "When does it start?",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l6-ex",
          type: "exercise",
          titleRu: "Упражнения",
          titleEn: "Exercises",
          exercises: [
            {
              titleRu: "Упражнение 1",
              titleEn: "Exercise 1",
              instrRu: `Образуйте форму множественного числа существительных.<br>
              Айтырыг – вопрос; демир – железо; хурал – собрание, совещание; бажың – дом; бөлүк – группа; чапсар – перерыв; садыг – магазин; терек – тополь; базаар – рынок, базар; школа; класс; оол – мальчик; кыс – девочка; херим – ограда; чурук – рисунок, портрет; карта; хөйлең – рубашка; дыргак – ноготь, расческа.`,
              instrEn: `Form the plural form of nouns.<br> 
              Айтырыг – question; демир – iron; хурал - meeting, meeting; бажың – house; бөлүк – group; чапсар – break; садыг – shop; терек – poplar; базаар – market, bazaar; школа - school; class - class; оол – boy; кыс – girl; херим – fence; чурук – drawing, portrait; карта - map; хөйлең – shirt; дыргак - nail, comb.`,
            },
            {
              titleRu: "Упражнение 2",
              titleEn: "Exercise 2",
              instrRu: `Подчеркните окончания, которые могут присоединяться к данным словам. Обратите внимание на взаимосвязь гласных основы и окончания в соответствии с законом гармонии гласных. Установите значения слов с окончаниями при помощи знающих тувинский язык.<br>
              Солун(-дар, -нер, -нар, -лер, -нарывыс) – газета; <br>
              сөс (-лар, -дер, -тер, -терниё, -нар) – слово; <br>
              соңга (-нер, -дар, -тер, -лар, -нар, -ларывыс, -дар) – окно.
              `,
              instrEn: `Underline the endings that can be added to these words. Note the relationship between the vowels of the stem and ending according to the law of vowel harmony. Determine the meanings of the words with the endings with the help of Tuvan speakers.<br>
              Солун(-дар, -нер, -нар, -лер, -нарывыс) – newspaper; <br>
              сөс (-лар, -дер, -тер, -терниң, -нар) – word; <br>
              соңга (-нер, -дар, -тер, -лар, -нар, -ларывыс, -дар) – window.
              `,
            },
          ],
        },
        {
          id: "l6-answers",
          type: "answers",
          titleRu: "Ответы к упражнениям",
          titleEn: "Answer Key",
          exercises: [
            {
              titleRu: "Ответы к упражнению 1",
              titleEn: "Answers to Exercise 1",
              instrRu: "",
              instrEn: "",
              examples: [
                {
                  tuvan: `айтырыг - айтырыглар,<br> демир - демирлер, <br> хурал - хуралдар, <br>
                  бажың - бажыңнар, <br> бөлүк - бөлүктер, <br> чапсар - чапсарлар, <br>
                  садыг - садыглар, <br> терек - теректер, <br> базаар - базаарлар, <br>
                  школа - школалар, <br> класс - класстар, <br> оол - оолдар, <br> 
                  кыс - кыстар, <br> херим - херимнер, <br> чурук - чуруктар, <br> 
                  карта - карталар, <br> хөйлең - хөйлеңнер, <br> дыргак - дыргактар.`,
                  ru: `айтырыг - айтырыглар,<br> демир - демирлер, <br> хурал - хуралдар, <br>
                  бажың - бажыңнар, <br> бөлүк - бөлүктер, <br> чапсар - чапсарлар, <br>
                  садыг - садыглар, <br> терек - теректер, <br> базаар - базаарлар, <br>
                  школа - школалар, <br> класс - класстар, <br> оол - оолдар, <br> 
                  кыс - кыстар, <br> херим - херимнер, <br> чурук - чуруктар, <br> 
                  карта - карталар, <br> хөйлең - хөйлеңнер, <br> дыргак - дыргактар.
                  `,
                  en: `айтырыг - айтырыглар,<br> демир - демирлер, <br> хурал - хуралдар, <br>
                  бажың - бажыңнар, <br> бөлүк - бөлүктер, <br> чапсар - чапсарлар, <br>
                  садыг - садыглар, <br> терек - теректер, <br> базаар - базаарлар, <br>
                  школа - школалар, <br> класс - класстар, <br> оол - оолдар, <br> 
                  кыс - кыстар, <br> херим - херимнер, <br> чурук - чуруктар, <br> 
                  карта - карталар, <br> хөйлең - хөйлеңнер, <br> дыргак - дыргактар.`,
                },
              ],
            },
            {
              titleRu: "Ответы к упражнению 2",
              titleEn: "Answers to Exercise 2",
              instrRu: "",
              instrEn: "",
              examples: [
                {
                  tuvan: ` Солуннар,<br> 
                  Солуннарывыс), <br>
                  сөстер, <br> 
                  сөстерниң, <br>
                  соңгалар,  <br>
                  соңгаларывыс. <br>`,
                  ru: ` газеты, <br>
                  наши газеты, <br>
                  слова, <br>
                  слов, <br>
                  окна, <br>
                  наши окна.
                  `,
                  en: `newspapers, <br>
                  our newspapers, <br>
                  words, <br>
                  words/ of words, <br>
                  windows, <br>
                  our windows.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      icon: "📐",
      titleRu: "Урок 7",
      titleEn: "Lesson 7",
      titleTuvan: "7 кичээл",
      subRu: "Склонение существительных. 7 падежей.",
      subEn: "Declension of Nouns. 7 Cases.",
      sections: [
        {
          id: "l7-cases",
          type: "grammar",
          titleRu: "Склонение существительных",
          titleEn: "Declension of Nouns",
          titleTuvan: "Чүве аттарның падежтерге өскерлири",
          rules: [
            {
              titleRu: "Семь падежей",
              titleEn: "Seven Cases",
              ru: `<ol>
              В тувинском языке 7 падежей:
              <li><b>адаарының падежи</b> (именительный падеж) <i>кым? чүү? </i>(кто? что?) – кижи (человек), орук (дорога), даш (камень), хол (рука);</li>
              <li><b>хамаарыштырарының падежи</b> (родительный падеж) – <i>кымның? чүнүң?</i> (кого? чего? чей?) – кижиниң, оруктуң, даштың холдуң;</li>
              <li><b>онаарының падежи</b> (винительный падеж) – <i>кымны? чүнү? </i>(кого? что?) – кижини, орукту, дашты, холду;</li>
              <li><b>бээриниң падежи</b> (дательный падеж) – <i>кымга? чүге?</i> (кому? чему?) – кижиге, орукка, дашка, холга; </li>
              <li><b>турарының падежи</b> (местный падеж) – <i>кымда? чүде?</i> (у кого? у чего? где?) – кижиде, орукта, дашта, холда;</li>
              <li><b>үнериниң падежи</b> (исходный падеж) – <i>кымдан? чүден? кайыын? </i> (от кого? от чего? откуда?) – кижиден, оруктан, даштан, холдан;</li>
              <li><b>углаарының падежи</b> (направительный падеж) – <i>кымче? чүүже? кайнаар? </i> (к кому? к чему? куда?) – кижиже, орукче, дашче, холче. </li>
              </ol>
              
              <ol>
              Запомните:
              <li>Вопросы <b>кым?</b> (кто?), <b>кымның? </b>(кого?), <b>кымны? </b>(кого?), <b>кымга? </b>(кому?) <b>кымда? </b>(у кого?), <b>кымдан? </b>(от кого?), <b>кымче? </b>(к кому?) употребляются только по отношению к человеку.</li>
              <li>Вопросы <b>чүү?</b> (что?),<b>чүнүң? </b>(чего? чей?), <b>чүнү? </b>(что?), <b>чүге?</b> (чему?), <b>чүде? </b>(у чего? где?), <b>чүден? </b>(от чего? откуда?), <b>чүүже</b> (к чему? куда?) употребляются по отношению ко всему живому и неживому, кроме человека, 
              например: чүү? (что?) – даш (камень), инек (корова), адыг (медведь); чүнүң? (чего? чей?) – даштың, инектиң, адыгның; чүнү? (что?) – дашты, инекти, адыгны и т.д.</li>
              </ol>
              `,
              en: `<ol> 
              There are 7 cases in the Tuvan language: 
              <li><b>адаарының падежи</b> (nominative case) <i>кым? чүү? </i>(who? what?) – кижи (person), орук (road), даш (stone), хол (hand);</li> 
              <li><b>хамаарыштырарының падежи</b> (genitive case) – <i>кымның? чүнүң?</i> (whom? what? whose?) – кижиниң, оруктуң, даштың холдуң;</li> 
              <li><b>онаарының падежи</b> (accusative case) – <i>кымны? чүнү?</i>(who? what?) – кижини, орукту, дашты, холду;</li> 
              <li><b>бээриниң падежи</b> (dative case) – <i>кымга? чүге?</i>(to whom? what?) – кижиге, орукка, дашка, холга; </li> 
              <li><b>турарының падежи</b> (local case) – <i>кымда? чүде?</i>(from whom? from what? where?) – кижиде, орукта, дашта, холда;</li> 
              <li><b>үнериниң падежи</b> (initial case) – <i>кымдан? чүден? кайыын? </i> (from whom? from what? where from?) – кижиден, оруктан, даштан, холдан;</li> 
              <li><b>углаарының падежи</b> (directive case) – <i>кымче? чүүже? кайнаар? </i> (to whom? to what? where?) – кижиже, орукче, дашче, холче. </li> 
              </ol> 
              
              <ol> Remember: 
              <li>Questions <b>кым?</b> (who?), <b>кымның? </b>(who?), <b>кымны? </b>(who?), <b>кымга? </b>(to whom?) <b>кымда? </b>(from whom?), <b>кымдан? </b>(from whom?), <b>кымче? </b>(to whom?) are used only in relation to a person.</li> 
              <li>Questions <b>чүү?</b> (what?),<b>чүнүң? </b>(what? whose?), <b>чүнү? </b>(what?), <b>чүге?</b> (to what?), <b>чүде? </b>(at what? where?), <b>чүден? </b>(from what? where from?), <b>чүүже</b> (to what? where?) are used in relation to everything living and nonliving, except humans, 
              for example: чүү? (what?) – даш (stone), инек (cow), адыг (bear); чүнүң? (what? whose?) – даштың, инектиң, адыгның; чүнү? (what?) – дашты, инекти, адыгны, etc.</li> 
              </ol>`,
            },
          ],
        },
        {
          id: "l7-phrases",
          type: "phrases",
          titleRu: "Вопросы",
          titleEn: "Questions",
          phrases: [
            {
              tuvan: "Канчаар? Канчап?",
              ru: "Как?",
              en: "How?",
              audioSrc: "",
            },
            {
              tuvan: "Канчаарыл?.",
              ru: "Как быть? Что делать?",
              en: "What to do?",
              audioSrc: "",
            },
            {
              tuvan: "Канчаар кылырыл?",
              ru: "Как сделать?",
              en: "How to do?",
              audioSrc: "",
            },
            {
              tuvan: "Канчаар кылганыл?",
              ru: "Как (это) было сделано?",
              en: "How was it done?",
              audioSrc: "",
            },
            {
              tuvan: "Канчап ындыг боор?",
              ru: "Как же так?",
              en: "How so?",
              audioSrc: "",
            },
            {
              tuvan: "Канчаптыңар?",
              ru: "Как (вы) сделали?",
              en: "How did you do it?",
              audioSrc: "",
            },
            {
              tuvan: "Кандыг?",
              ru: "Какой?",
              en: "What/which?",
              audioSrc: "",
            },
            {
              tuvan: "Кандыг бодалдыг силер?",
              ru: "Какие у вас есть предложения (мысли)?",
              en: "What suggestions (thoughts) do you have?",
              audioSrc: "",
            },
            {
              tuvan: "Кандыг-дыр?",
              ru: "Ну и как? Ну и каково?",
              en: "So how is it?",
              audioSrc: "",
            },
            {
              tuvan: "Кандыг айтырыг барыл?",
              ru: "Какой есть вопрос?",
              en: "What is the question?",
              audioSrc: "",
            },
            {
              tuvan: "Кандыг айтырыглыг чор силер?",
              ru: "С каким вопросом вы пришли?",
              en: "What question do you have?",
              audioSrc: "",
            },
            {
              tuvan: "Кандыг херектиг чор силер?",
              ru: "По какому делу вы пришли?",
              en: "What is your business here?",
              audioSrc: "",
            },
            {
              tuvan: "Кайыын? Кайын?",
              ru: "Откуда?",
              en: "Where from?",
              audioSrc: "",
            },
            {
              tuvan: "Кайыын келдиңер?",
              ru: "Откуда вы пришли (приехали)?",
              en: "Where did you come from?",
              audioSrc: "",
            },
            {
              tuvan: "Кайыын тып алырыл?",
              ru: "Откуда бы найти (достать)?",
              en: "Where to find (get) it from?",
              audioSrc: "",
            },
            {
              tuvan: "Кайын ындыг боор?!",
              ru: "Откуда (с чего бы) это так?!",
              en: "Where (why) is this so?!",
              audioSrc: "",
            },
            {
              tuvan: "Каш? Чеже?",
              ru: "Сколько?",
              en: "How many (much)",
              audioSrc: "",
            },
            {
              tuvan: "Каш шак-тыр?",
              ru: "Сколько времени?",
              en: "What time is it?",
              audioSrc: "",
            },
            {
              tuvan: "Каш (чеже) кижи силер?",
              ru: "Сколько вас человек?",
              en: "How many of you are there?",
              audioSrc: "",
            },
            {
              tuvan: "Каш шакта келир мен?",
              ru: "Во сколько мне прийти?",
              en: "What time should I come?",
              audioSrc: "",
            },
            {
              tuvan: "Каш шакта ужуражып алыр бис? ",
              ru: "Во сколько мы встретимся?",
              en: "What time shall we meet?",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l7-phrases",
          type: "phrases",
          titleRu: "Предложения",
          titleEn: "Sentences",
          phrases: [
            {
              tuvan: "Мону меңээ тайылбырлап берип көрүңерем",
              ru: "Объясните, пожалуйста, мне это",
              en: "Please explain this to me",
              audioSrc: "",
            },
            {
              tuvan: "Айтып берип көрүңер",
              ru: "Объясните (покажите, укажите), пожалуйста",
              en: "Please explain (show, indicate)",
              audioSrc: "",
            },
            {
              tuvan: "Бижип берип көрүңер",
              ru: "Напишите, пожалуйста",
              en: "Please write",
              audioSrc: "",
            },
            {
              tuvan: "Айтырып алыйн",
              ru: "Спрошу-ка",
              en: "Let me ask",
              audioSrc: "",
            },
            {
              tuvan: "Бижип алыйн",
              ru: "Напишу-ка.",
              en: "Let me write it down.",
              audioSrc: "",
            },
            {
              tuvan: "Сактып алыйн",
              ru: "Запомню-ка",
              en: "Let me remember this",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l7-phrases",
          type: "phrases",
          titleRu: "Вопросы и Ответы",
          titleEn: "Questions and Answers",
          phrases: [
            {
              tuvan: "Бо чүл?",
              ru: "Что это?",
              en: "What is it?",
              audioSrc: "",
            },
            {
              tuvan: "Бо бажың-дыр",
              ru: "Это дом",
              en: "It's a house",
              audioSrc: "",
            },
            {
              tuvan: "Мону чүү дээрил?",
              ru: "Как это называется?",
              en: "How is it called?",
              audioSrc: "",
            },
            {
              tuvan: "Мону тывалап «эжик» дээр",
              ru: "Это по-тувински называется «эжик» (дверь).",
              en: "It's called «эжик» (door) in Tuvan",
              audioSrc: "",
            },
            {
              tuvan: "А бо чүл?",
              ru: "А это что?",
              en: "And what is it?",
              audioSrc: "",
            },
            {
              tuvan: "Бо садыг-дыр",
              ru: "Это магазин.",
              en: "It's a shop",
              audioSrc: "",
            },
            {
              tuvan: "Силерге чүү херек ирги?",
              ru: "Что вам нужно?",
              en: "What do you need?",
              audioSrc: "",
            },
            {
              tuvan: "Мону ап болур бе?",
              ru: "Можно это взять?",
              en: "May I take it?",
              audioSrc: "",
            },
            {
              tuvan: "Ийе, болур",
              ru: "Да, можно",
              en: "Yes, you may",
              audioSrc: "",
            },
            {
              tuvan: "Улуу-биле четтирдим",
              ru: "Большое спасибо",
              en: "Thank you very much",
              audioSrc: "",
            },
            {
              tuvan: "Четтирдим",
              ru: "Спасибо",
              en: "Thank you",
              audioSrc: "",
            },
            {
              tuvan: "Ажырбас",
              ru: "Не за что (пожалуйста, ничего)",
              en: "You are welcome",
              audioSrc: "",
            },
            {
              tuvan: "Меңээ дыка-ла дузаладыңар",
              ru: "Вы мне очень помогли",
              en: "You helped me a lot",
              audioSrc: "",
            },
            {
              tuvan: "Дузалааныңар дээш четтирдивис",
              ru: "Спасибо за помощь (содействие)",
              en: "Thank you for your help (assistance)",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l7-ex",
          type: "exercise",
          titleRu: "Упражнения",
          titleEn: "Exercises",
          exercises: [
            {
              titleRu: "Упражнение 1",
              titleEn: "Exercise 1",
              instrRu: `Просклоняйте слова письменно по падежам, проставляя к ним сверху соответствующие вопросы.<br>
              <i>Чолаачы (шофер), аът (лошадь), машина, суг (вода), демир (железо), оол (мальчик), тон (шуба, пальто), чогаалчы (писатель).</i>`,
              instrEn: `Decline words in writing by case, placing the corresponding questions above them. <br>
              <i>Чолаачы (driver), аът (horse), машина, суг (water), демир (iron), оол (boy), тон (fur coat, overcoat), чогаалчы (writer).</i>`,
            },
            {
              titleRu: "Упражнение 2",
              titleEn: "Exercise 2",
              instrRu: `Образуйте множественное число и измените слова по падежам.<br>
              <i>Салаа (палец), саазын (бумага), ыяш (дерево), кыс (девушка), шак (часы).</i><br>
              <b>Образец:</b> салаа + лар = салаалар.<br>
              А.п. салаалар<br>
              Б.п. салааларга<br>
              О.п. салааларны<br>
              Х.п. салааларныё<br>
              Т.п. салааларда<br>
              Ү.п. салаалардан<br>
              У.п. салааларже<br>
              `,
              instrEn: `Form the plural and change the words according to case.<br>
              <i>Салаа (finger), саазын (paper), ыяш (tree), кыс (girl), шак (watch).</i><br>
              <b>Example:</b> салаа + лар = салаалар.<br>
              А.п. салаалар<br>
              Б.п. салааларга<br>
              О.п. салааларны<br>
              Х.п. салааларныё<br>
              Т.п. салааларда<br>
              Ү.п. салаалардан<br>
              У.п. салааларже<br>
              `,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      icon: "⏰",
      titleRu: "Урок 8",
      titleEn: "Lesson 8",
      titleTuvan: "8 кичээл",
      subRu: "Спряжение глагола. Настоящее, прошедшее, будущее время.",
      subEn: "Verb Conjugation. Present, Past, Future.",
      sections: [
        {
          id: "l8-present",
          type: "grammar",
          titleRu: "Настоящее время",
          titleEn: "Present Tense",
          rules: [
            {
              titleRu: "Положительная форма",
              titleEn: "Affirmative form",
              ru: `<b>Чаңгыстың саны – единственное число</b><br>
              1 лицо. Мен кылып тур мен – Я делаю<br>
              2 лицо. Сен кылып тур сен – Ты делаешь<br>
              3 лицо. Ол кылып тур – Он делает<br>
              Уважительная форма. Силер кылып тур силер – Ты делаешь<br>
              
              <b>хөйнүң саны – множественное число</b><br>
              1 лицо. Бис кылып тур бис – Мы делаем<br>
              2 лицо. Силер кылып тур силер – Вы делаете<br>
              3 лицо. Олар кылып тур(лар) – Они делают
              `,
              en: `<b>Чаңгыстың саны – singular form</b><br>
              1. Мен кылып тур мен – I do<br>
              2. Сен кылып тур сен – You do<br>
              3. Ол кылып тур – He/She/It does<br>
              Formal/Respectful form to one person. Силер кылып тур силер – You do<br>
              
              <b>хөйнүң саны – plural form</b><br>
              1. Бис кылып тур бис – We do<br>
              2. Силер кылып тур силер – You do<br>
              3. Олар кылып тур(лар) – They do
              `,
            },
            {
              titleRu: "Отрицательная форма",
              titleEn: "Negative form",
              ru: `<b>Чаңгыстың саны – единственное число</b><br>
            1.Мен кылбайн тур мен – Я не делаю<br>
            2.Сен кылбайн тур сен – Ты не делаешь<br>
            3.Ол кылбайн тур – Он не делает<br>
            Уважительная форма. Силер кылбайн тур силер – Вы не делаете<br>

            <b>хөйнүң саны – множественное число</b><br>
             1.Бис кылбайн тур бис – Мы не делаем<br>
             2.Силер кылбайн тур силер – Вы не делаете<br>
             3.Олар кылбайн тур(лар) – Они не делают<br>
              `,
              en: `<b>Чаңгыстың саны – singular form</b><br>
            1.Мен кылбайн тур мен – I don't do<br>
            2.Сен кылбайн тур сен – You don't do<br>
            3.Ол кылбайн тур – He/She/It doesn't do<br>
            Formal/Respectful form to one person. Силер кылбайн тур силер – You don't do<br>

            <b>хөйнүң саны – plural form</b><br>
            1.Бис кылбайн тур бис – We don't do<br>
            2.Силер кылбайн тур силер – You don't do<br>
            3.Олар кылбайн тур(лар) – They don't do<br>
            `,
            },
          ],
        },
        {
          id: "l8-past",
          type: "grammar",
          titleRu: "Прошедшее время",
          titleEn: "Past Tense",
          rules: [
            {
              titleRu: "Утвердительная форма",
              titleEn: "Affirmative form",
              ru: `<b>Чаңгыстың саны – единственное число</b><br>
            1.Мен көрген мен – Я видел<br>
            2.Сен көрген сен – Ты видел<br>
            3.Ол көрген – Он/Она видел(а)<br>
            Уважительная форма. Силер көрген силер – Вы видели<br>
              
              <b>хөйнүң саны – множественное число</b><br>
             1.Бис көрген бис – Мы видели<br>
             2.Силер көрген силер – Вы видели<br>
             3.Олар көрген(нер) – Они видели<br>
              `,
              en: `<b>Чаңгыстың саны – singular form</b><br>
             1.Мен көрген мен – I saw<br>
             2.Сен көрген сен – You saw<br>
             3.Ол көрген – He/She/It saw<br>
             Formal/Respectful form to one person. - Силер көрген силер – You saw<br>
              
            <b>хөйнүң саны – plural form</b><br>
             1.Бис көрген бис – We saw<br>
             2.Силер көрген силер – You saw<br>
             3.Олар көрген(нер) – They saw<br>
              `,
            },
            {
              titleRu: "Отрицательная форма",
              titleEn: "Negative form",
              ru: `<b>Чаңгыстың саны – единственное число</b><br>
          1.Мен көрбээн мен – Я не видел<br>
          2.Сен көрбээн сен – Ты не видел<br>
          3.Ол көрбээн – Он/Она не видел(а)<br>
          Formal/Respectful form to one person. Силер көрбээн силер – Вы не видели<br>
              
          <b>хөйнүң саны – множественное число</b><br>
          1.Бис көрбээн бис – Мы не видели<br>
          2.Силер көрбээн силер – Вы не видели<br>
          3.Олар көрбээн(нер) – Они не видели<br>
              `,
              en: `<b>Чаңгыстың саны – singular form</b><br>
          1.Мен көрбээн мен – I didn't see<br>
          2.Сен көрбээн сен – You didn't see<br>
          3.Ол көрбээн – He/She/It didn't see<br>
          Уважительная форма. Силер көрбээн силер – You didn't see<br>
              
          <b>хөйнүң саны – plural form</b><br>
          1.Бис көрбээн бис – We didn't see<br>
          2.Силер көрбээн силер – You didn't see<br>
          3.Олар көрбээн(нер) – They didn't see<br>
              `,
            },
          ],
        },
        {
          id: "l8-future",
          type: "grammar",
          titleRu: "Будущее время",
          titleEn: "Future Tense",
          rules: [
            {
              titleRu: "Утвердительная форма",
              titleEn: "Affirmative form",
              ru: `<b>Чаңгыстың саны – единственное число</b><br>
          1.Мен келир мен – Я приду<br>
          2.Сен келир сен – Ты придешь<br>
          3.Ол келир – Он/она придет<br>
          Уважительная форма. - Силер келир силер – Вы придете<br>
              
          <b>хөйнүң саны – множественное число</b><br>
         1.Бис келир бис – Мы придем<br>
         2.Силер келир силер – Вы придете<br>
         3.Олар келир(лер) – Они придут<br>
              `,
              en: `<b>Чаңгыстың саны – singular form</b><br>
          1.Мен келир мен – I will come<br>
          2.Сен келир сен – You will come<br>
          3.Ол келир – He/She/It will come<br>
          Formal/Respectful form to one person. - Силер келир силер – You will come<br>
              
          <b>хөйнүң саны – plural form</b><br>
          1.Бис келир бис – We will come<br>
         2.Силер келир силер – You will come<br>
         3.Олар келир(лер) – They will come<br>
              `,
            },
            {
              titleRu: "Отрицательная форма",
              titleEn: "Negative form",
              ru: `<b>Чаңгыстың саны – единственное число</b><br>
          1.Мен көрбээн мен – Я не видел<br>
          2.Сен көрбээн сен – Ты не видел<br>
          3.Ол көрбээн – Он/Она не видел(а)<br>
         Уважительная форма. - Силер көрбээн силер – Вы не видели<br>
              
          <b>хөйнүң саны – множественное число </b><br>
          1.Бис көрбээн бис – Мы не видели<br>
          2.Силер көрбээн силер – Вы не видели<br>
          3.Олар көрбээн(нер) – Они не видели<br>
              `,
              en: `<b>Чаңгыстың саны – singular form</b><br>
          1.Мен албас мен – I will not take<br>
          2.Сен албас сен – You will not take<br>
          3.Ол албас – He/She/It will not take<br>
           Formal/Respectful form to one person. Силер албас силер – You will not take<br>
              
          <b>хөйнүң саны – plural form</b><br>
         1.Бис албас бис – We will not take<br>
         2.Силер албас силер – You will not take<br>
         3.Олар албас(тар) – They will not take<br>
              `,
            },
          ],
        },
        {
          id: "l8-rules",
          type: "grammar",
          titleRu: "Общие правила",
          titleEn: "General rules",
          rules: [
            {
              titleRu: "Общие правила",
              titleEn: "General rules",
              ru: `<ol>
              <li>Во всех приведенных примерах слова <b>мен, сен, бис, силер</b> являются в начале предложения личными местоимениями – подлежащими, отвечающими на вопрос <b>кым? кымнар? – кто?</b>, 
              а в конце предложения – показателями лица и числа сказуемого, т.е. словами, выполняющими служебную функцию в предложении.</li>
              <li>Во всех этих предложениях подлежащие могут быть опущены, а показатели лица и числа сказуемого обязательно присутствуют (см. о личных местоимениях в 5-м уроке), например:
              <ul>
              <li>Мен көрген мен – Я видел.</li>
              <li>Көрген мен – Я видел.</li>
              <li>Силер келир силер – Вы придете.</li>
              <li>Келир силер – Вы придете.</li>
              <li>Ол келбээн – Он не пришел.</li>
              <li>Келбээн – Он не пришел.</li>
              </ul>
              </li>
              </ol>
              `,
              en: `<ol>
              <li>In all the examples given, the words <b>мен, сен, бис, силер</b> are personal pronouns at the beginning of the sentence—subjects answering the question <b>кым? кымнар?—who?</b>, 
              and at the end of the sentence—they indicate the person and number of the predicate, i.e. Words that perform a functional function in the sentence.</li>
              <li>In all of these sentences, subjects can be omitted, but the person and number markers of the predicate are always present (see Lesson 5 for personal pronouns), for example:
              <ul>
              <li>Мен көрген мен – I saw.</li>
              <li>Көрген мен – I saw.</li>
              <li>Силер килир силер – You will come.</li>
              <li>Килир силер – You will come.</li>
              <li>Ол кэлбээн – He didn't come.</li>
              <li>Кэлбээн – He didn't come.</li>
              </ul>
              </li>
              </ol>
              `,
            },
          ],
        },
        {
          id: "l8-ex",
          type: "exercise",
          titleRu: "Упражнения",
          titleEn: "Exercises",
          exercises: [
            {
              titleRu: "Упражнение 1",
              titleEn: "Exercise 1",
              instrRu: `Устно и письменно составьте предложения сначала с подлежащими <b>мен, сен, бис, силер</b>, затем – опуская их.<br>
              Бижиир, бижип тур, бижээн – писать;<br> номчуур, номчуп тур, номчаан – читать;<br> ажылдаар, ажылдап тур, ажылдаан – работать.
              `,
              instrEn: `Orally and in writing, make sentences first with the subjects <b>мен, сен, бис, силер</b>, then omitting them.<br> 
              Бижиир, бижип тур, бижээн - write;<br> номчуур, номчуп тур, номчаан  - read;<br> ажылдаар, ажылдап тур, ажылдаан - work.
              `,
            },
            {
              titleRu: "Упражнение 2",
              titleEn: "Exercise 2",
              instrRu: `Составьте письменно вопросы со словом <b>кажан? – когда?</b>, используя предложения, приведенные как примеры спряжения глаголов будущего и прошедшего времени.<br>
              <i>Образец 1. Мен келир мен. Кажан мен келир мен? Кажан келир мен? Когда я приду? 2. Мен көрген мен. Кажан мен көрген мен? Кажан көрген мен?</i><br>
              Дайте устно краткие ответы на поставленные вопросы, пользуясь словами <b>даарта – завтра, бөгүн – сегодня, дүүн – вчера</b>.
              `,
              instrEn: `Write questions with the word <b>кажан? – when?</b>, using the sentences given as examples of conjugating future and past tense verbs.<br>
              <i>Example 1. Мен келир мен. Кажан мен келир мен? Кажан келир мен? Когда я приду? 2. Мен көрген мен. Кажан мен көрген мен? Кажан көрген мен?</i><br>
              Give short answers to the questions orally, using the words <b>даарта – tomorrow, бөгүн – today, дүүн – yesterday</b>.`,
            },
          ],
        },
      ],
    },
    {
      id: 9,
      icon: "🗣️",
      titleRu: "Урок 9",
      titleEn: "Lesson 9",
      titleTuvan: "9 кичээл",
      subRu: "Вопросы и ответы. Склонение местоимений.",
      subEn: "Questions & Answers. Pronoun Declension.",
      sections: [
        {
          id: "l9-qa",
          type: "phrases",
          titleRu: "Вопросы кым? кымга?",
          titleEn: "Questions кым? кымга?",
          phrases: [
            {
              tuvan: "Кымга кээдиңер?",
              ru: "К кому вы пришли?",
              en: "Whom did you come to?",
              audioSrc: "",
            },
            {
              tuvan: "Силерге кээдим.",
              ru: "Я пришёл(а) к вам.",
              en: "I came to you.",
              audioSrc: "",
            },
            {
              tuvan: "Кымны дилеп тур сен?",
              ru: "Кого ты ищешь?",
              en: "Who are you looking for?",
              audioSrc: "",
            },
            {
              tuvan: "Сөс берим!",
              ru: "Дайте мне слово!",
              en: "Give me the floor!",
              audioSrc: "",
            },
            {
              tuvan: "Чугаалап болур мен бе?",
              ru: "Можно мне высказаться?",
              en: "May I speak?",
              audioSrc: "",
            },
            {
              tuvan: "Кымга дааскынны бэрим?",
              ru: "Кому дать задание?",
              en: "Who should be given the task?",
              audioSrc: "",
            },
            {
              tuvan: "Кымны соңгуурун санал-оналдаар сен?",
              ru: "Кого предлагаешь избрать?",
              en: "Who do you propose to elect?",
              audioSrc: "",
            },
          ],
        },
        {
          id: "l9-decl",
          type: "grammar",
          titleRu: "Склонение личных местоимений",
          titleEn: "Declension of Personal Pronouns",
          rules: [
            {
              titleRu: "Мен (я)",
              titleEn: "Мен — I",
              ru: "Им. мен. Род. мээң. Дат. меңге. Вин. мени. Мест. менде. Исх. менден. Напр. меңге.",
              en: "Nom. мен. Gen. мээң. Dat. меңге. Acc. мени. Loc. менде. Abl. менден. Dir. меңге.",
            },
            {
              titleRu: "Силер (вы)",
              titleEn: "Силер — you (pl.)",
              ru: "Им. силер. Род. силерниң. Дат. силерге. Вин. силерни. Мест. силерде. Исх. силерден. Напр. силерже.",
              en: "Nom. силер. Gen. силерниң. Dat. силерге. Acc. силерни. Loc. силерде. Abl. силерден. Dir. силерже.",
            },
            {
              titleRu: "Бис (мы)",
              titleEn: "Бис — we",
              ru: "Им. бис. Род. бистиң. Дат. биске. Вин. бисти. Мест. бисте. Исх. бистен. Напр. биске.",
              en: "Nom. бис. Gen. бистиң. Dat. биске. Acc. бисти. Loc. бисте. Abl. бистен. Dir. биске.",
            },
            {
              titleRu: "Ол (он/она)",
              titleEn: "Ол — he/she",
              ru: "Им. ол. Род. ооң. Дат. аңаа. Вин. ону. Мест. анда. Исх. андан. Напр. аңаа.",
              en: "Nom. ол. Gen. ооң. Dat. аңаа. Acc. ону. Loc. анда. Abl. андан. Dir. аңаа.",
            },
          ],
        },
      ],
    },
  ];

  getAll(): Lesson[] {
    return this.data;
  }
  getById(id: number): Lesson | undefined {
    return this.data.find((l) => l.id === id);
  }
}
