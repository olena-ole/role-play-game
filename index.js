'use strict';

const hero = {
    id: 'hero',
    name: 'Wizard',
    avatarSrc: './images/wizard.png',
    health: 60,
    diceCount: 3,
}

const monster = {
    id: 'monster',
    name: 'Orc',
    avatarSrc: './images/orc.png',
    health: 10,
    diceCount: 1,
};


function getDiceRollArray(diceCount) {
    const newDiceRollArr = [];
    for (let i = 0; i < diceCount; i++) {
        newDiceRollArr.push(Math.floor(Math.random() * 6) + 1);
    }
    return newDiceRollArr;
}

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount)
            .map(num => `<div class="dice">${num}</div>`)
            .join('');
}

function renderCharacter({ id, name, avatarSrc, health, diceCount }) {

    const diceHtml = getDiceHtml(diceCount);

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