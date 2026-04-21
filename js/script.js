// script.js - versión inicial (solo placeholder)
console.log("QuizMovie - script cargado");

document.getElementById('startBtn').addEventListener('click', function() {
    const name = document.getElementById('playerName').value.trim();
    const age = document.getElementById('playerAge').value.trim();
    if (!name || !age) {
        alert('Por favor, introduce tu nombre y edad para comenzar.');
        return;
    }
    alert(`¡Bienvenido ${name}! El juego comenzará en la próxima actualización.`);
    // Aquí más adelante se implementará el cambio de pantalla
});