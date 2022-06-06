'use strict';

function getDiceRollArray(diceCount) {
    return new Array(diceCount)
        .fill(0)
        .map( () => Math.floor(Math.random() * 6) + 1);
};

function getDiceHtml(diceCount) {
    return getDiceRollArray(diceCount)
            .map(num => `<div class="dice">${num}</div>`)
            .join('');
};

const hero = {
    id: 'hero',
    name: 'Wizard',
    avatarSrc: './images/wizard.png',
    health: 60,
    diceCount: 3,
};

const monster = {
    id: 'monster',
    name: 'Orc',
    avatarSrc: './images/orc.png',
    health: 10,
    diceCount: 1,
};

function Character(data) {
    this.id = data.id;
    this.name = data.name;
    this.avatarSrc = data.avatarSrc;
    this.health = data.health;
    this.diceCount = data.diceCount;

    this.renderCharacter = function() {
        const { id, name, avatarSrc, health, diceCount} = this;
        const diceHtml = getDiceHtml(diceCount);

        document.getElementById(id).innerHTML = `
            <div class="character-card">
                <h4 class="name">${name}</h4>
                <img class="avatar" src="${avatarSrc}"/>
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container">${diceHtml}</div>
            </div>   
        `;
    }
}

const wizard = new Character(hero);
const orc = new Character(monster);

wizard.renderCharacter();
orc.renderCharacter();
