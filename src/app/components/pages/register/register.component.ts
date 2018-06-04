import { Component, OnInit } from '@angular/core';
import { startMusic, stopMusic, startMusicOnce } from './../../../functions/musics/music';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../styles/pages/_register.scss']
})
export class RegisterComponent implements OnInit {
  introMusic: any;
  clickMusic: any;
  avatar: any;
  selectedAvatar: number = 1;
  totalAvatars: number = 2;

  constructor() { }

  ngOnInit() {
    this.initAvatarElementSelector();
    this.initMusicsElementSelector();

    startMusic(this.introMusic);
  }

  changeAvatar(value) {
    let nextValue;
    startMusicOnce(this.clickMusic);
    nextValue = this.selectedAvatar + value;

    if (nextValue > this.totalAvatars) {
      nextValue = 1;
    }
    if (nextValue === 0) {
      nextValue = this.totalAvatars;
    }

    this.animateTransition(value);
    setTimeout(() => {
      this.selectedAvatar = nextValue;
    }, 500);
  }

  animateTransition(value) {
    if (value > 0) {
      this.avatar.style.animationName = 'exitRight';
      setTimeout(() => {
        this.avatar.style.animationName = 'enterLeft';
      }, 500);
      return;
    }

    this.avatar.style.animationName = 'exitLeft';
    setTimeout(() => {
      this.avatar.style.animationName = 'enterRight';
    }, 500);

  }

  initMusicsElementSelector() {
    this.introMusic = document.getElementById('intro-music');
    this.clickMusic = document.getElementById('click-music');
  }

  initAvatarElementSelector() {
    this.avatar = document.getElementById('avatar');
  }

}
