console.log("QuizMovie - script cargado");

const homeScreen = document.getElementById('homeScreen');
const gameScreen = document.getElementById('gameScreen');
const resultScreen = document.getElementById('resultScreen');

const currentQSpan = document.getElementById('currentQ');
const progressDots = document.getElementById('progressDots');
const timerBar = document.getElementById('timerBar');
const timerNumber = document.getElementById('timerNumber');
const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const feedbackArea = document.getElementById('feedbackArea');
const optionBtns = optionsGrid.querySelectorAll('.option-btn');

const resultIcon = document.getElementById('resultIcon');
const resultPlayerName = document.getElementById('resultPlayerName');
const resultRank = document.getElementById('resultRank');
const resultScoreBar = document.getElementById('resultScoreBar');
const resultAciertos = document.getElementById('resultAciertos');
const resultMessage = document.getElementById('resultMessage');
const restartBtn = document.getElementById('restartBtn');

const allQuestions = [
    { question: "¿En qué año se estrenó Titanic?", options: ["1995", "1997", "1999", "2001"], correct: 1, trivia: "Titanic fue dirigida por James Cameron y ganó 11 premios Oscar." },
    { question: "¿Quién dirigió 'El Padrino'?", options: ["Martin Scorsese", "Stanley Kubrick", "Francis Ford Coppola", "Steven Spielberg"], correct: 2, trivia: "Coppola tenía solo 31 años cuando aceptó el proyecto." },
    { question: "¿Qué actor interpreta a Iron Man?", options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Chris Hemsworth"], correct: 1, trivia: "Downey Jr. fue recomendado personalmente por Jon Favreau." },
    { question: "¿Cómo se llama el planeta de los Na'vi en Avatar?", options: ["Endor", "Tatooine", "Pandora", "Kepler"], correct: 2, trivia: "Avatar (2009) fue la película más taquillera durante una década." },
    { question: "¿Quién creó Star Wars?", options: ["Steven Spielberg", "George Lucas", "J.J. Abrams", "Ridley Scott"], correct: 1, trivia: "Lucas fundó Lucasfilm en 1971." },
    { question: "¿Qué película ganó el Oscar 2020 a Mejor Película?", options: ["1917", "Joker", "Parásitos", "Érase una vez en Hollywood"], correct: 2, trivia: "Parásitos fue la primera película de habla no inglesa en ganar." },
    { question: "¿Quién fue el Joker en 'El Caballero Oscuro'?", options: ["Joaquin Phoenix", "Jack Nicholson", "Jared Leto", "Heath Ledger"], correct: 3, trivia: "Ledger ganó el Oscar póstumo por este papel." },
    { question: "¿En qué película aparece Jack Sparrow?", options: ["El Señor de los Anillos", "Piratas del Caribe", "Gladiator", "Troya"], correct: 1, trivia: "Johnny Depp se inspiró en Keith Richards." },
    { question: "¿Quién dirigió 'Jurassic Park'?", options: ["James Cameron", "Ridley Scott", "Steven Spielberg", "Peter Jackson"], correct: 2, trivia: "Spielberg compró los derechos antes de que se publicara el libro." },
    { question: "¿Qué actor dio vida a Neo en 'Matrix'?", options: ["Brad Pitt", "Keanu Reeves", "Tom Cruise", "Will Smith"], correct: 1, trivia: "Will Smith rechazó el papel para hacer Wild Wild West." },
    { question: "¿Quién dirigió 'El Señor de los Anillos'?", options: ["Ridley Scott", "Guillermo del Toro", "Peter Jackson", "Sam Raimi"], correct: 2, trivia: "Jackson rodó las tres películas simultáneamente." },
    { question: "¿Qué estudio creó 'Toy Story'?", options: ["DreamWorks", "Pixar", "Illumination", "Blue Sky"], correct: 1, trivia: "Toy Story fue el primer largometraje animado por ordenador." },
    { question: "¿Quién protagonizó 'Forrest Gump'?", options: ["Tom Hanks", "Robin Williams", "John Travolta", "Denzel Washington"], correct: 0, trivia: "Hanks ganó su segundo Oscar consecutivo." },
    { question: "¿Qué coche aparece en 'Regreso al Futuro'?", options: ["Mustang GT", "DeLorean DMC-12", "Chevrolet Camaro", "Pontiac Firebird"], correct: 1, trivia: "El DeLorean se convirtió en un icono gracias a la película." },
    { question: "¿Quién compuso la banda sonora de 'Interestelar'?", options: ["John Williams", "Hans Zimmer", "Ennio Morricone", "Danny Elfman"], correct: 1, trivia: "Zimmer utilizó un órgano de iglesia real." },
    { question: "¿En qué ciudad se desarrolla 'La La Land'?", options: ["Nueva York", "Chicago", "Los Ángeles", "San Francisco"], correct: 2, trivia: "La La Land recibió 14 nominaciones al Oscar." },
    { question: "¿Cómo se llama la hermana de Elsa en 'Frozen'?", options: ["Ariel", "Anna", "Rapunzel", "Mulan"], correct: 1, trivia: "Frozen fue la película animada más taquillera de su momento." },
    { question: "¿Quién fue Spider-Man en la trilogía de Sam Raimi?", options: ["Andrew Garfield", "Tom Holland", "Tobey Maguire", "Shia LaBeouf"], correct: 2, trivia: "Maguire fue elegido entre más de 50 aspirantes." },
    { question: "¿Quién es el villano principal en 'Endgame'?", options: ["Loki", "Ultron", "Thanos", "Hela"], correct: 2, trivia: "Endgame superó a Avatar en taquilla en 2019." },
    { question: "¿Quién dirigió 'El Resplandor'?", options: ["Alfred Hitchcock", "Stanley Kubrick", "Roman Polanski", "David Lynch"], correct: 1, trivia: "Kubrick llegó a rodar 127 tomas de una sola escena." },
    { question: "¿Qué película incluye 'My Heart Will Go On'?", options: ["Moulin Rouge", "Titanic", "Ghost", "El Guardaespaldas"], correct: 1, trivia: "Céline Dion grabó la canción en una sola toma." },
    { question: "¿Qué director hizo 'Origen' y 'El Caballero Oscuro'?", options: ["James Cameron", "Zack Snyder", "Christopher Nolan", "Denis Villeneuve"], correct: 2, trivia: "Nolan prefiere efectos prácticos sobre el CGI." },
    { question: "¿Qué animal es Simba en 'El Rey León'?", options: ["Tigre", "Pantera", "León", "Leopardo"], correct: 2, trivia: "El Rey León fue la cinta animada tradicional más taquillera." },
    { question: "¿Quién protagonizó 'Gladiator'?", options: ["Russell Crowe", "Mel Gibson", "Brad Pitt", "Tom Cruise"], correct: 0, trivia: "Crowe ganó el Oscar a Mejor Actor." },
    { question: "¿A qué saga pertenece 'La Comunidad del Anillo'?", options: ["Harry Potter", "Star Wars", "El Señor de los Anillos", "Narnia"], correct: 2, trivia: "El Retorno del Rey ganó 11 Oscar de 11 nominaciones." }
];

const TOTAL_QUESTIONS = 5;
const TIME_PER_QUESTION = 15;

const state = {
    playerName: '',
    playerAge: 0,
    questions: [],
    currentIndex: 0,
    score: 0,
    timeLeft: TIME_PER_QUESTION,
    timerInterval: null,
    answered: false,
    answersHistory: []
};

function switchScreen(screenToShow) {
    [homeScreen, gameScreen, resultScreen].forEach(s => s.classList.remove('active-screen'));
    screenToShow.classList.add('active-screen');
    screenToShow.style.animation = 'none';
    screenToShow.offsetHeight;
    screenToShow.style.animation = '';
}

function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function shakeInputs() {
    document.querySelectorAll('.input-wrap').forEach(el => {
        el.style.borderColor = '#e50914';
        el.style.animation = 'shake 0.4s ease';
        setTimeout(() => {
            el.style.animation = '';
            el.style.borderColor = '';
        }, 500);
    });
}

function startGame() {
    const name = document.getElementById('playerName').value.trim();
    const age = document.getElementById('playerAge').value.trim();

    if (!name || !age) {
        shakeInputs();
        return;
    }

    const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
        shakeInputs();
        return;
    }

    state.playerName = name;
    state.playerAge = ageNum;
    state.questions = shuffleArray(allQuestions).slice(0, TOTAL_QUESTIONS);
    state.currentIndex = 0;
    state.score = 0;
    state.answered = false;
    state.answersHistory = [];
    clearInterval(state.timerInterval);

    switchScreen(gameScreen);
    loadQuestion();
}

