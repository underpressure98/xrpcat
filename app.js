document.addEventListener('DOMContentLoaded', function() {
    var penImages = document.querySelectorAll('.pen');
    
    penImages.forEach(function(img) {
        img.addEventListener('click', function() {
            var audio = new Audio('FXCK.mp3'); // Make sure the path is correct
            audio.volume = 0.1; // You can adjust the volume from 0.0 to 1.0
            audio.play().catch(e => console.error("Erdsadsaror playing audio:", e));
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('song3.mp3');
    audio.loop = true;
    audio.muted = true; // Start muted to comply with autoplay policies
    audio.volume = 0.2;
    audio.play().catch(e => console.error("Auto-play failed", e));

    var soundToggle = document.getElementById('soundToggle');
    soundToggle.src = 'soundoff.png'; // Start with sound off icon
    soundToggle.addEventListener('click', function() {
        if (audio.muted || audio.paused) {
            audio.muted = false;
            audio.volume = 0.2;
            audio.play();
            soundToggle.src = 'soundon.png';
        } else {
            audio.pause(); // or audio.muted = true; to mute instead of pause
            soundToggle.src = 'soundoff.png';
        }
    });
});