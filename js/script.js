console.log("QuizMovie - script cargado");

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

    // En próximos commits se añadirá la transición al juego
    alert(`¡Bienvenido ${name}! El juego comenzará en la próxima actualización.`);
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