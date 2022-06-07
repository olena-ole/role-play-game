import {getDiceRollArray, getDicePlaceholderHtml} from './utils.js';

function Character(data) {
    Object.assign(this, data);
    this.diceArray = getDicePlaceholderHtml(this.diceCount);

    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map(score => `<div class="dice">${score}</div>`).join('');
    };

    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, current) => total + current);
        this.health = this.health - totalAttackScore;
        if (this.health <= 0) {
            this.health = 0;
            this.dead = true;
        }
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
    };
};

export default Character;