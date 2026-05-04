console.log("QuizMovie - script cargado");

const homeScreen = document.getElementById('homeScreen');
const gameScreen = document.getElementById('gameScreen');
const resultScreen = document.getElementById('resultScreen');

const currentQSpan = document.getElementById('currentQ');
const progressDots = document.getElementById('progressDots');
const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const feedbackArea = document.getElementById('feedbackArea');
const optionBtns = optionsGrid.querySelectorAll('.option-btn');

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

const state = {
    playerName: '',
    playerAge: 0,
    questions: [],
    currentIndex: 0,
    score: 0,
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

    switchScreen(gameScreen);
    loadQuestion();
}

function loadQuestion() {
    const q = state.questions[state.currentIndex];
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

function handleAnswer(selectedIndex) {
    if (state.answered) return;
    state.answered = true;

    const q = state.questions[state.currentIndex];
    const isCorrect = selectedIndex === q.correct;

    if (isCorrect) {
        state.score++;
    }
    state.answersHistory.push(isCorrect);

    optionBtns.forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.add('disabled');
        if (i === q.correct) {
            btn.classList.add('reveal-correct');
        }
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
        // Placeholder: més endavant anirem a la pantalla de resultats definitiva
        switchScreen(resultScreen);
    } else {
        loadQuestion();
    }
}

// Event listeners
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