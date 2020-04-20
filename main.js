// set basic variables for example
const myAudio = document.querySelector('audio');

const linearRampMinus = document.querySelector('.linear-ramp-minus');

class Track {

  constructor(myAudio) {
    this.context = new window.AudioContext || window.webkitAudioContext;
    this.sourceNode = this.context.createMediaElementSource(myAudio);

    this.gainNode = this.context.createGain();

    this.sourceNode.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
    this.gainNode.gain.setValueAtTime(1, this.context.currentTime);
    this.myAudio = myAudio
  }

  linearRampMinus() {
    this.gainNode.gain.linearRampToValueAtTime(0, this.context.currentTime + this.long);
  }
}

myAudio.addEventListener('play', () => {
  let waa = new Track(myAudio);
  
  waa.long = 15;
  
  linearRampMinus.onclick = waa.linearRampMinus.bind(waa);

});
