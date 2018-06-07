import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StageConcise } from './../../../classes/stage-concise';
import { UserGameComponent } from './../../../classes/user-game-component';

import { GameService } from './../../../services/game.service';
import { UserService } from './../../../services/user.service';

import { UserPokedex } from './../../../classes/user-pokedex';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../../styles/pages/_home.scss']
})
export class HomeComponent implements OnInit {
  userId: number;
  pokedexInfo: UserPokedex[];
  stageInfo: StageConcise[];
  userInfo: UserGameComponent;

  // element
  multiplicationElement: any;
  divisionElement: any;
  additionElement: any;
  subtractionElement: any;

  constructor(
    private gameService: GameService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userId = 1;

    this.initUserInfo();
  }

  play(stageId) {
    this.router.navigate(['/play/' + stageId]);
  }

  initUserInfo() {
    this.userService.getUserGameComponent(this.userId).subscribe(
      response => {
        this.userInfo = response[0];
        this.userInfo.is_upgrade = false;

        this.initAttackUpgradePrice();
        this.setPurchaseEligibilityState();
        this.initStageInfo();
        this.initPokedexInfo();
        this.initAttackBars();
      }
    );
  }

  initPokedexInfo() {
    let pokemonOwned: number = 0;
    let pokedexTotal: number = 0;
    let completionPercentage: String = '';

    this.userService.getUserPokedex(this.userId).subscribe(
      response => {
        this.pokedexInfo = response;

        pokemonOwned = response.filter((val) => val.user_id).length;
        pokedexTotal = response.length;

        completionPercentage = pokemonOwned + ' / ' + pokedexTotal;

        this.userInfo.pokedex_completion = completionPercentage;
      }
    );
  }

  initStageInfo() {
    this.gameService.getStageConcise().subscribe(
      response => {
        this.stageInfo = response;

        for (let stage of this.stageInfo) {
          stage.unlocked = (this.userInfo.exp_accumulated >= stage.exp_needed) ? true : false;
          stage.exp_needed = stage.exp_needed.toLocaleString();
        }
        console.log([this.userInfo]);
      }
    );
  }

  initAttackBars() {
    this.multiplicationElement = document.getElementById('multiplication');
    this.divisionElement = document.getElementById('division');
    this.additionElement = document.getElementById('addition');
    this.subtractionElement = document.getElementById('subtraction');

    this.initAttackElementBars();
  }

  initAttackElementBars() {
    let multiplicationWidth;
    let divisionWidth;
    let additionWidth;
    let subtractionWidth;

    multiplicationWidth = (this.userInfo.power_multiplication / 50) * 100;
    divisionWidth = (this.userInfo.power_division / 50) * 100;
    additionWidth = (this.userInfo.power_addition / 50) * 100;
    subtractionWidth = (this.userInfo.power_subtraction / 50) * 100;

    this.multiplicationElement.style.width = multiplicationWidth.toString() + 'px';
    this.divisionElement.style.width = divisionWidth.toString() + 'px';
    this.additionElement.style.width = additionWidth.toString() + 'px';
    this.subtractionElement.style.width = subtractionWidth.toString() + 'px';
  }

  initAttackUpgradePrice() {
    this.userInfo.cost_power_division = this.userInfo.power_division * 5;
    this.userInfo.cost_power_multiplication = this.userInfo.power_multiplication * 5;
    this.userInfo.cost_power_addition = this.userInfo.power_addition * 5;
    this.userInfo.cost_power_subtraction = this.userInfo.power_subtraction * 5;
  }

  setPurchaseEligibilityState() {
    this.userInfo.power_addition_eligibility = false;
    this.userInfo.power_subtraction_eligibility = false;
    this.userInfo.power_multiplication_eligibility = false;
    this.userInfo.power_division_eligibility = false;

    if (+this.userInfo.cash >= this.userInfo.cost_power_addition) {
      this.userInfo.power_addition_eligibility = true;
    }
    if (+this.userInfo.cash >= this.userInfo.cost_power_subtraction) {
      this.userInfo.power_subtraction_eligibility = true;
    }
    if (+this.userInfo.cash >= this.userInfo.cost_power_multiplication) {
      this.userInfo.power_multiplication_eligibility = true;
    }
    if (+this.userInfo.cash >= this.userInfo.cost_power_division) {
      this.userInfo.power_division_eligibility = true;
    }
  }

  upgradeAttackPower(type) {
    this.userInfo.is_upgrade = true;

    switch (type) {
      case 'multiplication':
        this.userInfo.power_multiplication = this.userInfo.power_multiplication + 1;
        this.userInfo.cash = (+this.userInfo.cash - this.userInfo.cost_power_multiplication).toFixed(2);
        break;
      case 'division':
        this.userInfo.power_division = this.userInfo.power_division + 1;
        this.userInfo.cash = (+this.userInfo.cash - this.userInfo.cost_power_division).toFixed(2);
        break;
      case 'addition':
        this.userInfo.power_addition = this.userInfo.power_addition + 1;
        this.userInfo.cash = (+this.userInfo.cash - this.userInfo.cost_power_addition).toFixed(2);
        break;
      case 'subtraction':
        this.userInfo.power_subtraction = this.userInfo.power_subtraction + 1;
        this.userInfo.cash = (+this.userInfo.cash - this.userInfo.cost_power_subtraction).toFixed(2);
        break;
    }

    this.initAttackUpgradePrice();
    this.setPurchaseEligibilityState();
    this.initAttackElementBars();
  }

  confirmUpgradeAttackPower() {
    this.userService.updateAttackPower(this.userInfo);
    this.userInfo.is_upgrade = false;
  }


}
