import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js';

function Character(data) {
    Object.assign(this, data);
    this.diceArray = getDicePlaceholderHtml(this.diceCount);

    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map(score => `<div class="dice">${score}</div>`).join('');
    };

    this.renderCharacter = function() {
        const {name, avatarSrc, health, diceCount, diceArray} = this;

        return `
            <div class="character-card">
                <h4 class="name">${name}</h4>
                <img class="avatar" src="${avatarSrc}"/>
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container">${diceArray}</div>
            </div>   
        `;
    }
}

export default Character;