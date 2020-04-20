document.onclick = () => {
  const audioCtx = new AudioContext();

  const myAudio = new Audio('https://upload.wikimedia.org/wikipedia/en/4/49/Clear_-_Cybotron.ogg');
  myAudio.play();
  myAudio.crossOrigin = 'anonymous';

  const sourceNode = audioCtx.createMediaElementSource(audio);
  const gainNode = audioCtx.createGain();
  sourceNode.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  gainNode.gain.setValueAtTime(1, audioCtx.currentTime);

  setTimeout(function() {
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 5);
  }, 5000);
};


class Track {

  constructor(myAudio) {
    this.audioCtx = new window.AudioContext || window.webkitAudioContext;
    this.sourceNode = this.audioCtx.createMediaElementSource(myAudio);
    
    this.gainNode = this.audioCtx.createGain();
    
    this.sourceNode.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);
    this.gainNode.gain.setValueAtTime(1, this.audioCtx.currentTime);
  }
  
  linearRampMinus () {
      this.gainNode.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + 5);
  }
}