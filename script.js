
const button1 = document.getElementById('preset-1');
const button2 = document.getElementById('preset-2');
const button3 = document.getElementById('preset-3');
const radioText = document.getElementById('now-playing');
const volume = document.getElementById('radio-volume');

volume.addEventListener('input', () => {

    const currentVolume = Number(volume.value);

    track1.volume = currentVolume;
    track2.volume = currentVolume;
    track3.volume = currentVolume;

});

const track1 = new Audio('preset-1.mp3');
const track2 = new Audio('preset-1.mp3');
const track3 = new Audio('preset-1.mp3');

track1.loop = true;
track2.loop = true;
track3.loop = true;


function stopAllTracks() {
    track1.pause();
    track2.pause();
    track3.pause();
 }

if (button1) {
 button1.addEventListener('click', () => {
        if (track1.paused) {
            stopAllTracks(); 
            track1.play();
            radioText.textContent = "Now Playing - The ocean is outside your window, enjoy";
        } else{
            track1.pause();
            radioText.textContent = "Welcome To Eau De Mer FM * Tune into your preferred preset";
        }
        
   })};

   if (button2) {
button2.addEventListener('click', () => {
            if (track2.paused)  {
                stopAllTracks();
                track2.play();
                radioText.textContent = "Now Playing - Avalon's last walk in the island";
    
        }else {
            track2.pause();
            radioText.textContent = "Welcome To Eau De Mer FM * Tune into your preferred preset";
        }});            
}

if (button3) {
button3.addEventListener('click', () => {
    if (track3.paused) {
        stopAllTracks();
        track3.play();
        radioText.textContent = "Now Playing - This track is still unnamed";
    }else {
        track3.pause();
        radioText.textContent = "Welcome to Eau De Mer * Tune into your preffered preset";
    }});
}