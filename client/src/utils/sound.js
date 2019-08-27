import { Howl } from 'howler';

export default class Sound {
  constructor ( options = {} ) {
    this.options = options;
    this.audioContext = new Howl({
      ...options,
      onend: () => {
        this.playing = false;
      },
    });
    this.playing = options.autoplay;
  }

  play = () => {
    this.audioContext.play();
    this.playing = true;
  };

  stop = () => {
    this.audioContext.stop();
    this.playing = false;
  };
}