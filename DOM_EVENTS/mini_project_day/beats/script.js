
function playSound(keycode) {
    const audio = document.getElementById(`audio-${keycode}`);
    const pad = document.querySelector(`.drum-pad[data-key="${keycode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    pad.classList.add('active');
    setTimeout(() => pad.classList.remove('active'), 100);
}

window.addEventListener('keydown', (e) => {
    const key = e.code;
    const keyCode = key.charCodeAt(key.length - 1);
    playSound(keyCode);
});

const pads = document.querySelectorAll('.drum-pad');
pads.forEach(pad => {
    pad.addEventListener('click', () => {
        const keycode = pad.getAttribute('data-key');
        playSound(keycode)
    });
});