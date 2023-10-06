// JavaScript Document

const elemento = document.getElementById('vinesdiv');
const audio = document.getElementById('vinesaudio');

elemento.addEventListener('mouseenter', () => {
	audio.currentTime = 0;
    audio.play();
});

elemento.addEventListener('mouseleave', () => {
    audio.currentTime = 0; // Define o tempo de reprodução de volta ao início
    audio.play();
});