import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { KEY_CODE} from './../../../enums/keycode';

// player
import { playerSetup } from './../../../functions/player/player';
// movement
import { animateMovement } from './../../../functions/player/movement';
// trees
import { trees as stageOneTreesSetup } from './../../../functions/trees/stage1';
import { trees as stageTwoTreesSetup } from './../../../functions/trees/stage2';
import { trees as stageThreeTreesSetup } from './../../../functions/trees/stage3';
import { trees as stageFourTreesSetup } from './../../../functions/trees/stage4';
import { trees as stageFiveTreesSetup } from './../../../functions/trees/stage5';
import { trees as stageSixTreesSetup } from './../../../functions/trees/stage6';
import { trees as stageSevenTreesSetup } from './../../../functions/trees/stage7';
// musics
import { startMusic, stopMusic, startMusicOnce } from './../../../functions/musics/music';
// canvas
import { initCanvas } from './../../../functions/canvas/canvas';
// question
import { generateQuestion } from './../../../functions/questions/questions';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['../../../styles/pages/_play.scss']
})
export class PlayComponent implements OnInit {
  container: any;
  player: any;
  treeOne: any;
  treeTwo: any;
  treeThree: any;
  treeFour: any;
  treeFive: any;
  treeSix: any;
  treeSeven: any;
  treeEight: any;
  treeNine: any;
  treeTen: any;
  obstacleX: Array<number> = [];
  obstacleY: Array<number> = [];
  pokemonX: Array<number> = [];
  pokemonY: Array<number> = [];
  pokemon: Array<any> = [];
  pokemonOne: any;
  pokemonTwo: any;
  pokemonThree: any;
  pokemonFour: any;
  pokemonFive: any;
  pokemonOneHealth: number = 20;
  pokemonOneMaxHealth: number = 20;
  currentQuestion: any;
  currentQuestionType: any;
  // elements
  roaming: any;
  battle: any;
  foeHealth: any;
  battleOptions: any;
  questionModal: any;
  attackMultiplication: any;
  attackDivision: any;
  attackAddition: any;
  attackSubtraction: any;
  pokemonDetail: any;
  battlePokemon: any;
  question: any;
  currentAnswer: any;
  // states
  isBattling: Boolean = false;
  // musics
  chillMusic: any;
  battleMusic: any;
  attackMusic: any;
  victorySmallMusic: any;

