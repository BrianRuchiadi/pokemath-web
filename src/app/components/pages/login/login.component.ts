import { Component, OnInit } from '@angular/core';
import { startMusic, stopMusic, startMusicOnce } from './../../../functions/musics/music';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../styles/pages/_login.scss']
})
export class LoginComponent implements OnInit {
  introMusic: any;

  constructor() { }

  ngOnInit() {
    this.initMusicsElementSelector();

    startMusic(this.introMusic);
  }

  initMusicsElementSelector() {
    this.introMusic = document.getElementById('intro-music');
  }

}