function loadQuestion() {
    const q = state.questions[state.currentIndex];
    state.timeLeft = TIME_PER_QUESTION;
    state.answered = false;

    currentQSpan.textContent = state.currentIndex + 1;
    questionText.textContent = q.question;

    updateProgressDots();

    optionBtns.forEach((btn, i) => {
        btn.querySelector('.option-text').textContent = q.options[i];
        btn.className = 'option-btn ';
        if (i === 0) btn.classList.add('kahoot-red');
        if (i === 1) btn.classList.add('kahoot-blue');
        if (i === 2) btn.classList.add('kahoot-yellow');
        if (i === 3) btn.classList.add('kahoot-green');
        btn.disabled = false;
    });

    feedbackArea.textContent = '';
    feedbackArea.className = 'feedback-area';

    timerBar.style.width = '100%';
    timerBar.classList.remove('warning', 'danger');
    timerNumber.textContent = TIME_PER_QUESTION;
    timerNumber.classList.remove('warning-num', 'danger-num');

    startTimer();
}

function updateProgressDots() {
    const dots = progressDots.querySelectorAll('.pdot');
    dots.forEach((dot, i) => {
        dot.className = 'pdot';
        if (i < state.currentIndex) {
            dot.classList.add(state.answersHistory[i] === true ? 'done' : 'wrong-dot');
        } else if (i === state.currentIndex) {
            dot.classList.add('active');
        }
    });
}

