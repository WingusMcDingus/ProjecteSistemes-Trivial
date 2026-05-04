console.log("QuizMovie - script cargado");

const homeScreen = document.getElementById('homeScreen');
const gameScreen = document.getElementById('gameScreen');
const resultScreen = document.getElementById('resultScreen');

function switchScreen(screenToShow) {
    [homeScreen, gameScreen, resultScreen].forEach(s => s.classList.remove('active-screen'));
    screenToShow.classList.add('active-screen');
    // Reiniciar animació perquè funcioni cada cop
    screenToShow.style.animation = 'none';
    screenToShow.offsetHeight;
    screenToShow.style.animation = '';
}

document.getElementById('startBtn').addEventListener('click', function () {
    const name = document.getElementById('playerName').value.trim();
    const age  = document.getElementById('playerAge').value.trim();

    if (!name || !age) {
        document.querySelectorAll('.input-wrap').forEach(el => {
            el.style.borderColor = '#e50914';
            el.style.animation = 'shake 0.4s ease';
            setTimeout(() => {
                el.style.animation = '';
                el.style.borderColor = '';
            }, 500);
        });
        return;
    }

    // En la propera iteració es carregarà el joc real
    switchScreen(gameScreen);
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