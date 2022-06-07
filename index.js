'use strict';

function getDiceRollArray(diceCount) {
    return new Array(diceCount)
        .fill(0)
        .map( () => Math.floor(Math.random() * 6) + 1);
};

const characterData = {
    hero: {
        id: 'hero',
        name: 'Wizard',
        avatarSrc: './images/wizard.png',
        health: 60,
        diceCount: 3,
    },
    monster: {
        id: 'monster',
        name: 'Orc',
        avatarSrc: './images/orc.png',
        health: 10,
        diceCount: 1,
    }
};

function Character(data) {
    Object.assign(this, data);

    this.getDiceHtml = function(diceCount) {
        return getDiceRollArray(diceCount)
                .map(num => `<div class="dice">${num}</div>`)
                .join('');
    };

    this.renderCharacter = function() {
        const { id, name, avatarSrc, health, diceCount} = this;
        const diceHtml = this.getDiceHtml(diceCount);

        return `
            <div class="character-card">
                <h4 class="name">${name}</h4>
                <img class="avatar" src="${avatarSrc}"/>
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container">${diceHtml}</div>
            </div>   
        `;
    }
}

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

function render() {
    document.getElementById(wizard.id).innerHTML = wizard.renderCharacter();
    document.getElementById(orc.id).innerHTML = orc.renderCharacter();
};

render();