function startTimer() {
    clearInterval(state.timerInterval);
    const totalMs = TIME_PER_QUESTION * 1000;
    const intervalMs = 50;
    const decrementPerTick = (intervalMs / totalMs) * 100;
    let ticks = 0;

    state.timerInterval = setInterval(() => {
        ticks++;
        const newWidth = Math.max(0, 100 - ticks * decrementPerTick);
        timerBar.style.width = newWidth + '%';

        const remaining = Math.ceil((100 - ticks * decrementPerTick) / 100 * TIME_PER_QUESTION);
        if (remaining !== state.timeLeft) {
            state.timeLeft = remaining;
            timerNumber.textContent = remaining;

            timerBar.classList.remove('warning', 'danger');
            timerNumber.classList.remove('warning-num', 'danger-num');

            if (remaining <= 5) {
                timerBar.classList.add('danger');
                timerNumber.classList.add('danger-num');
            } else if (remaining <= 8) {
                timerBar.classList.add('warning');
                timerNumber.classList.add('warning-num');
            }
        }

        if (newWidth <= 0) {
            clearInterval(state.timerInterval);
            handleTimeout();
        }
    }, intervalMs);
}

function handleTimeout() {
    if (state.answered) return;
    state.answered = true;
    clearInterval(state.timerInterval);

    const q = state.questions[state.currentIndex];
    const randomIndex = Math.floor(Math.random() * 4);
    const isCorrect = randomIndex === q.correct;

    if (isCorrect) state.score++;
    state.answersHistory.push(isCorrect);

    optionBtns.forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.add('disabled');
        if (i === q.correct) btn.classList.add('reveal-correct');
    });

    if (!isCorrect) {
        optionBtns[randomIndex].classList.add('incorrect');
    } else {
        optionBtns[randomIndex].classList.add('correct');
    }

    feedbackArea.textContent = '⏰ ¡Se acabó el tiempo! El juego ha elegido por ti.';
    feedbackArea.className = 'feedback-area timeout-fb';

    updateProgressDots();
    setTimeout(advanceOrEnd, 2000);
}

