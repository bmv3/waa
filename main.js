// create audio context
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

// set basic variables for example
const myAudio = document.querySelector('audio');

const linearRampMinus = document.querySelector('.linear-ramp-minus');

myAudio.addEventListener('play', () => {
  audioCtx = new AudioContext();
  const source = audioCtx.createMediaElementSource(myAudio);

  // Create a gain node and set it's gain value to 0.5
  const gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.5;
  let currGain = gainNode.gain.value;

  // connect the AudioBufferSourceNode to the gainNode
  // and the gainNode to the destination
  source.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  // set buttons to do something onclick

  linearRampMinus.onclick = function() {
    currGain = 0;
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 5);
  }

});
