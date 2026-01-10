let subject = "";
let level = "";
let index = 0;
let score = 0;

const data = {
  html: {
    easy: [
      {
        q: "HTML nima?",
        o: ["Dasturlash tili", "Belgilash tili", "Brauzer", "Server"],
        a: 1
      },
      {
        q: "HTML fayl kengaytmasi qaysi?",
        o: [".css", ".js", ".html", ".exe"],
        a: 2
      },
      {
        q: "<p> tegi nima qiladi?",
        o: ["Sarlavha", "Paragraf", "Rasm", "Link"],
        a: 1
      }
    ],
    medium: [
      {
        q: "Block element qaysi?",
        o: ["span", "a", "div", "img"],
        a: 2
      },
      {
        q: "Semantic HTML nima?",
        o: [
          "Faqat dizayn",
          "Ma'noli teglar",
          "JS kodi",
          "CSS uslubi"
        ],
        a: 1
      },
      {
        q: "<form> tegi nima uchun?",
        o: [
          "Rasm",
          "Ma'lumot yuborish",
          "Video",
          "Jadval"
        ],
        a: 1
      }
    ],
    hard: [
      {
        q: "ARIA nimaga xizmat qiladi?",
        o: [
          "SEO",
          "Accessibility",
          "Dizayn",
          "Animatsiya"
        ],
        a: 1
      },
      {
        q: "meta viewport vazifasi?",
        o: [
          "SEO",
          "Responsive dizayn",
          "Font",
          "Script"
        ],
        a: 1
      },
      {
        q: "defer atributi nima qiladi?",
        o: [
          "CSS yuklaydi",
          "JS kech yuklaydi",
          "HTML o‘chiradi",
          "Rasm yuklaydi"
        ],
        a: 1
      }
    ]
  },

  css: {
    easy: [
      {
        q: "CSS nima?",
        o: [
          "Dasturlash tili",
          "Dizayn tili",
          "Ma'lumotlar bazasi",
          "Server"
        ],
        a: 1
      },
      {
        q: "CSS qaysi rangni o‘zgartiradi?",
        o: ["color", "font", "border", "margin"],
        a: 0
      },
      {
        q: "CSS fayl kengaytmasi?",
        o: [".html", ".js", ".css", ".php"],
        a: 2
      }
    ],
    medium: [
      {
        q: "class bilan id farqi?",
        o: [
          "Farqi yo‘q",
          "id bitta, class ko‘p",
          "class tezroq",
          "id rang beradi"
        ],
        a: 1
      },
      {
        q: "Flexbox nima?",
        o: [
          "Animatsiya",
          "Layout tizimi",
          "Rang",
          "Font"
        ],
        a: 1
      },
      {
        q: "position: absolute nima qiladi?",
        o: [
          "Joyidan chiqmaydi",
          "Ekranga bog‘lanadi",
          "Ota elementga bog‘lanadi",
          "O‘chadi"
        ],
        a: 2
      }
    ],
    hard: [
      {
        q: "CSS Grid qaysi turdagi layout?",
        o: [
          "1 o‘lchamli",
          "2 o‘lchamli",
          "3D",
          "Animatsiya"
        ],
        a: 1
      },
      {
        q: "z-index qachon ishlaydi?",
        o: [
          "Har doim",
          "position bo‘lsa",
          "flex bo‘lsa",
          "margin bo‘lsa"
        ],
        a: 1
      },
      {
        q: "Media query nima uchun?",
        o: [
          "Animatsiya",
          "Responsive dizayn",
          "Rang",
          "Font"
        ],
        a: 1
      }
    ]
  },

  js: {
    easy: [
      {
        q: "JavaScript nima?",
        o: [
          "Belgilash tili",
          "Dasturlash tili",
          "CSS",
          "Brauzer"
        ],
        a: 1
      },
      {
        q: "alert() nima qiladi?",
        o: [
          "Konsolga yozadi",
          "Oyna chiqaradi",
          "Rang beradi",
          "HTML o‘zgartiradi"
        ],
        a: 1
      },
      {
        q: "let nima?",
        o: [
          "Funksiya",
          "O‘zgaruvchi",
          "Loop",
          "Array"
        ],
        a: 1
      }
    ],
    medium: [
      {
        q: "Array nima?",
        o: [
          "Bitta qiymat",
          "Funksiya",
          "Ro‘yxat",
          "Shart"
        ],
        a: 2
      },
      {
        q: "if/else nima?",
        o: [
          "Loop",
          "Shart operatori",
          "Funksiya",
          "Massiv"
        ],
        a: 1
      },
      {
        q: "function nima?",
        o: [
          "O‘zgaruvchi",
          "Kod blok",
          "Rang",
          "HTML tegi"
        ],
        a: 1
      }
    ],
    hard: [
      {
        q: "Closure nima?",
        o: [
          "Xato",
          "Funksiya ichidagi scope",
          "Loop",
          "Array"
        ],
        a: 1
      },
      {
        q: "async/await nima uchun?",
        o: [
          "Animatsiya",
          "Asinxron kod",
          "CSS",
          "HTML"
        ],
        a: 1
      },
      {
        q: "DOM nima?",
        o: [
          "Server",
          "Brauzer modeli",
          "CSS fayl",
          "Ma'lumotlar bazasi"
        ],
        a: 1
      }
    ]
  }
};

function selectSubject(s) {
  subject = s;
  document.getElementById("levels").classList.remove("hidden");
  document.getElementById("quiz").classList.add("hidden");
}

function selectLevel(l) {
  level = l;
  index = 0;
  score = 0;
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const q = data[subject][level][index];
  document.getElementById("question").innerText = q.q;
  document.getElementById("progress").innerText =
    `Savol ${index + 1} / ${data[subject][level].length}`;
  document.getElementById("score").innerText = `Ball: ${score}`;

  const options = document.getElementById("options");
  options.innerHTML = "";

  q.o.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    options.appendChild(btn);
  });
}

function checkAnswer(i) {
  if (i === data[subject][level][index].a) score++;
}

function nextQuestion() {
  index++;
  if (index < data[subject][level].length) {
    loadQuestion();
  } else {
    alert(`🔥 Test tugadi!\nNatija: ${score} / ${data[subject][level].length}`);
  }
}
