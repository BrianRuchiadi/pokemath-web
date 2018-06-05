import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { UserPokedex } from './../../../classes/user-pokedex';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['../../../styles/pages/_pokedex.scss']
})
export class PokedexComponent implements OnInit {
  userId: number;
  pokedex: UserPokedex[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userId = 1;

    this.getPokedex();
  }

  getPokedex() {
    return this.userService.getUserPokedex(this.userId)
      .subscribe(response => {
        this.pokedex = response;

        console.log(['get pokedex in pokedex component', this.pokedex]);
      });
  }

}
