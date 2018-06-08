import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { startMusic, stopMusic, startMusicOnce } from './../../../functions/musics/music';

import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../../styles/pages/_login.scss']
})
export class LoginComponent implements OnInit {
  introMusic: any;
  error: any = {
    username: '',
    password: ''
  };
  password = '';
  username = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) { this.router.navigate(['/']); }
    this.initMusicsElementSelector();

    startMusic(this.introMusic);
  }

  initMusicsElementSelector() {
    this.introMusic = document.getElementById('intro-music');
  }

  login() {
    this.clearErrors();

    if (!this.username) {
      this.error.username = '* username must be filled';
      return;
    }

    if (!this.password) {
      this.error.password = '* password must be filled';
      return;
    }

    this.authService.login(this.username, this.password).subscribe(
      response => {
        if (response.token) {
          localStorage.setItem('accessToken', response.token);
          this.router.navigate(['/']);
        }
      },
      error => {
        this.error = {
          username: error.error.username,
          password: error.error.password
        };
      }
    );
  }

  clearErrors() {
    this.error = {
      username: '',
      password: ''
    };
  }

}
