import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { KEY_CODE} from './../../../enums/keycode';

import { GameService } from './../../../services/game.service';
import { UserService } from './../../../services/user.service';
// classes
import { UserGameComponent } from './../../../classes/user-game-component';
import { Pokemon } from './../../../classes/pokemon';
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
// pokemon
import { createPokemons } from './../../../functions/pokemons/pokemons';
import { respawnPokemon } from './../../../functions/pokemons/pokemons';
import { removePokemon } from './../../../functions/pokemons/pokemons';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['../../../styles/pages/_play.scss']
})
export class PlayComponent implements OnInit {
  userGameComponent: UserGameComponent;
  stage: number;
  obstacleX: Array<number> = [];
  obstacleY: Array<number> = [];
  pokemonX: Array<number> = [];
  pokemonY: Array<number> = [];
  pokemon: Array<any> = [];

  pokemonEncountered: any = {
    id: null,
    name: null,
    sprite: null,
    image: null,
    health_point: null
  };
  currentQuestion: any;
  currentQuestionType: any;
  pokemonsGenerated: Array<Pokemon> = [];

  // elements
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
  pokemonOne: any;
  pokemonTwo: any;
  pokemonThree: any;
  pokemonFour: any;
  pokemonFive: any;
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
  currentHealth: any;
  maxHealth: any;

  // states
  isBattling: Boolean = false;

