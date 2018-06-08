import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { startMusic, stopMusic, startMusicOnce } from './../../../functions/musics/music';
import { MiscService } from './../../../services/misc.service';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../../styles/pages/_register.scss']
})
export class RegisterComponent implements OnInit {
  introMusic: any;
  clickMusic: any;
  avatar: any;
  container: any;
  registerSection: any;
  registerSuccessSection: any;
  selectedAvatar = 1;
  totalAvatars = 1;
  username = '';
  password = '*********';
  error: any = {
    username: ''
  };



  isFillingFormState: Boolean = true;
  isReceivedPasswordState: Boolean = false;
  isRegisterButtonProcessing: Boolean = false;

  constructor(
    private miscService: MiscService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) { this.router.navigate(['/']); }
    this.getAvatarCount();
    this.initSectionElementSelector();
    this.initAvatarElementSelector();
    this.initMusicsElementSelector();

    startMusic(this.introMusic);
  }

  getAvatarCount() {
    this.miscService.getAvatarsCount().subscribe(
      (response) => { this.totalAvatars = response;
        console.log(['this.totalAvatars', this.totalAvatars]); }
    );
  }

  goToMenu() {
    this.router.navigate(['/']);
  }

  createUser() {
    this.isRegisterButtonProcessing = true;

    if (!this.username) {
      this.isRegisterButtonProcessing = false;
      this.error.username = '* username must not be empty';
      return;
    }

    this.authService.register(this.username, this.selectedAvatar).subscribe(
      response => {
        console.log(['response from register from register.component.ts', response]);
        localStorage.setItem('accessToken', response.accessToken);

        this.password = response.password;
        this.isRegisterButtonProcessing = false;
        this.registerSection.style.display = 'none';
        this.registerSuccessSection.style.display = 'table';
      },
      error => {
        console.log(['error from register from register.component.ts', error]);
        this.isRegisterButtonProcessing = false;
        this.error.username = error.error.username;
      }
    );
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

  initSectionElementSelector() {
    this.container = document.getElementById('container');
    this.registerSection = document.getElementById('register-table');
    this.registerSuccessSection = document.getElementById('register-success');

    this.registerSuccessSection.style.display = 'none';
  }

}
