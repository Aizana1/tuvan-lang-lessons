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
              tuvan: "Байырлал (Чаа чыл, төрүттүнген хүнүңер) таварыштыр Силерге байыр чедирип тур мен!",
              ru: "Поздравляю вас с праздником (Новым годом, днем рождения)!",
              en: "Happy holiday (New Year, birthday)!",
              audioSrc: "",
            },
            {
              tuvan: "Тиилелгеңер-биле Силерге байыр чедирерин чөпшээреп көрүңер!",
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
                  tuvan:
                `45; 85; 14; 99; 62; 11; 84;<br>
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
          titleTuvan: "Айтырыг домактар",
          rules: [
            {
              titleRu: "Частица бе?",
              titleEn: "Particle бе?",
              ru: "С частицей бе? Ты возьмёшь? — Алыр сен бе? Вы возьмёте? — Алыр силер бе?",
              en: "With the particle бе? You will take? — Алыр сен бе? Will you take? — Алыр силер бе?",
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
              ru: "чок — отсутствие: Бажың чок (здесь нет дома). эвес — отрицание признака: Бажың эвес, а хаалга.",
              en: "чок — absence: no door here. эвес — negation of a trait: This is not a door, but a window.",
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
              tuvan: "Үе каш болган-дыр?",
              ru: "Сколько времени?",
              en: "What time is it?",
              audioSrc: "",
            },
            {
              tuvan: "Кажан кээрим-дыр?",
              ru: "Когда мне прийти?",
              en: "When should I come?",
              audioSrc: "",
            },
            {
              tuvan: "Кайыын чорупкан-дыр?",
              ru: "Куда ты идёшь?",
              en: "Where are you going?",
              audioSrc: "",
            },
            {
              tuvan: "Кайындан келген-дир?",
              ru: "Откуда ты пришёл?",
              en: "Where did you come from?",
              audioSrc: "",
            },
            {
              tuvan: "Кайда таваржыылы?",
              ru: "Где встретимся?",
              en: "Where shall we meet?",
              audioSrc: "",
            },
            {
              tuvan: "Амдыы чүнү канчаалы?",
              ru: "Что сейчас будем делать?",
              en: "What shall we do now?",
              audioSrc: "",
            },
            {
              tuvan: "Ол амдыы кайдал?",
              ru: "Где он сейчас?",
              en: "Where is he now?",
              audioSrc: "",
            },
            {
              tuvan: "Чүге ынчалдыр?",
              ru: "Почему так?",
              en: "Why is it like this?",
              audioSrc: "",
            },
            {
              tuvan: "Кайда ажылдаар сен?",
              ru: "Где ты работаешь?",
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
            { tuvan: "бедик", ru: "высокий", en: "high, tall", audioSrc: "" },
            { tuvan: "алчак", ru: "низкий", en: "low", audioSrc: "" },
            { tuvan: "чалгаа", ru: "ленивый", en: "lazy", audioSrc: "" },
            {
              tuvan: "кызымак",
              ru: "трудолюбивый",
              en: "hardworking",
              audioSrc: "",
            },
            {
              tuvan: "имир",
              ru: "широкий",
              en: "wide, spacious",
              audioSrc: "",
            },
            { tuvan: "чинчек", ru: "узкий", en: "narrow", audioSrc: "" },
            { tuvan: "аът", ru: "лошадь", en: "horse", audioSrc: "" },
            { tuvan: "инек", ru: "корова", en: "cow", audioSrc: "" },
            { tuvan: "хоорай", ru: "город", en: "city", audioSrc: "" },
            { tuvan: "суур", ru: "деревня", en: "village", audioSrc: "" },
            { tuvan: "эжик", ru: "дверь", en: "door", audioSrc: "" },
            { tuvan: "нүк", ru: "окно", en: "window", audioSrc: "" },
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
          titleTuvan: "Артынчылар",
          rules: [
            {
              titleRu: "Таблица местоимений",
              titleEn: "Pronouns table",
              ru: "1-е л.: мен (я), бис (мы). 2-е л.: сен (ты), силер (вы). 3-е л.: ол (он/она), олар (они).",
              en: "1st p.: мен (I), бис (we). 2nd p.: сен (you sing.), силер (you pl./formal). 3rd p.: ол (he/she), олар (they).",
            },
            {
              titleRu: "Личный показатель в конце предложения",
              titleEn: "Person marker at end of sentence",
              ru: "Мен ажылдаар мен. Сен кээр сен. Бис ажылдаар бис. Подлежащее может опускаться.",
              en: "Мен ажылдаар мен — I will work. Сен кээр сен — You will come. Бис ажылдаар бис — We will work. The subject can be omitted.",
            },
          ],
        },
        {
          id: "l5-phrases",
          type: "phrases",
          titleRu: "Примеры предложений",
          titleEn: "Example Sentences",
          phrases: [
            {
              tuvan: "Мен ажылдаар мен.",
              ru: "Я буду работать.",
              en: "I will work.",
              audioSrc: "",
            },
            {
              tuvan: "Сен башкысың.",
              ru: "Ты учитель.",
              en: "You are a teacher.",
              audioSrc: "",
            },
            {
              tuvan: "Сен аныяксың.",
              ru: "Ты молодой.",
              en: "You are young.",
              audioSrc: "",
            },
            {
              tuvan: "Мен эмчимен.",
              ru: "Я врач.",
              en: "I am a doctor.",
              audioSrc: "",
            },
            {
              tuvan: "Ол кирип келди.",
              ru: "Он вошёл.",
              en: "He came in.",
              audioSrc: "",
            },
            {
              tuvan: "Олар кээр-лер.",
              ru: "Они придут.",
              en: "They will come.",
              audioSrc: "",
            },
            {
              tuvan: "Бис беш кижи бис.",
              ru: "Нас пятеро.",
              en: "There are five of us.",
              audioSrc: "",
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
            { tuvan: "башкы", ru: "учитель", en: "teacher", audioSrc: "" },
            {
              tuvan: "өөреникчи",
              ru: "ученик",
              en: "student, pupil",
              audioSrc: "",
            },
            { tuvan: "аныяк", ru: "молодой", en: "young", audioSrc: "" },
            { tuvan: "ажылдакчы", ru: "рабочий", en: "worker", audioSrc: "" },
            {
              tuvan: "арткан",
              ru: "стоять, быть",
              en: "to stand, to be",
              audioSrc: "",
            },
            { tuvan: "олурар", ru: "сидеть", en: "to sit", audioSrc: "" },
            {
              tuvan: "чораар",
              ru: "ходить, идти",
              en: "to walk, to go",
              audioSrc: "",
            },
            { tuvan: "таваржыр", ru: "встречать", en: "to meet", audioSrc: "" },
            { tuvan: "ном", ru: "книга", en: "book", audioSrc: "" },
            { tuvan: "солун", ru: "газета", en: "newspaper", audioSrc: "" },
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
          titleTuvan: "Ажык үннерниң чаңгыланышкыны",
          rules: [
            {
              titleRu: "Передние (мягкорядные) гласные",
              titleEn: "Front (soft-row) vowels",
              ru: "э, ээ, и, ии, ө, өө, ү, үү, э, ии — произносятся передней частью языка.",
              en: "э, ээ, и, ии, ө, өө, ү, үү, э, ии — pronounced with the front part of the tongue.",
            },
            {
              titleRu: "Задние (твёрдорядные) гласные",
              titleEn: "Back (hard-row) vowels",
              ru: "а, аа, ы, ыы, о, оо, у, уу, а, ыы — произносятся задней частью языка.",
              en: "а, аа, ы, ыы, о, оо, у, уу, а, ыы — pronounced with the back part of the tongue.",
            },
            {
              titleRu: "Правило гармонии",
              titleEn: "Harmony rule",
              ru: "Если в первом слоге передний гласный — все последующие слоги тоже с передними гласными. Если задний — все с задними. Пример: эш-телер, аът-тар.",
              en: "If the first syllable has a front vowel, all following syllables use front vowels only. If back — all back. Example: эш-телер, аът-тар.",
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
              titleRu: "-лар/-лер — после гласных, н, ң, р, й",
              titleEn: "-лар/-лер — after vowels, н, ң, р, й",
              ru: "чер-лер (земли), даг-лар (горы), ай-лар (месяцы), хеме-лер (лодки).",
              en: "чер-лер (lands), даг-лар (mountains), ай-лар (months), хеме-лер (boats).",
            },
            {
              titleRu: "-нар/-нер — после з, ж, л",
              titleEn: "-нар/-нер — after з, ж, л",
              ru: "хем-нер (реки), сан-нар (числа), мал-дар (животные).",
              en: "хем-нер (rivers), сан-нар (numbers), мал-дар (animals).",
            },
            {
              titleRu: "-дар/-дер — после л, м",
              titleEn: "-дар/-дер — after л, м",
              ru: "хөл-дер (озёра), хол-дар (руки).",
              en: "хөл-дер (lakes), хол-дар (hands).",
            },
            {
              titleRu: "-тар/-тер — после глухих",
              titleEn: "-тар/-тер — after voiceless consonants",
              ru: "орук-тар (дороги), белек-тер (подарки).",
              en: "орук-тар (roads), белек-тер (gifts).",
            },
          ],
        },
        {
          id: "l6-phrases",
          type: "phrases",
          titleRu: "Выражения",
          titleEn: "Expressions",
          phrases: [
            {
              tuvan: "Кош келдиңер!",
              ru: "Добро пожаловать!",
              en: "Welcome!",
              audioSrc: "",
            },
            {
              tuvan: "Биске кирип келиңер.",
              ru: "Заходите к нам.",
              en: "Please come to us.",
              audioSrc: "",
            },
            {
              tuvan: "Шай иjer алыңар.",
              ru: "Выпейте чаю.",
              en: "Have a cup of tea.",
              audioSrc: "",
            },
            {
              tuvan: "Үе каш болган-дыр?",
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
          titleRu: "Семь падежей",
          titleEn: "Seven Cases",
          rules: [
            {
              titleRu: "1. Именительный падеж (кым? чүl?)",
              titleEn: "1. Nominative (кым? чүl?)",
              ru: "Основная форма. Примеры: кижи (человек), орук (дорога), хол (рука).",
              en: "Basic form. Examples: кижи (person), орук (road), хол (hand).",
            },
            {
              titleRu: "2. Родительный падеж (кымның? чүнүң?)",
              titleEn: "2. Genitive (кымның? чүнүң?)",
              ru: "Суффикс -ның/-ниң/-туң/-түң/-дуң/-дүң/-туг/-түг. Примеры: кижиниң, оруктуң, холдуң.",
              en: "Suffix -ның/-ниң. Examples: кижиниң, оруктуң, холдуң.",
            },
            {
              titleRu: "3. Дательный падеж (кымга? чүге?)",
              titleEn: "3. Dative (кымга? чүге?)",
              ru: "Суффикс -га/-ге/-ка/-ке. Примеры: кижиге, орукка, холга.",
              en: "Suffix -га/-ге/-ка/-ке. Examples: кижиге, орукка, холга.",
            },
            {
              titleRu: "4. Винительный падеж (кымны? чүнү?)",
              titleEn: "4. Accusative (кымны? чүнү?)",
              ru: "Суффикс -ны/-ни/-ты/-ти/-ды/-ди. Примеры: кижини, оруктү, холды.",
              en: "Suffix -ны/-ни. Examples: кижини, оруктү, холды.",
            },
            {
              titleRu: "5. Местный падеж (кымда? чүде?)",
              titleEn: "5. Locative (кымда? чүде?)",
              ru: "Суффикс -да/-де/-та/-те. Примеры: кижиде, оруктда, холда.",
              en: "Suffix -да/-де/-та/-те. Examples: кижиде, оруктда, холда.",
            },
            {
              titleRu: "6. Исходный падеж (кымдан? чүден?)",
              titleEn: "6. Ablative (кымдан? чүден?)",
              ru: "Суффикс -дан/-ден/-тан/-тен. Примеры: кижиден, оруктан, холдан.",
              en: "Suffix -дан/-ден/-тан/-тен. Examples: кижиден, оруктан, холдан.",
            },
            {
              titleRu: "7. Направительный падеж (кымче? чүже?)",
              titleEn: "7. Directive (кымче? чүже?)",
              ru: "Суффикс -же/-че. Примеры: кижиже, орукче, холже.",
              en: "Suffix -же/-че. Examples: кижиже, орукче, холже.",
            },
          ],
        },
        {
          id: "l7-phrases",
          type: "phrases",
          titleRu: "Вопросы и ответы",
          titleEn: "Questions & Answers",
          phrases: [
            {
              tuvan: "Бо чүл?",
              ru: "Что это?",
              en: "What is this?",
              audioSrc: "",
            },
            {
              tuvan: "Бо бажың-дыр.",
              ru: "Это дом.",
              en: "This is a house.",
              audioSrc: "",
            },
            {
              tuvan: "Ооң ады кандыгыл?",
              ru: "Как это называется?",
              en: "What is this called?",
              audioSrc: "",
            },
            {
              tuvan: "Силерге чүл херек?",
              ru: "Что вам нужно?",
              en: "What do you need?",
              audioSrc: "",
            },
            {
              tuvan: "Бону алырым бе?",
              ru: "Можно мне взять это?",
              en: "May I take this?",
              audioSrc: "",
            },
            {
              tuvan: "Хөй четтирдим.",
              ru: "Большое спасибо.",
              en: "Many thanks.",
              audioSrc: "",
            },
            {
              tuvan: "Дыка дузалаттыңар.",
              ru: "Вы очень помогли мне.",
              en: "You helped me a lot.",
              audioSrc: "",
            },
            {
              tuvan: "Дузалашкаңар дээш четтирдим.",
              ru: "Спасибо за помощь.",
              en: "Thank you for your help.",
              audioSrc: "",
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
              titleRu: "Утвердительная форма",
              titleEn: "Affirmative form",
              ru: "Мен кылып тур мен. Сен кылып тур сен. Ол кылып тур. Бис кылып тур бис. Олар кылып тур-лар.",
              en: "I am doing. You are doing. He is doing. We are doing. They are doing.",
            },
            {
              titleRu: "Отрицательная форма",
              titleEn: "Negative form",
              ru: "Мен кылып тур мен эвес. Сен кылып тур сен эвес. Ол кылып тур эвес.",
              en: "I am not doing. You are not doing. He is not doing.",
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
              ru: "Мен көрдүм. Сен көрдүң. Ол көрдү. Бис көрдүвүс. Силер көрдүңер. Олар көрдүлер.",
              en: "I saw. You saw. He saw. We saw. You saw. They saw.",
            },
            {
              titleRu: "Отрицательная форма",
              titleEn: "Negative form",
              ru: "Мен көрбедим. Сен көрбедиң. Ол көрбеди.",
              en: "I did not see. You did not see. He did not see.",
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
              ru: "Мен кээр мен. Сен кээр сен. Ол кээр. Бис кээр бис. Силер кээр силер. Олар кээр-лер.",
              en: "I will come. You will come. He will come. We will come. You will come. They will come.",
            },
            {
              titleRu: "Отрицательная форма",
              titleEn: "Negative form",
              ru: "Мен алыр мен эвес. Сен алыр сен эвес. Ол алыр эвес.",
              en: "I will not take. You will not take. He will not take.",
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