  // musics
  chillMusic: any;
  battleMusic: any;
  attackMusic: any;
  victorySmallMusic: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private userService: UserService
  ) {}

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
    this.stage = (this.route.snapshot.params.stageId) ? +this.route.snapshot.params.stageId : 1;

    this.initGameComponent();
  }

  movePlayer(direction) {
    if (!direction) { return; }

    switch (direction) {
      case 'down':
        this.player = animateMovement(this.player, 'down', this.userGameComponent.avatar_id);
        setTimeout(() => {
          this.updatePlayerPosition('down');
        }, 150);
        break;
      case 'left':
        this.player = animateMovement(this.player, 'left', this.userGameComponent.avatar_id);
        setTimeout(() => {
          this.updatePlayerPosition('left');
        }, 150);
        break;
      case 'up':
        this.player = animateMovement(this.player, 'up', this.userGameComponent.avatar_id);
        setTimeout(() => {
          this.updatePlayerPosition('up');
        }, 150);
        break;
      case 'right':
        this.player = animateMovement(this.player, 'right', this.userGameComponent.avatar_id);
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
    if (!this.currentAnswer || (eval(this.currentQuestion) !== +this.currentAnswer)) {
      this.currentAnswer = '';
      this.attack(this.currentQuestionType);
      return;
    }

    this.currentAnswer = '';

    switch (this.currentQuestionType) {
      case 'multiplication':
        this.minusPokemonHealth(this.userGameComponent.power_multiplication);
        break;
      case 'division':
        this.minusPokemonHealth(this.userGameComponent.power_division);
        break;
      case 'addition':
        this.minusPokemonHealth(this.userGameComponent.power_addition);
        break;
      case 'subtraction':
        this.minusPokemonHealth(this.userGameComponent.power_subtraction);
        break;
    }
  }

  minusPokemonHealth(damage) {
    let displayPx;

    this.attackMusic = startMusicOnce(this.attackMusic);
    this.pokemonEncountered.health -= damage;
    displayPx = (this.pokemonEncountered.health / this.pokemonEncountered.health_point) * 100;

    if (displayPx <= 0) {
      displayPx = 0;
      this.pokemonDefeatedScene();
    }
    this.initAttackSuccessScene();
    this.foeHealth.style.width = displayPx + 'px';
    this.currentHealth.innerHTML = (this.pokemonEncountered.health > 0) ? this.pokemonEncountered.health : 0;
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
        this.pokemonBattleScene(this.pokemon[i]);
        return true;
      }
    }

    return false;
  }

  pokemonBattleScene(pokemon) {
    this.isBattling = true;
    this.pokemonEncountered = this.pokemonsGenerated.find((poke) => poke.id === pokemon);

    this.initBattleElements();

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

    switch (this.stage) {
      case 1:
        stageOneTreesSetup(
          this.treeOne, this.treeTwo, this.treeThree, this.treeFour, this.treeFive,
          this.treeSix, this.treeSeven, this.treeEight, this.treeNine, this.treeTen,
          this.obstacleX, this.obstacleY
        );
        break;
      case 2:
        stageTwoTreesSetup(
          this.treeOne, this.treeTwo, this.treeThree, this.treeFour, this.treeFive,
          this.treeSix, this.treeSeven, this.treeEight, this.treeNine, this.treeTen,
          this.obstacleX, this.obstacleY
        );
        break;
      case 3:
        stageThreeTreesSetup(
          this.treeOne, this.treeTwo, this.treeThree, this.treeFour, this.treeFive,
          this.treeSix, this.treeSeven, this.treeEight, this.treeNine, this.treeTen,
          this.obstacleX, this.obstacleY
        );
        break;
      case 4:
        stageFourTreesSetup(
          this.treeOne, this.treeTwo, this.treeThree, this.treeFour, this.treeFive,
          this.treeSix, this.treeSeven, this.treeEight, this.treeNine, this.treeTen,
          this.obstacleX, this.obstacleY
        );
        break;
      case 5:
        stageFiveTreesSetup(
          this.treeOne, this.treeTwo, this.treeThree, this.treeFour, this.treeFive,
          this.treeSix, this.treeSeven, this.treeEight, this.treeNine, this.treeTen,
          this.obstacleX, this.obstacleY
        );
        break;
      case 6:
        stageSixTreesSetup(
          this.treeOne, this.treeTwo, this.treeThree, this.treeFour, this.treeFive,
          this.treeSix, this.treeSeven, this.treeEight, this.treeNine, this.treeTen,
          this.obstacleX, this.obstacleY
        );
        break;
      case 7:
        stageSevenTreesSetup(
          this.treeOne, this.treeTwo, this.treeThree, this.treeFour, this.treeFive,
          this.treeSix, this.treeSeven, this.treeEight, this.treeNine, this.treeTen,
          this.obstacleX, this.obstacleY
        );
        break;
    }
  }

  initPlayer() {
    this.player = document.getElementById('player');
    playerSetup(this.player, this.userGameComponent.avatar_id);
  }

  initPokemons() {
    return this.gameService.getStagePokemons(this.stage)
      .subscribe(response => {
        this.pokemonsGenerated = response;

        createPokemons(
          this.pokemonOne,
          this.pokemonTwo,
          this.pokemonThree,
          this.pokemonFour,
          this.pokemonFive,
          this.pokemonsGenerated[0],
          this.pokemonsGenerated[1],
          this.pokemonsGenerated[2],
          this.pokemonsGenerated[3],
          this.pokemonsGenerated[4],
          this.pokemonX,
          this.pokemonY,
          this.pokemon
        );
      });
  }

  initGameComponent() {
    return this.userService.getUserGameComponent()
      .subscribe(response => {
        this.userGameComponent = response[0];

        if (this.userGameComponent.current_stage < this.stage) {
          this.router.navigate(['/']);
        }
        this.initPlayer();
        this.initPokemonsElementSelector();
        this.initContainer();
        this.initTrees();
        this.initPokemons();
        this.initMusicsElementSelector();
        this.initBattleElementSelector();

        console.log(['this.userGameComponent', this.userGameComponent]);
      });
  }

  initBattleElements() {
    const displayPx = (this.pokemonEncountered.health / this.pokemonEncountered.health_point) * 100;
    this.foeHealth.style.width = displayPx + 'px';
    this.currentHealth.innerHTML = this.pokemonEncountered.health;
    this.maxHealth.innerHTML = '/ ' + this.pokemonEncountered.health_point;

    this.battlePokemon.style.animationName = 'pokemonEntrance';
    this.roaming.style.animationName = 'stageDisappearAnimation';
    this.battleOptions.style.animationName = 'battleOptionsEntrance';
    this.battlePokemon.style.opacity = '1';
  }

  goToMenu() {
    this.router.navigate(['/']);
  }

  escape() {
    this.initBattleEndState();

    this.chillMusic = startMusic(this.chillMusic);
    this.battleMusic = stopMusic(this.battleMusic);

    this.pokemonRespawn();
  }

  pokemonRespawn() {
    const pokemonToBeRespawned = JSON.parse(JSON.stringify(this.pokemonEncountered));
    this.pokemonDisappear();

    setTimeout(() => {
      if (pokemonToBeRespawned.id === this.pokemonsGenerated[0].id) {
        respawnPokemon(
          this.pokemonOne,
          pokemonToBeRespawned,
          this.pokemonX,
          this.pokemonY,
          this.pokemon
        );
      } else if (pokemonToBeRespawned.id === this.pokemonsGenerated[1].id) {
        respawnPokemon(
          this.pokemonTwo,
          pokemonToBeRespawned,
          this.pokemonX,
          this.pokemonY,
          this.pokemon
        );
      } else if (pokemonToBeRespawned.id === this.pokemonsGenerated[2].id) {
        respawnPokemon(
          this.pokemonThree,
          pokemonToBeRespawned,
          this.pokemonX,
          this.pokemonY,
          this.pokemon
        );
      } else if (pokemonToBeRespawned.id === this.pokemonsGenerated[3].id) {
        respawnPokemon(
          this.pokemonFour,
          pokemonToBeRespawned,
          this.pokemonX,
          this.pokemonY,
          this.pokemon
        );
      } else if (pokemonToBeRespawned.id === this.pokemonsGenerated[4].id) {
        respawnPokemon(
          this.pokemonFive,
          pokemonToBeRespawned,
          this.pokemonX,
          this.pokemonY,
          this.pokemon
        );
      }
    }, 3000);
  }

  pokemonDisappear() {
    if (this.pokemonEncountered.id === this.pokemonsGenerated[0].id) {
      removePokemon(
        this.pokemonOne,
        this.pokemonEncountered,
        this.pokemonX,
        this.pokemonY,
        this.pokemon
      );
    } else if (this.pokemonEncountered.id === this.pokemonsGenerated[1].id) {
      removePokemon(
        this.pokemonTwo,
        this.pokemonEncountered,
        this.pokemonX,
        this.pokemonY,
        this.pokemon
      );
    } else if (this.pokemonEncountered.id === this.pokemonsGenerated[2].id) {
      removePokemon(
        this.pokemonThree,
        this.pokemonEncountered,
        this.pokemonX,
        this.pokemonY,
        this.pokemon
      );
    } else if (this.pokemonEncountered.id === this.pokemonsGenerated[3].id) {
      removePokemon(
        this.pokemonFour,
        this.pokemonEncountered,
        this.pokemonX,
        this.pokemonY,
        this.pokemon
      );
    } else if (this.pokemonEncountered.id === this.pokemonsGenerated[4].id) {
      removePokemon(
        this.pokemonFive,
        this.pokemonEncountered,
        this.pokemonX,
        this.pokemonY,
        this.pokemon
      );
    }
    this.pokemonX = this.pokemonX.filter((obj) => obj );
    this.pokemonY = this.pokemonY.filter((obj) => obj );
    this.pokemon = this.pokemon.filter((obj) => obj );
  }

  pokemonDefeatedScene() {
    this.pokemonDisappear();
    this.initElementAttackState();
    this.battleMusic = stopMusic(this.battleMusic);
    this.victorySmallMusic = startMusicOnce(this.victorySmallMusic);

    this.gameService.updateGameLog(this.pokemonEncountered.id).subscribe(
      (response) => {
        this.userGameComponent = response[0];
      }
    );

    if (!this.pokemon.length) {
      console.log(['battle end!']);
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
    }

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

    this.chillMusic = startMusic(this.chillMusic);
  }

  initBattleElementSelector() {
    this.battlePokemon = document.getElementById('battle-pokemon');
    this.pokemonDetail = document.getElementById('pokemon-detail');
    this.roaming = document.getElementById('roaming');
    this.battle = document.getElementById('battle');
    this.foeHealth = document.getElementById('foe-health');
    this.currentHealth = document.getElementById('current-health');
    this.maxHealth = document.getElementById('max-health');
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
