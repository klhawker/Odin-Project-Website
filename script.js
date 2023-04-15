let counter = 0;
const secret = document.querySelector('.secret');
const playTime = 10000; // Play the audio for 5 seconds (5000 milliseconds)
const audio = "./Rapp Snitch Knishes feat. Mr. Fantastik - MF DOOM.mp3";

function easterEgg() {
    counter++;
    if (counter >= 5) {
        playAudioForTime(audio, playTime);
        counter = 0;
    } else {
        return;
    }
}

function playAudioForTime(audioSrc, playTime) {
    const audio = new Audio(audioSrc);

    audio.play();

    setTimeout(() => {
        audio.pause();
    }, playTime);
    return;
}

//Event Listeners

secret.addEventListener('click', easterEgg);