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
        ru: "Прежде всего понимай",
        uz: "Birinchi navbatda tushun",
        en: "First of all, understand"
      },
      summary: {
        ru: "Не пытайся зазубривать концепции, идеи, термины. Это энергозатратный, но малоэффективный способ учиться чему-то.",
        uz: "Tushunchalarni, g'oyalarni, terminlarni yodlashga harakat qilma. Bu biror nimani o'rganishda ko'p quvvat oladigan, lekin samarasi kam bo'lgan uslub",
        en: "Don't try to rote-learn concepts, ideas, and terms. It is an energy-intensive yet ineffective way to learn."
      },
      details: {
        ru: "Ты уже достаточно знаешь информации. Чтобы понять новую тему, достаточно сверять его со старой информацией.",
        uz: "Sen o'zi yetarlicha ma'lumotlarga egasan. Yangi mavzuni shunchaki eski bilimlaring bilan solishtirish kerak.",
        en: "You already have sufficient information. You simply need to compare the new topic with your existing knowledge."
      },
      category: "thinking"
    }
  ],
  blogPosts: [
    {
      id: "post-001",
      date: "2026-09-15",
      title: {
        ru: "Отказ от фреймворков: шесть месяцев практики",
        uz: "Freymvorklardan voz kechish: olti oylik tajriba",
        en: "Leaving frameworks behind: six months of practice"
      },
      content: {
        ru: "Размышления о том, как глубокое понимание Native JS меняет подход к проектированию.",
        uz: "Native JS ni chuqur tushunish loyihalash yondashuvini qanday o'zgartirishi haqida mulohazalar.",
        en: "Reflections on how a deeper understanding of Native JS changes the design approach."
      },
      readTime: {
        ru: "5 мин",
        uz: "5 daqiqa",
        en: "5 min"
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
