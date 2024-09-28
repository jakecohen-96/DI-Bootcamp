
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
    playSound(e.keycode)
} );

const pads = document.querySelectorAll('.drum-pad');
pads.forEach(pad => {
    pads.addEventListener('click', () => {
        const keycode = pad.getAttribute('data-key');
        playSound(keycode)
    });
});