import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['../../../styles/pages/_account.scss']
})
export class AccountComponent implements OnInit {
  password: any = '';
  error: any = {
    password: ''
  };
  updatePasswordSuccess: Boolean = false;

  isUpdatePasswordButtonProcessing: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  updatePassword() {
    this.error.password = '';

    if (!this.password) {
      this.error.password = '* password cannot be empty';
      return ;
    }

    if (this.password.length < 6) {
      this.error.password = '* password must contain more than 6 characters';
      return ;
    }

    this.isUpdatePasswordButtonProcessing = true;

    this.authService.updatePassword(this.password).subscribe(
      (response) => {
        this.isUpdatePasswordButtonProcessing = false;
        this.updatePasswordSuccess = true;
      },
      (err) => {
        this.isUpdatePasswordButtonProcessing = false;
        if (err.error && err.error.password) {
          this.error.password = err.error.password;
        }
      }
    );
  }

  goToHome() {
    this.router.navigate(['/']);
  }

}
