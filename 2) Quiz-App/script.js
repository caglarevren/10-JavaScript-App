const quizData = [
  {
    question: 'Çağlar Evren kac yaşındadır?',
    a: '9',
    b: '16',
    c: '27',
    d: '33',
    correct: 'c',
  },
  {
    question: 'Amerika Birleşik Devletlerinin, devlet başkanı kimdir?',
    a: 'Çağlar Evren',
    b: 'Kenan İmirzalıoğlu',
    c: 'Hakan Muhafız',
    d: 'Joe Biden',
    correct: 'd',
  },
  {
    question: "2020'de en çok tercih edilen programlama dili hangisidir?",
    a: 'Java',
    b: 'Python',
    c: 'C',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: "HTML'in açılımı nedir?",
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Atiye, seninle bir yola çıkmamız lazım',
    correct: 'a',
  },
  {
    question: 'JavaScript ne zaman ortaya çıkmıştır?',
    a: '1995',
    b: '2001',
    c: '2004',
    d: '2007',
    correct: 'a',
  },
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const timeEl = document.getElementById('time');

let currentQuiz = 0;
let score = 0;
let time = 60;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  // Check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>Tebrikler ${score}/${quizData.length} soruyu doğru cevapladınız.</h2>

        <button onclick="location.reload()">Tekrar Başla</button>
        `;
    }
  }
});

// Countdown Timer
function countdown() {
  time--;

  if (time === 0) {
    alert('Maalesef süreniz doldu');
    time = 60;
  }
  timeEl.innerText = time;
}

setInterval(countdown, 1000);