function handleAnswer(selectedIndex) {
    if (state.answered) return;
    state.answered = true;
    clearInterval(state.timerInterval);

    const q = state.questions[state.currentIndex];
    const isCorrect = selectedIndex === q.correct;

    if (isCorrect) state.score++;
    state.answersHistory.push(isCorrect);

    optionBtns.forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.add('disabled');
        if (i === q.correct) btn.classList.add('reveal-correct');
    });

    if (isCorrect) {
        optionBtns[selectedIndex].classList.add('correct');
        feedbackArea.textContent = '✅ ¡Correcto! ' + q.trivia;
        feedbackArea.className = 'feedback-area correct-fb';
    } else {
        optionBtns[selectedIndex].classList.add('incorrect');
        feedbackArea.textContent = '❌ ¡Incorrecto! ' + q.trivia;
        feedbackArea.className = 'feedback-area incorrect-fb';
    }

    updateProgressDots();
    setTimeout(advanceOrEnd, 2000);
}

function advanceOrEnd() {
    state.currentIndex++;

    if (state.currentIndex >= TOTAL_QUESTIONS) {
        endGame();
    } else {
        loadQuestion();
    }
}

function endGame() {
    clearInterval(state.timerInterval);
    switchScreen(resultScreen);
    displayResults();
}

function displayResults() {
    const score = state.score;
    const total = TOTAL_QUESTIONS;

    const ranks = [
        { min: 0, max: 1, title: "Espectador Casual", icon: "🍿", color: "#888", message: "Todavía te queda mucho por ver. ¡Empieza a explorar el mundo del cine y vuelve a intentarlo!" },
        { min: 2, max: 2, title: "Aficionado al Cine", icon: "🎬", color: "#e67e22", message: "Conoces algunos clásicos, pero aún hay grandes películas esperándote. ¡Sigue viendo cine!" },
        { min: 3, max: 3, title: "Cinéfilo en Entrenamiento", icon: "🎥", color: "#f1c40f", message: "¡Vas por buen camino! Tienes una base sólida de cultura cinematográfica." },
        { min: 4, max: 4, title: "Experto en Películas", icon: "⭐", color: "#e50914", message: "¡Impresionante! Conoces muy bien el séptimo arte. Pocos llegan hasta aquí." },
        { min: 5, max: 5, title: "Maestro del Cine", icon: "🏆", color: "#ffd700", message: "¡Eres una leyenda! Tu conocimiento cinematográfico es extraordinario. ¡El Spielberg de los trivials!" }
    ];

    const rank = ranks.find(r => score >= r.min && score <= r.max) || ranks[0];

    resultPlayerName.textContent = ', ' + state.playerName;
    resultIcon.textContent = rank.icon;
    resultRank.textContent = rank.title;
    resultRank.style.color = rank.color;
    resultRank.style.borderColor = rank.color;

    const hexToRgba = (hex) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r},${g},${b},0.12)`;
    };
    resultRank.style.background = hexToRgba(rank.color);

    resultAciertos.textContent = `${score} de ${total} aciertos`;
    resultMessage.textContent = rank.message;

    resultScoreBar.style.width = '0%';
    setTimeout(() => {
        resultScoreBar.style.width = (score / total) * 100 + '%';
    }, 300);
}

function resetGame() {
    clearInterval(state.timerInterval);
    state.playerName = '';
    state.playerAge = 0;
    state.questions = [];
    state.currentIndex = 0;
    state.score = 0;
    state.timeLeft = TIME_PER_QUESTION;
    state.answered = false;
    state.answersHistory = [];

    document.getElementById('playerName').value = '';
    document.getElementById('playerAge').value = '';
    resultScoreBar.style.width = '0%';

    switchScreen(homeScreen);
}

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('playerName').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') startGame();
});
document.getElementById('playerAge').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') startGame();
});

optionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-index'), 10);
        handleAnswer(index);
    });
});

restartBtn.addEventListener('click', resetGame);

const style = document.createElement('style');
style.textContent = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
}`;
document.head.appendChild(style);