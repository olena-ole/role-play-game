'use strict';

const hero = {
    id: 'hero',
    name: 'Wizard',
    avatarSrc: './images/wizard.png',
    health: 60,
    diceRoll: [3, 1, 4],
}

const monster = {
    id: 'monster',
    name: 'Orc',
    avatarSrc: './images/orc.png',
    health: 10,
    diceRoll: [2],
};


function renderCharacter({ id, name, avatarSrc, health, diceRoll }) {

    const diceHtml = diceRoll.map(dice => `<div class="dice">${dice}</div>`).join('');

    document.getElementById(id).innerHTML = `
        <div class="character-card">
            <h4 class="name">${name}</h4>
            <img class="avatar" src="${avatarSrc}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">${diceHtml}</div>
        </div>   
    `
}

renderCharacter(hero);
renderCharacter(monster);