'use strict';

/*
CHALLENGE
1. Convert our consts into two objects called 
"monster" and "hero".
2. Update the renderCharacter() function so that it accepts 
a single object "data" as its parameter instead of five string/numbers, 
reducing the number of arguments to pass in from five to one.
3. Update the template now each variable is coming from "data".
4. Update the function call.
*/

const hero = {
    id: 'hero',
    name: 'Wizard',
    avatarSrc: './images/wizard.png',
    health: 60,
    diceRoll: 6,
}

const monster = {
    id: 'monster',
    name: 'Orc',
    avatarSrc: './images/orc.png',
    health: 10,
    diceRoll: 4,
};


function renderCharacter({id, name, avatarSrc, health, diceRoll}) {
    document.getElementById(id).innerHTML = `
        <div class="character-card">
            <h4 class="name">${name}</h4>
            <img class="avatar" src="${avatarSrc}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container"><div class="dice">${diceRoll}</div></div>
        </div>   
    `
}

renderCharacter(hero);
renderCharacter(monster);