  constructor(
    private router: Router
  ) {
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.DOWN_ARROW && !this.isBattling) {
      this.movePlayer('down');
    }
    if (event.keyCode === KEY_CODE.LEFT_ARROW && !this.isBattling) {
      this.movePlayer('left');
    }
    if (event.keyCode === KEY_CODE.UP_ARROW && !this.isBattling) {
      this.movePlayer('up');
    }
    if (event.keyCode === KEY_CODE.RIGHT_ARROW && !this.isBattling) {
      this.movePlayer('right');
    }
  }

  ngOnInit() {
    this.initPokemonsElementSelector();
    this.initContainer();
    this.initPlayer();
    this.initTrees();
    this.initPokemonOne();
    this.initPokemonTwo();
    this.initMusicsElementSelector();
    this.initBattleElementSelector();

    this.chillMusic = startMusic(this.chillMusic);
  }

  movePlayer(direction) {
    if (!direction) { return; }

    switch (direction) {
      case 'down':
        this.player = animateMovement(this.player, 'down');
        setTimeout(() => {
          this.updatePlayerPosition('down');
        }, 150);
        break;
      case 'left':
        this.player = animateMovement(this.player, 'left');
        setTimeout(() => {
          this.updatePlayerPosition('left');
        }, 150);
        break;
      case 'up':
        this.player = animateMovement(this.player, 'up');
        setTimeout(() => {
          this.updatePlayerPosition('up');
        }, 150);
        break;
      case 'right':
        this.player = animateMovement(this.player, 'right');
        setTimeout(() => {
          this.updatePlayerPosition('right');
        }, 150);
        break;
      default: break;
    }
  }

  attack(type) {
    // damage exist now for testing, later use attack point
    let newQuestion;
    let symbol;
    let evalSymbol;

    this.currentQuestionType = type;
    this.initElementAttackState();

    switch (type) {
      case 'multiplication':
        symbol = 'x';
        evalSymbol = '*';
        break;
      case 'division':
        symbol = '/';
        evalSymbol = '/';
        break;
      case 'addition':
        symbol = '+';
        evalSymbol = '+';
        break;
      case 'subtraction':
        symbol = '-';
        evalSymbol = '-';
        break;
    }

    newQuestion = generateQuestion(type);
    this.currentQuestion = `${newQuestion.numOne } ${evalSymbol} ${newQuestion.numTwo}`;
    this.question.innerHTML = `${newQuestion.numOne } ${symbol} ${newQuestion.numTwo} =`;
  }

  answer() {
    // this one need to return to attack scene, or regenerate next question
    if (!this.currentAnswer || (eval(this.currentQuestion) !== +this.currentAnswer)) {
      this.attack(this.currentQuestionType);
      return;
    }

    switch (this.currentQuestionType) {
      case 'multiplication': this.minusPokemonHealth(10); break;
      case 'division': this.minusPokemonHealth(10); break;
      case 'addition': this.minusPokemonHealth(7); break;
      case 'subtraction': this.minusPokemonHealth(7); break;
    }
  }

  minusPokemonHealth(damage) {
    let displayPx;

    this.attackMusic = startMusicOnce(this.attackMusic);
    this.pokemonOneHealth -= damage;
    displayPx = (this.pokemonOneHealth / this.pokemonOneMaxHealth) * 100;

    if (displayPx <= 0) {
      displayPx = 0;
      this.pokemonCapturedScene();
    }
    this.initAttackSuccessScene();
    this.foeHealth.style.width = displayPx + 'px';
  }

  updatePlayerPosition(direction) {
      let positionX: number = +this.player.style.left.replace('px', '');
      let positionY: number = +this.player.style.top.replace('px', '');

      switch (direction) {
        case 'down':
          if (!this.isWalkablePath(positionX, positionY, 'down')) { break; }
          positionY += 10;
          break;
        case 'left':
          if (!this.isWalkablePath(positionX, positionY, 'left')) { break; }
          positionX -= 10;
          break;
        case 'up':
          if (!this.isWalkablePath(positionX, positionY, 'up')) { break; }
          positionY -= 10;
          break;
        case 'right':
          if (!this.isWalkablePath(positionX, positionY, 'right')) { break; }
          positionX += 10;
          break;
      }

      this.player.style.left = positionX + 'px';
      this.player.style.top = positionY + 'px';
  }

  isWalkablePath(x, y, direction): Boolean {
    const boundaryX: number = +this.container.style.width.replace('px', '');
    const boundaryY: number = +this.container.style.height.replace('px', '');
    const playerWidth: number = +this.player.style.width.replace('px', '');
    const playerHeight: number = +this.player.style.height.replace('px', '');

    if (direction === 'up') {
      if ((y - 10) < 0) { return false; }
      if (this.isToObstacle(x, (y - 10), 'up')) { return false; }
      if (this.isPokemonPath(x, (y - 10), 'up')) { return false; }
    }

    if (direction === 'left') {
      if ((x - 10) < 0) { return false; }
      if (this.isToObstacle((x - 10), y, 'left')) { return false; }
      if (this.isPokemonPath((x - 10), y, 'left')) { return false; }
    }

    if (direction === 'down') {
      if ((y + 10) > (boundaryY - playerWidth)) { return false; }
      if (this.isToObstacle(x, (y + 10), 'down')) { return false; }
      if (this.isPokemonPath(x, (y + 10), 'down')) { return false; }
    }

    if (direction === 'right') {
      if ((x + 10) > (boundaryX - playerHeight)) { return false; }
      if (this.isToObstacle((x + 10), y, 'right')) { return false; }
      if (this.isPokemonPath((x + 10), y, 'right')) { return false; }
    }

    return true;
  }

  isToObstacle(x, y, direction): Boolean {
    let currentObstacleX: number;
    let currentObstacleY: number;

    for (let i = 0; i < this.obstacleX.length; i++) {
      currentObstacleX = this.obstacleX[i];
      currentObstacleY = this.obstacleY[i];

      if (x === currentObstacleX && y === currentObstacleY) {
        return true;
      }
    }

    return false;
  }

  isPokemonPath(x, y, direction): Boolean {
    let currentPokemonX: number;
    let currentPokemonY: number;

    for (let i = 0; i < this.pokemonX.length; i++) {
      currentPokemonX = this.pokemonX[i];
      currentPokemonY = this.pokemonY[i];

      if (x === currentPokemonX && y === currentPokemonY) {
        console.log(['bang, pokemon encountered, it is ', this.pokemon[i]]);
        this.pokemonBattleScene(this.pokemon[i]);
        return true;
      }
    }

    return false;
  }

  pokemonBattleScene(pokemon) {
    this.isBattling = true;
    this.battlePokemon.style.animationName = 'pokemonEntrance';
    this.roaming.style.animationName = 'stageDisappearAnimation';
    this.battleOptions.style.animationName = 'battleOptionsEntrance';
    this.battlePokemon.style.opacity = '1';

    setTimeout(() => {
      this.battleOptions.style.display = 'block';
      this.roaming.style.display = 'none';
      this.battle.style.display = 'block';
    }, 2000);
    this.chillMusic = stopMusic(this.chillMusic);
    this.battleMusic = startMusic(this.battleMusic);
  }

  initContainer() {
    this.container = document.getElementById('container');
    this.container = initCanvas(this.container);
  }

  initTrees() {
    let treesInit;

    this.treeOne = document.getElementById('tree-1');
    this.treeTwo = document.getElementById('tree-2');
    this.treeThree = document.getElementById('tree-3');
    this.treeFour = document.getElementById('tree-4');
    this.treeFive = document.getElementById('tree-5');
    this.treeSix = document.getElementById('tree-6');
    this.treeSeven = document.getElementById('tree-7');
    this.treeEight = document.getElementById('tree-8');
    this.treeNine = document.getElementById('tree-9');
    this.treeTen = document.getElementById('tree-10');

    treesInit = stageOneTreesSetup(
      this.treeOne, this.treeTwo, this.treeThree, this.treeFour, this.treeFive,
      this.treeSix, this.treeSeven, this.treeEight, this.treeNine, this.treeTen
    );

    this.treeOne = treesInit.treeOneElement;
    this.treeTwo = treesInit.treeTwoElement;
    this.treeThree = treesInit.treeThreeElement;
    this.treeFour = treesInit.treeFourElement;
    this.treeFive = treesInit.treeFiveElement;
    this.treeSix = treesInit.treeSixElement;
    this.treeSeven = treesInit.treeSevenElement;
    this.treeEight = treesInit.treeEightElement;
    this.treeNine = treesInit.treeNineElement;
    this.treeTen = treesInit.treeTenElement;

    this.obstacleX = [...this.obstacleX, ...treesInit.obstacleX];
    this.obstacleY = [...this.obstacleY, ...treesInit.obstacleY];
  }

  initPlayer() {
    this.player = document.getElementById('player');
    this.player = playerSetup(this.player);
  }

  initPokemonOne() {
    this.pokemonOne.style.display = 'block';
    this.pokemonOne.style.backgroundImage = 'url("./assets/pokemons/charmander.gif")';
    this.pokemonOne.style.top = '100px';
    this.pokemonOne.style.left = '0px';
    // this for loop is still a prototype, need dynamic value replacement
    for (let x = 0; x <= 70; x += 10) {
      for (let y = 80; y <= 120; y += 10) {
        this.pokemonX.push(x);
        this.pokemonY.push(y);
        this.pokemon.push('charmander');
      }
    }
  }

  initPokemonTwo() {
    this.pokemonTwo.style.backgroundImage = 'url("./assets/pokemons/squirtle.gif")';
    this.pokemonTwo.style.top = '50px';
    this.pokemonTwo.style.left = '450px';
    // this for loop is still a prototype, need dynamic value replacement
    for (let x = 430; x <= 520; x += 10) {
      for (let y = 50; y <= 80; y += 10) {
        this.pokemonX.push(x);
        this.pokemonY.push(y);
        this.pokemon.push('squirtle');
      }
    }
  }

  goToMenu() {
    this.router.navigate(['/home']);
  }

  escape() {
    this.initBattleEndState();

    this.chillMusic = startMusic(this.chillMusic);
    this.battleMusic = stopMusic(this.battleMusic);

    this.pokemonRespawn();
  }

  // prototype
  pokemonRespawn() {
    this.pokemonDisappear();
    // 10 seconds to respawn
    setTimeout(() => this.initPokemonOne(), 10000);
  }
  // prototype
  pokemonDisappear() {
    this.pokemonOne.style.display = 'none';
    for (let i = 0; i < this.pokemon.length; i++) {
      if (this.pokemon[i] === 'charmander') {
        this.pokemonX[i] = null;
        this.pokemonY[i] = null;
        this.pokemon[i] = null;
      }
    }
    this.pokemonX = this.pokemonX.filter((obj) => obj );
    this.pokemonY = this.pokemonY.filter((obj) => obj );
    this.pokemon = this.pokemon.filter((obj) => obj );
  }

  pokemonCapturedScene() {
    this.pokemonDisappear();
    this.initElementAttackState();
    this.battleMusic = stopMusic(this.battleMusic);
    this.victorySmallMusic = startMusicOnce(this.victorySmallMusic);

    this.battlePokemon.style.animationName = 'pokemonCaptured';
    setTimeout(() => {
      this.battlePokemon.style.opacity = '0';
    }, 2000);
    setTimeout(() => {
      this.victorySmallMusic = stopMusic(this.victorySmallMusic);
      this.chillMusic = startMusic(this.chillMusic);
      this.initBattleEndState();
    }, 5000);
  }

  initPokemonsElementSelector() {
    this.pokemonOne = document.getElementById('pokemon-1');
    this.pokemonTwo = document.getElementById('pokemon-2');
    this.pokemonThree = document.getElementById('pokemon-3');
    this.pokemonFour = document.getElementById('pokemon-4');
    this.pokemonFive = document.getElementById('pokemon-5');
  }

  initMusicsElementSelector() {
    this.chillMusic = document.getElementById('chill-music');
    this.battleMusic = document.getElementById('battle-music');
    this.attackMusic = document.getElementById('attack-music');
    this.victorySmallMusic = document.getElementById('victory-small-music');
  }

  initBattleElementSelector() {
    this.battlePokemon = document.getElementById('battle-pokemon');
    this.pokemonDetail = document.getElementById('pokemon-detail');
    this.roaming = document.getElementById('roaming');
    this.battle = document.getElementById('battle');
    this.foeHealth = document.getElementById('foe-health');
    this.battleOptions = document.getElementById('battle-options');
    this.questionModal = document.getElementById('question-modal');
    this.question = document.getElementById('question');

    this.attackDivision = document.getElementById('division');
    this.attackSubtraction = document.getElementById('subtraction');
    this.attackMultiplication = document.getElementById('multiplication');
    this.attackAddition = document.getElementById('addition');

    this.foeHealth.style.width = '100px';
  }

  initBattleEndState() {
    this.isBattling = false;

    this.battleOptions.style.animationName = '';
    this.battleOptions.style.display = 'none';
    this.roaming.style.display = 'block';
    this.battle.style.display = 'none';
  }

  initElementAttackState() {
    this.attackMultiplication.style.pointerEvents = 'none';
    this.attackDivision.style.pointerEvents = 'none';
    this.attackSubtraction.style.pointerEvents = 'none';
    this.attackAddition.style.pointerEvents = 'none';
    this.attackMultiplication.style.opacity = '0.2';
    this.attackDivision.style.opacity = '0.2';
    this.attackSubtraction.style.opacity = '0.2';
    this.attackAddition.style.opacity = '0.2';
    this.questionModal.style.display = 'block';
    this.pokemonDetail.style.opacity = '0.2';
  }

  initAttackSuccessScene() {
    this.attackMultiplication.style.pointerEvents = 'auto';
    this.attackDivision.style.pointerEvents = 'auto';
    this.attackSubtraction.style.pointerEvents = 'auto';
    this.attackAddition.style.pointerEvents = 'auto';
    this.attackMultiplication.style.opacity = '1';
    this.attackDivision.style.opacity = '1';
    this.attackSubtraction.style.opacity = '1';
    this.attackAddition.style.opacity = '1';
    this.questionModal.style.display = 'none';
    this.pokemonDetail.style.opacity = '1';
  }
}
