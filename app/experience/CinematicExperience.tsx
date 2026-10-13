"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./cinematic-experience.module.css";

type Choice = { id: string; title: string; detail: string; result: string };
type Scene = {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  visual: string;
  question?: string;
  choices?: Choice[];
  takeaway: string;
  sourceNote?: string;
};

const chapters = [
  {
    number: "01",
    title: "Машина, которая продолжает мысль",
    label: "ИНТЕЛЛЕКТ",
    duration: "12–15 мин",
    scenes: [
      {
        eyebrow: "ГЛАВА I · ПЕРВЫЙ СДВИГ",
        title: "Вы не видите интеллект. Вы видите его последствия.",
        subtitle: "Представьте: перед вами незнакомая задача, и времени всего одна минута.",
        body: "Вы ищете закономерность, проверяете догадки, меняете направление. Современная модель может пройти похожий путь иначе: не переживая озарение, а вычисляя продолжение на основе выученных структур. Результат иногда выглядит разумным. Но впечатляющий ответ — ещё не доказательство понимания.",
        visual: "signal",
        question: "Модель решила задачу лучше вас. Что это доказывает?",
        choices: [
          { id: "mind", title: "У неё человеческий разум", detail: "Результат похож на человеческий.", result: "Похожее поведение не доказывает одинаковый внутренний механизм. Сначала нужно уточнить задачу и критерий успеха." },
          { id: "skill", title: "Она сильна в этой задаче", detail: "Проверим конкретную способность.", result: "Это наиболее точный вывод: есть свидетельство о выполнении данной задачи, но не универсальный интеллект." },
          { id: "trick", title: "Это просто случайность", detail: "Нужно проверить повторяемость.", result: "Повторяемость и контрольные примеры помогут отличить устойчивую способность от удачного совпадения." }
        ],
        takeaway: "Оценивайте наблюдаемую способность, а не приписывайте системе человеческий внутренний опыт.",
        sourceNote: "Различайте поведение модели, измеряемую способность и философские утверждения о сознании."
      },
      {
        eyebrow: "ГЛАВА I · ЧТО ПРОИСХОДИТ ВНУТРИ",
        title: "Не волшебный мозг. Система, обученная на примерах.",
        subtitle: "Представьте огромную музыкальную библиотеку, где важны не только ноты, но и отношения между ними.",
        body: "Большая языковая модель учится статистическим закономерностям в последовательностях. Во время ответа она строит продолжение с учётом контекста. Обучение позволяет ей обобщать многие шаблоны — но не гарантирует правдивость каждого утверждения, актуальность знаний или устойчивость в любой ситуации.",
        visual: "constellation",
        question: "Как лучше проверить уверенный ответ ИИ?",
        choices: [
          { id: "polish", title: "Попросить звучать убедительнее", detail: "Сделать формулировку ясной.", result: "Ясность полезна, но стиль не подтверждает факты. Убедительная ошибка всё ещё ошибка." },
          { id: "sources", title: "Проверить первоисточники", detail: "Найти независимые подтверждения.", result: "Верно: сопоставьте первоисточник, дату, методику и независимые свидетельства." },
          { id: "repeat", title: "Задать тот же вопрос снова", detail: "Посмотреть, совпадёт ли ответ.", result: "Повтор может выявить нестабильность, но два одинаковых ответа не гарантируют истинность." }
        ],
        takeaway: "ИИ — мощный инструмент распознавания и генерации закономерностей, а не автоматический сертификат истины.",
        sourceNote: "См. Stanford HAI AI Index и техническую документацию конкретной модели: результаты зависят от задачи и методики."
      },
      {
        eyebrow: "ГЛАВА I · КУЛЬМИНАЦИЯ",
        title: "Вопрос больше не в том, умна ли машина.",
        subtitle: "Вопрос в том, какую работу вы доверяете ей — и как проверяете результат.",
        body: "ИИ уже помогает писать черновики, исследовать код, объяснять сложные темы, искать закономерности и создавать прототипы. В каждом случае ценность появляется не от одного факта использования модели, а от правильно выбранной задачи, качественного контекста и человеческой проверки.",
        visual: "horizon",
        question: "Выберите следующий шаг.",
        choices: [
          { id: "delegate", title: "Передать модели весь процесс", detail: "Больше скорости, меньше контроля.", result: "Автоматизация полезна для ограниченных и проверяемых задач. Чем выше цена ошибки, тем важнее контроль и возможность отката." },
          { id: "partner", title: "Разделить работу", detail: "ИИ предлагает, человек проверяет.", result: "Для многих задач это надёжная отправная точка: делегируйте черновик, варианты и поиск, но оставьте человеку критерии и ответственность." },
          { id: "avoid", title: "Пока не использовать", detail: "Сначала понять ограничения.", result: "Осторожность разумна. Начните с низкорискового эксперимента и сравните результат с привычным способом." }
        ],
        takeaway: "Новая сила — не в слепом доверии и не в отказе, а в осознанном распределении работы.",
        sourceNote: "Переход ко второй главе: если интеллект становится инструментом, кто контролирует доступ к нему?"
      }
    ]
  },
  {
    number: "02",
    title: "Кто держит ключи от знания",
    label: "ВЛИЯНИЕ",
    duration: "12–15 мин",
    scenes: [
      {
        eyebrow: "ГЛАВА II · НЕВИДИМЫЕ ВОРОТА",
        title: "Информация может быть открытой. Возможность действовать — нет.",
        subtitle: "Представьте два человека с одинаковым вопросом, но разными инструментами.",
        body: "Один получает качественный поиск, вычислительные ресурсы, эксперта и время. Другой — обрывки, платные барьеры и алгоритмическую ленту. Разница не только в объёме информации: важны возможность проверить её, понять контекст и превратить в действие.",
        visual: "gate",
        question: "Что сильнее сокращает разрыв в доступе к знаниям?",
        choices: [
          { id: "access", title: "Открыть больше материалов", detail: "Снять барьеры доступа.", result: "Открытый доступ помогает, но без понятных объяснений, навыков и вычислительных возможностей он не решает всю проблему." },
          { id: "skills", title: "Учить проверять и применять", detail: "Добавить инструменты и грамотность.", result: "Навыки проверки усиливают доступ: человек может отличать свидетельства от манипуляции и использовать знания в контексте." },
          { id: "both", title: "Соединить доступ и навыки", detail: "Инфраструктура плюс образование.", result: "Наиболее полная стратегия сочетает открытый доступ, цифровую грамотность, инфраструктуру и возможность оспаривать решения." }
        ],
        takeaway: "Равный доступ к информации ещё не означает равные возможности.",
        sourceNote: "Это аналитическая рамка, а не количественная оценка неравенства."
      },
      {
        eyebrow: "ГЛАВА II · АЛГОРИТМИЧЕСКАЯ ВЛАСТЬ",
        title: "Кто выбирает то, что вы увидите?",
        subtitle: "Лента кажется окном в мир. Но каждое окно имеет рамку.",
        body: "Рекомендательные системы ранжируют материалы по целям и сигналам, выбранным их разработчиками. Это может помогать находить полезное — и одновременно усиливать узкие интересы, непрозрачные стимулы или распространение сенсационного контента. Эффект зависит от платформы, дизайна и поведения аудитории; универсального сценария нет.",
        visual: "feed",
        question: "Как снизить риск информационной ловушки?",
        choices: [
          { id: "one", title: "Оставаться в одной ленте", detail: "Удобство важнее разнообразия.", result: "Удобство экономит время, но один канал ограничивает видимую картину. Не делайте его единственным источником." },
          { id: "diverse", title: "Сравнивать разные источники", detail: "Искать расхождения и первоисточники.", result: "Хорошая практика: сравнивать независимые источники, читать первичный документ и проверять дату публикации." },
          { id: "offline", title: "Полностью отключиться", detail: "Избежать алгоритмического влияния.", result: "Перерывы могут быть полезны, но для понимания сложных событий важнее выстроить разнообразную и проверяемую информационную диету." }
        ],
        takeaway: "Медиа-грамотность — это не цинизм ко всему, а дисциплина проверки.",
        sourceNote: "Не приписывайте алгоритму намерение без доказательств; исследуйте цель оптимизации и наблюдаемые эффекты."
      },
      {
        eyebrow: "ГЛАВА II · КУЛЬМИНАЦИЯ",
        title: "Власть — это ещё и право задавать правила.",
        subtitle: "Данные, вычисления, модели и интерфейсы образуют инфраструктуру влияния.",
        body: "Передовые системы требуют данных, специалистов, вычислительных мощностей и каналов распространения. Эти ресурсы распределены неравномерно. Но последствия не предопределены: открытые стандарты, исследования, конкуренция, регулирование и общественный контроль могут менять баланс.",
        visual: "network",
        question: "Какое правило вы бы поставили на первое место?",
        choices: [
          { id: "audit", title: "Независимый аудит", detail: "Проверяемые процедуры и отчётность.", result: "Аудит повышает прозрачность, если методика, охват и ограничения опубликованы, а проверяющие независимы." },
          { id: "open", title: "Открытые инструменты", detail: "Больше исследователей могут проверять.", result: "Открытость помогает воспроизводимости, но не отменяет риски злоупотреблений и не гарантирует доступ к дорогой инфраструктуре." },
          { id: "choice", title: "Право выбора и обжалования", detail: "Человек может оспорить решение.", result: "Обжалование особенно важно там, где алгоритм влияет на права, доступ к услугам или существенные жизненные решения." }
        ],
        takeaway: "Технологическое будущее зависит не только от возможностей моделей, но и от правил вокруг них.",
        sourceNote: "Переход к третьей главе: что может сделать отдельный человек уже сейчас?"
      }
    ]
  },
  {
    number: "03",
    title: "Человек, который выбирает",
    label: "ДЕЙСТВИЕ",
    duration: "12–15 мин",
    scenes: [
      {
        eyebrow: "ГЛАВА III · НОВЫЕ ПРАВИЛА",
        title: "Ваше преимущество — не знать всё.",
        subtitle: "Ваше преимущество — быстрее учиться, лучше проверять и яснее выбирать.",
        body: "Когда инструмент берёт на себя часть черновой работы, ценность смещается к постановке задачи, оценке результата, пониманию контекста, общению и ответственности. Это не означает, что всем профессиям грозит одинаковое изменение: влияние зависит от конкретных задач, отрасли и способов внедрения.",
        visual: "human",
        question: "С чего начать безопасный эксперимент?",
        choices: [
          { id: "learn", title: "Объяснить сложную тему", detail: "Попросить аналогию, затем проверить.", result: "Хороший старт: попросите объяснение на двух уровнях, задайте уточняющие вопросы и сверьте ключевые тезисы с надёжными источниками." },
          { id: "work", title: "Улучшить рабочий процесс", detail: "Автоматизировать обратимый черновик.", result: "Выберите задачу с низкой ценой ошибки: план, структура документа или тестовый код. Сравните качество и время до/после." },
          { id: "create", title: "Создать что-то своё", detail: "Использовать ИИ для вариантов и прототипа.", result: "Пусть ИИ расширит поле вариантов, но критерии, выбор и финальная ответственность останутся у вас." }
        ],
        takeaway: "Начните с маленькой задачи, которую можете проверить самостоятельно.",
        sourceNote: "Не загружайте конфиденциальные данные в сервис без понимания его политики и разрешений."
      },
      {
        eyebrow: "ГЛАВА III · ПРАКТИКА",
        title: "Протокол: спросить. Проверить. Решить.",
        subtitle: "Четыре шага превращают впечатляющий ответ в полезную работу.",
        body: "Первое: сформулируйте цель и ограничения. Второе: дайте модели релевантный контекст без секретных данных. Третье: запросите варианты и признаки возможной ошибки. Четвёртое: проверьте ключевые утверждения, протестируйте результат и только потом используйте его. Для решений с высоким риском подключайте квалифицированного специалиста.",
        visual: "protocol",
        question: "Какой шаг нельзя пропускать?",
        choices: [
          { id: "prompt", title: "Идеальная формулировка запроса", detail: "Всё решает промпт.", result: "Хорошая формулировка помогает, но не заменяет проверку результата и понимание ограничений модели." },
          { id: "verify", title: "Проверка результата", detail: "Сопоставить с критерием и источниками.", result: "Именно проверка связывает генерацию с реальной задачей и позволяет обнаружить ошибки до применения." },
          { id: "speed", title: "Максимальная скорость", detail: "Сэкономить каждую секунду.", result: "Скорость ценна только при приемлемом качестве. Измеряйте время вместе с точностью, исправлениями и последствиями." }
        ],
        takeaway: "Используйте ИИ как усилитель мышления, а не замену собственному суждению.",
        sourceNote: "Сохраните протокол как личный чек-лист и адаптируйте под риск задачи."
      },
      {
        eyebrow: "ФИНАЛ · ВЫБОР ЗА ВАМИ",
        title: "Будущее не приходит готовым. Его собирают решения.",
        subtitle: "Вы не обязаны знать всё об ИИ. Но можете научиться задавать лучшие вопросы.",
        body: "Мы начали с задачи, которую могла решить машина. Затем увидели инфраструктуру, которая распределяет доступ к возможностям. Теперь решение возвращается к человеку: чему учиться, что проверять, чем делиться, что автоматизировать и за что отвечать. Важна не вера в технологию и не страх перед ней. Важна способность осознанно выбирать.",
        visual: "dawn",
        question: "Ваш следующий шаг на ближайшие 24 часа?",
        choices: [
          { id: "experiment", title: "Провести один проверяемый эксперимент", detail: "Сравнить ИИ с привычным способом.", result: "План на 24 часа: выберите одну низкорисковую задачу, зафиксируйте исходный результат, попробуйте ИИ и сравните качество по заранее выбранным критериям." },
          { id: "research", title: "Изучить первоисточник", detail: "Проверить одно важное утверждение.", result: "План на 24 часа: выберите утверждение из новости об ИИ, найдите первичный источник, проверьте дату, методику и ограничения." },
          { id: "teach", title: "Передать знание дальше", detail: "Объяснить идею другому человеку.", result: "План на 24 часа: объясните одну идею простыми словами и попросите собеседника назвать, что осталось непонятным." }
        ],
        takeaway: "Не отдавайте будущее на автопилот. Учитесь понимать инструменты — и решать, для чего они нужны.",
        sourceNote: "OSA · THINK BEYOND THE MODEL"
      }
    ]
  }
] satisfies { number: string; title: string; label: string; duration: string; scenes: Scene[] }[];

