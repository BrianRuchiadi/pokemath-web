export const createPokemons = (
    pokemonOneElement,
    pokemonTwoElement,
    pokemonThreeElement,
    pokemonFourElement,
    pokemonFiveElement,
    pokemonOne,
    pokemonTwo,
    pokemonThree,
    pokemonFour,
    pokemonFive,
    pokemonX,
    pokemonY,
    pokemons
) => {
    let display = 'block';

    pokemonOneElement.style.display = display;
    pokemonTwoElement.style.display = display;
    pokemonThreeElement.style.display = display;
    pokemonFourElement.style.display = display;
    pokemonFiveElement.style.display = display;

    pokemonOneElement.style.backgroundImage = 'url("./assets/' + pokemonOne.sprite + '")';
    pokemonTwoElement.style.backgroundImage = 'url("./assets/' + pokemonTwo.sprite + '")';
    pokemonThreeElement.style.backgroundImage = 'url("./assets/' + pokemonThree.sprite + '")';
    pokemonFourElement.style.backgroundImage = 'url("./assets/' + pokemonFour.sprite + '")';
    pokemonFiveElement.style.backgroundImage = 'url("./assets/' + pokemonFive.sprite + '")';

    // Start positioning X, Y
    pokemonOneElement.style.left = '0px';    
    pokemonOneElement.style.top = '200px';

    pokemonTwoElement.style.left = '450px';
    pokemonTwoElement.style.top = '50px';   
    
    pokemonThreeElement.style.left = '400px';
    pokemonThreeElement.style.top = '50px';    

    pokemonFourElement.style.left = '250px';
    pokemonFourElement.style.top = '250px';    

    pokemonFiveElement.style.left = '150px';
    pokemonFiveElement.style.top = '350px';    
    // End positioning X, Y

    let pokemonOneXStart = +pokemonOneElement.style.left.replace('px','') - 20;
    let pokemonOneXEnd = +pokemonOneElement.style.left.replace('px','') + 20;
    let pokemonOneYStart = +pokemonOneElement.style.top.replace('px','') - 20;
    let pokemonOneYEnd = +pokemonOneElement.style.top.replace('px','') + 20; 
    let pokemonTwoXStart = +pokemonTwoElement.style.left.replace('px','') - 20;
    let pokemonTwoXEnd = +pokemonTwoElement.style.left.replace('px','') + 20;
    let pokemonTwoYStart = +pokemonTwoElement.style.top.replace('px','') - 20;
    let pokemonTwoYEnd = +pokemonTwoElement.style.top.replace('px','') + 20;
    let pokemonThreeXStart = +pokemonThreeElement.style.left.replace('px','') - 20;
    let pokemonThreeXEnd = +pokemonThreeElement.style.left.replace('px','') + 20;
    let pokemonThreeYStart = +pokemonThreeElement.style.top.replace('px','') - 20;
    let pokemonThreeYEnd = +pokemonThreeElement.style.top.replace('px','') + 20;
    let pokemonFourXStart = +pokemonFourElement.style.left.replace('px','') - 20;
    let pokemonFourXEnd = +pokemonFourElement.style.left.replace('px','') + 20;
    let pokemonFourYStart = +pokemonFourElement.style.top.replace('px','') - 20;
    let pokemonFourYEnd = +pokemonFourElement.style.top.replace('px','') + 20;
    let pokemonFiveXStart = +pokemonFiveElement.style.left.replace('px','') - 20;
    let pokemonFiveXEnd = +pokemonFiveElement.style.left.replace('px','') + 20;
    let pokemonFiveYStart = +pokemonFiveElement.style.top.replace('px','') - 20;
    let pokemonFiveYEnd = +pokemonFiveElement.style.top.replace('px','') + 20;

    for (let x = pokemonOneXStart; x <= pokemonOneXEnd; x += 10) {
        for (let y = pokemonOneYStart; y <= pokemonOneYEnd; y += 10) {
            pokemonX.push(x);
            pokemonY.push(y);
            pokemons.push(pokemonOne.id);
        }
    }

    for (let x = pokemonTwoXStart; x <= pokemonTwoXEnd; x += 10) {
        for (let y = pokemonTwoYStart; y <= pokemonTwoYEnd; y += 10) {
            pokemonX.push(x);
            pokemonY.push(y);
            pokemons.push(pokemonTwo.id);
        }
    }

    for (let x = pokemonThreeXStart; x <= pokemonThreeXEnd; x += 10) {
        for (let y = pokemonThreeYStart; y <= pokemonThreeYEnd; y += 10) {
            pokemonX.push(x);
            pokemonY.push(y);
            pokemons.push(pokemonThree.id);
        }
    }

    for (let x = pokemonFourXStart; x <= pokemonFourXEnd; x += 10) {
        for (let y = pokemonFourYStart; y <= pokemonFourYEnd; y += 10) {
            pokemonX.push(x);
            pokemonY.push(y);
            pokemons.push(pokemonFour.id);
        }
    }

    for (let x = pokemonFiveXStart; x <= pokemonFiveXEnd; x += 10) {
        for (let y = pokemonFiveYStart; y <= pokemonFiveYEnd; y += 10) {
            pokemonX.push(x);
            pokemonY.push(y);
            pokemons.push(pokemonFive.id);
        }
    }

    pokemonOne.health = pokemonOne.health_point;
    pokemonTwo.health = pokemonTwo.health_point;
    pokemonThree.health = pokemonThree.health_point;
    pokemonFour.health = pokemonFour.health_point;
    pokemonFive.health = pokemonFive.health_point;
}

export const respawnPokemon = (
    element, 
    pokemon,
    pokemonX,
    pokemonY,
    pokemons
) => {
    element.style.display = 'block';
    element.style.backgroundImage = 'url("./assets/' + pokemon.sprite + '")';    

    let pokemonXStart = +element.style.left.replace('px','') - 20;
    let pokemonXEnd = +element.style.left.replace('px','') + 20;
    let pokemonYStart = +element.style.top.replace('px','') - 20;
    let pokemonYEnd = +element.style.top.replace('px','') + 20;
    
    for (let x = pokemonXStart; x <= pokemonXEnd; x += 10) {
        for (let y = pokemonYStart; y <= pokemonYEnd; y += 10) {
            pokemonX.push(x);
            pokemonY.push(y);
            pokemons.push(pokemon.id);
        }
    }
} 

export const removePokemon = (
    element,
    pokemon,
    pokemonX,
    pokemonY,
    pokemons
) => {
    element.style.display = 'none';

    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i] === pokemon.id) {
          pokemonX[i] = null;
          pokemonY[i] = null;
          pokemons[i] = null;
        }
    }
}