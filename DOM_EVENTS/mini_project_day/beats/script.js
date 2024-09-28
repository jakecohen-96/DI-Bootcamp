
function playSound(keycode) {
    const audio = document.getElementById(`audio-${keycode}`);
    const pad = document.querySelector(`.drum-pad[data-key="${keycode}"]`);

    if (!audio) return;
    
}