const STORAGE_KEY = "osa-cinematic-experience-v1";

export default function CinematicExperience() {
  const [chapter, setChapter] = useState(0);
  const [scene, setScene] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentChapter = chapters[chapter];
  const currentScene = currentChapter.scenes[scene];
  const totalScenes = chapters.reduce((sum, item) => sum + item.scenes.length, 0);
  const sceneIndex = chapters.slice(0, chapter).reduce((sum, item) => sum + item.scenes.length, 0) + scene;
  const progress = Math.round(((sceneIndex + 1) / totalScenes) * 100);
  const answerKey = `${chapter}-${scene}`;
  const selectedChoice = currentScene.choices?.find((choice) => choice.id === answers[answerKey]);
  const allComplete = sceneIndex === totalScenes - 1;

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved) as { chapter?: number; scene?: number; answers?: Record<string, string> };
        if (typeof data.chapter === "number" && data.chapter >= 0 && data.chapter < chapters.length) {
          setChapter(data.chapter);
          const maxScene = chapters[data.chapter].scenes.length - 1;
          setScene(typeof data.scene === "number" ? Math.min(Math.max(0, data.scene), maxScene) : 0);
        }
        if (data.answers && typeof data.answers === "object") setAnswers(data.answers);
      }
    } catch {
      // Progress is an enhancement; private browsing or blocked storage must not break the experience.
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ chapter, scene, answers }));
    } catch {
      // Continue without persistence if storage is unavailable.
    }
  }, [chapter, scene, answers]);

  const goTo = useCallback((nextChapter: number, nextScene: number) => {
    const safeChapter = Math.min(Math.max(nextChapter, 0), chapters.length - 1);
    const safeScene = Math.min(Math.max(nextScene, 0), chapters[safeChapter].scenes.length - 1);
    setChapter(safeChapter);
    setScene(safeScene);
    setShowResult(false);
    setShowMap(false);
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(target.tagName)) return;
      if (event.key === "ArrowRight") goTo(chapter, scene + 1 < currentChapter.scenes.length ? scene + 1 : chapter + 1);
      if (event.key === "ArrowLeft") goTo(scene > 0 ? chapter : chapter - 1, scene > 0 ? scene - 1 : 99);
      if (event.key.toLowerCase() === "m") setShowMap((value) => !value);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [chapter, scene, currentChapter.scenes.length, goTo]);

  const choose = (id: string) => {
    setAnswers((previous) => ({ ...previous, [answerKey]: id }));
    setShowResult(true);
  };

  const next = () => {
    if (scene + 1 < currentChapter.scenes.length) goTo(chapter, scene + 1);
    else if (chapter + 1 < chapters.length) goTo(chapter + 1, 0);
    else setIsPlaying(false);
  };

  const sceneNumber = useMemo(() => String(sceneIndex + 1).padStart(2, "0"), [sceneIndex]);

  return (
    <main className={styles.page}>
      <div className={styles.noise} aria-hidden="true" />
      <header className={styles.topbar}>
        <a className={styles.brand} href="/" aria-label="OSA — на главную"><span className={styles.brandMark}>O</span><span>OSA<span className={styles.brandDot}>.</span><small>BEYOND THE MODEL</small></span></a>
        <div className={styles.topMeta}><span className={styles.liveDot} /> INTERACTIVE FILM <span className={styles.metaDivider}>/</span> 3 CHAPTERS</div>
        <button className={styles.mapButton} onClick={() => setShowMap((value) => !value)} aria-expanded={showMap}>Содержание <span aria-hidden="true">↗</span></button>
      </header>

      <section className={styles.filmFrame} aria-labelledby="scene-title">
        <div className={styles.filmTopline}><span>{currentScene.eyebrow}</span><span>{sceneNumber} / {String(totalScenes).padStart(2, "0")}</span></div>
        <div className={`${styles.sceneVisual} ${styles[currentScene.visual] ?? ""}`} aria-hidden="true">
          <div className={styles.visualGrid} />
          <div className={styles.orbit orbitOne} /><div className={styles.orbit orbitTwo} /><div className={styles.coreLight} />
          <div className={styles.visualWord}>{chapter === 0 ? "INTELLIGENCE" : chapter === 1 ? "INFLUENCE" : "AGENCY"}</div>
          <div className={styles.visualCaption}><span>OSA / FIELD NOTES</span><span>THINK BEYOND THE MODEL</span></div>
        </div>
        <div className={styles.sceneCopy}>
          <p className={styles.kicker}>{currentChapter.number} — {currentChapter.label} <span>·</span> {currentChapter.duration}</p>
          <h1 id="scene-title">{currentScene.title}</h1>
          <p className={styles.subtitle}>{currentScene.subtitle}</p>
          <p className={styles.body}>{currentScene.body}</p>
          <div className={styles.takeaway}><span className={styles.takeawayLine} /><div><span className={styles.takeawayLabel}>КЛЮЧЕВАЯ МЫСЛЬ</span><p>{currentScene.takeaway}</p></div></div>
        </div>
      </section>

      <section className={styles.interaction} aria-labelledby="question-title">
        <div className={styles.interactionHead}><span className={styles.sectionIndex}>PAUSE / THINK</span><span className={styles.interactionHint}>ВАШ ВЫБОР МЕНЯЕТ РАЗБОР</span></div>
        <h2 id="question-title">{currentScene.question}</h2>
        <div className={styles.choiceGrid}>
          {currentScene.choices?.map((choice, index) => (
            <button key={choice.id} className={`${styles.choice} ${answers[answerKey] === choice.id ? styles.choiceSelected : ""}`} onClick={() => choose(choice.id)} aria-pressed={answers[answerKey] === choice.id}>
              <span className={styles.choiceNumber}>0{index + 1}</span><span className={styles.choiceTitle}>{choice.title}</span><span className={styles.choiceDetail}>{choice.detail}</span><span className={styles.choiceArrow}>↗</span>
            </button>
          ))}
        </div>
        {showResult && selectedChoice && <div className={styles.resultPanel} role="status" aria-live="polite"><span className={styles.resultEyebrow}>РАЗБОР ВАШЕГО РЕШЕНИЯ</span><p>{selectedChoice.result}</p></div>}
      </section>

      <footer className={styles.controls}>
        <div className={styles.progressArea}><div className={styles.progressLabels}><span>ВАШЕ ПУТЕШЕСТВИЕ</span><span>{progress}%</span></div><div className={styles.progressTrack} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}><span style={{ width: `${progress}%` }} /></div><span className={styles.progressSub}>Прогресс сохраняется на этом устройстве</span></div>
        <div className={styles.controlButtons}><button className={styles.secondaryButton} onClick={() => goTo(scene > 0 ? chapter : chapter - 1, scene > 0 ? scene - 1 : 99)} disabled={chapter === 0 && scene === 0}>← Назад</button><button className={styles.primaryButton} onClick={next}>{allComplete ? "Завершить путешествие" : "Продолжить"} <span>→</span></button></div>
      </footer>

      {showMap && <aside className={styles.chapterDrawer} aria-label="Содержание фильма"><div className={styles.drawerHead}><div><span className={styles.sectionIndex}>STORY MAP</span><h2>Три главы. Один вопрос.</h2></div><button onClick={() => setShowMap(false)} aria-label="Закрыть содержание">×</button></div>{chapters.map((item, c) => <div className={styles.chapterGroup} key={item.number}><div className={styles.chapterTitle}><span>{item.number}</span><div><strong>{item.title}</strong><small>{item.label} · {item.duration}</small></div></div>{item.scenes.map((part, s) => <button key={part.title} className={`${styles.sceneLink} ${chapter === c && scene === s ? styles.sceneLinkActive : ""}`} onClick={() => goTo(c, s)}><span>{String(s + 1).padStart(2, "0")}</span>{part.title}<span aria-hidden="true">↗</span></button>)}</div>)}</aside>}

      <div className={styles.bottomNote}><span>OSA ORIGINAL EXPERIENCE</span><span>Интерактивная образовательная история · Без автозапуска звука</span><span>← → навигация · M содержание</span></div>
    </main>
  );
}
