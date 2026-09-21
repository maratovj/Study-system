export const MOCK_DATABASE = {
  lab: [
    {
      id: "lab-001",
      date: "2026-09-20",
      title: {
        ru: "Исследование Virtual DOM и прямого DOM",
        uz: "Virtual DOM va to'g'ridan-to'g'ri DOM tadqiqoti",
        en: "Virtual DOM and direct DOM research"
      },
      content: {
        ru: "Гипотеза: на небольших объёмах прямая работа с DOM может давать меньшие накладные расходы.",
        uz: "Gipoteza: kichik hajmlarda DOM bilan to'g'ridan-to'g'ri ishlash kamroq resurs talab qilishi mumkin.",
        en: "Hypothesis: direct DOM manipulation may have less overhead at a small scale."
      },
      tags: ["vanilla-js", "dom", "performance"],
      status: "draft"
    },
    {
      id: "lab-002",
      date: "2026-09-19",
      title: {
        ru: "Наблюдение за границей абстракции",
        uz: "Abstraksiya chegarasini kuzatish",
        en: "Observing the abstraction boundary"
      },
      content: {
        ru: "Черновая мысль: абстракция полезна, пока она уменьшает стоимость понимания системы.",
        uz: "Qoralama fikr: abstraksiya tizimni tushunish narxini kamaytirganda foydalidir.",
        en: "Draft thought: an abstraction is useful while it reduces the cost of understanding a system."
      },
      tags: ["architecture", "abstraction"],
      status: "testing"
    }
  ],
  mentalModels: [
    {
      id: "mm-001",
      title: {
        ru: "Бритва Оккама в разработке",
        uz: "Dasturlashda Okkam ustarasi",
        en: "Occam's Razor in software development"
      },
      summary: {
        ru: "Не следует множить сущности без необходимости.",
        uz: "Zaruriyatsiz mavjudotlarni ko'paytirmaslik kerak.",
        en: "Entities should not be multiplied without necessity."
      },
      details: {
        ru: "Если задача решается стандартным API, дополнительный слой абстракции должен оправдывать свою стоимость.",
        uz: "Agar vazifa standart API bilan hal qilinsa, qo'shimcha abstraksiya qatlami o'z narxini oqlashi kerak.",
        en: "If a task is solved by a standard API, an additional abstraction layer must justify its cost."
      },
      category: "architecture"
    },
    {
      id: "mm-002",
      title: {
        ru: "Обратимость решения",
        uz: "Qarorning qaytariluvchanligi",
        en: "Reversibility of a decision"
      },
      summary: {
        ru: "Чем дешевле отменить решение, тем быстрее можно его проверить.",
        uz: "Qarorni bekor qilish qanchalik arzon bo'lsa, uni shunchalik tez tekshirish mumkin.",
        en: "The cheaper a decision is to undo, the faster it can be tested."
      },
      details: {
        ru: "На раннем этапе стоит предпочитать решения, которые оставляют открытыми следующие шаги.",
        uz: "Dastlabki bosqichda keyingi qadamlarni ochiq qoldiradigan qarorlarni tanlash kerak.",
        en: "At an early stage, prefer decisions that keep the next steps open."
      },
      category: "thinking"
    },
    {
      id: "mm-003",
      title: {
        ru: "Прежде всего, поймите",
        uz: "Avvalo, tushunib oling",
        en: "First of all, understand"
      },
      summary: {
        ru: "Не пытайтесь заучивать понятия, идеи и термины механически. Это энергозатратный, но неэффективный способ обучения.",
        uz: "Tushuncha, g‘oya va atamalarni shunchaki yodlab olishga urinmang. Bu — ko‘p kuch talab qiladigan, ammo samarasiz o‘rganish usulidir.",
        en: "Don't try to rote-learn concepts, ideas, and terms. It is an energy-intensive yet ineffective way to learn."
      },
      details: {
        ru: "У вас уже достаточно информации. Вам нужно просто сопоставить новую тему с имеющимися у вас знаниями.",
        uz: "Sizda allaqachon yetarli ma'lumot bor. Shunchaki yangi mavzuni mavjud bilimlaringiz bilan taqqoslashingiz kerak.",
        en: "You already have sufficient information. You simply need to compare the new topic with your existing knowledge."
      },
      category: "thinking"
    }
  ],
  blogPosts: [
    {
      id: "post-001",
      date: "2026-09-21",
      title: {
        ru: "O важности дисциплины",
        uz: "Intizomning ahamiyati haqida",
        en: "About the importance of discipline"
      },
      content: {
        ru: "Эта публикация наглядно показывает, во сколько мне обошлось отсутствие дисциплины. \nПри изучении нового необходима система. Без нее трудно отличить важное от второстепенного или продуктивную работу от непродуктивной. Грамотно выстроенная система помогает экономить время и силы в процессе обучения, расставлять приоритеты (сосредотачиваясь на первоочередных задачах) и поддерживать порядок в полученных знаниях. Система неоценима, когда нужно пройти незнакомый путь с минимумом ошибок; она подобна карте обширной территории. Создание такой системы требует дисциплины. \nРезультаты не приходят в одночасье: чтобы овладеть какой-либо областью, необходима долгосрочная вовлеченность. При этом речь идет не просто о том, чтобы «убить время»; как я уже упоминал, требуется именно работа в рамках системы. \nЯ читал материалы и смотрел контент о дисциплине, но не осознавал в полной мере ее важности. Лишь потратив уйму времени и энергии на мелкие задачи, в погоне за сиюминутными результатами и дофаминовым подкреплением, а также пройдя через множество часов непродуктивной и изматывающей работы, я наконец понял ее истинное значение. \nМожет показаться, что понятия «система» и «дисциплина» здесь смешиваются, но это не так. Они дополняют друг друга. Я просто затрагиваю тему системы, когда представляется такая возможность. \nЭтот опыт помог мне осознать, насколько важно подходить к работе с прицелом на долгосрочную перспективу.",
        uz: "Ushbu blog intizomsizlik menga qanchalar qimmatga tushganini ko'rsatib beradi. \nInson biror narsani o'rganar ekan, tizimga muhtoj bo'ladi. Tizimsiz muhimni muhimsizdan, samarali ishni samarasiz ishdan ajratishi qiyin. Yaxshi tuzilgan tizim bizga o'rganishda ortiqcha harakat va vaqtni tejashga, prioritetni, ya'ni birinchi navbatda qilinadigan vazifani qilishga, o'rgangan narsalarimiz tartibli bo'lishga yordam beradi. Tizim bizga noma'lum yo'lni iloji boricha xatolarsiz, bosib o'tishga juda qo'l keladi. Bu go'yoki bir katta maydonni xaritasiga o'xshaydi. Shunday tizimmi shakllantirish uchun intizom kerak. \nBiz natijani qisqa muddatda olmaymiz. Biror yo'nalishni o'rganar ekanmiz, u yo'nalish bilan uzoq vaqt shug'ullanishimiz kerak. Shug'ullanish shunchaki vaqt o'tkazish emas, balki yuqorida aytganimdek tizim bilan ishlash lozim. \nIntizom haqida ma'lumotlar o'qiganman, kontentlar ko'rganman, ammo bunga ko'p ahamiyat bermaganman. Bir kichik vazifa ustida keragidan ortiq vaqt va kuch sarflaganimdan, qisqa muddatli natija va dofamin uchun noto'g'ri ishlaganimdan, qisqasi ko'p-ko'p samarasiz, og'riqli ishlardan so'ng bu narsa qanchalik ahamiyatga ega ekanligini angladim. \nMatnni o'qib tizim va intizom tushunchalari aralashib ketganga o'xshaydi, biroq bunday emas. Bu ikkalavi bir-birini to'ldira. Kezi kelganda tizim haqida ham eslatib o'tdim. \nBu tajriba orqali men shu narsani tushundim: Ishimni qilganda uzoqni ko'zlab ish qilish. ",
        en: "This blog post illustrates just how costly my lack of discipline has been. \nWhen learning something new, one needs a system. Without a system, it is difficult to distinguish the important from the trivial, or productive work from unproductive work. A well-structured system helps us save time and effort in the learning process, prioritize tasks—focusing on what needs to be done first—and keep what we learn organized. A system is invaluable for navigating an unfamiliar path with minimal errors; it is akin to having a map of a vast territory. Establishing such a system requires discipline. \nWe do not achieve results overnight; mastering a field requires long-term commitment. This engagement shouldn't just be about passing time; as I mentioned earlier, it requires working within a system. \nI had read about and watched content regarding discipline, yet I hadn't truly grasped its importance. It was only after spending excessive time and energy on minor tasks, chasing short-term results and dopamine hits, and enduring a great deal of unproductive, frustrating work that I finally understood its significance. \nReading this, it might seem like the concepts of 'system' and 'discipline' are being conflated, but that is not the case. The two complement each other. I also touched upon the system when the opportunity arose. \nThrough this experience, I realized the importance of taking a long-term perspective in my work."
      },
      readTime: {
        ru: "2 мин",
        uz: "2 daqiqa",
        en: "2 min"
      }
    }
  ],
  explanations: [
    {
      id: "exp-001",
      date: "2026-09-18",
      topic: {
        ru: "Замыкания в JavaScript",
        uz: "JavaScript'da closure",
        en: "Closures in JavaScript"
      },
      content: {
        ru: "Замыкание — это функция, которая сохраняет доступ к внешним переменным даже после завершения внешней функции.",
        uz: "Closure tashqi funksiya tugaganidan keyin ham tashqi o'zgaruvchilarga kirishni saqlab qoladigan funksiyadir.",
        en: "A closure is a function that retains access to outer variables after the outer function has finished."
      },
      masteryLevel: "explained"
    },
    {
      id: "exp-002",
      date: "2026-09-17",
      topic: {
        ru: "Событийный цикл",
        uz: "Event loop",
        en: "The event loop"
      },
      content: {
        ru: "Событийный цикл координирует выполнение синхронного кода, очередей задач и обработчиков событий.",
        uz: "Event loop sinxron kod, vazifalar navbati va hodisa ishlovchilarini muvofiqlashtiradi.",
        en: "The event loop coordinates synchronous code, task queues, and event handlers."
      },
      masteryLevel: "explained"
    }
  ]
};
