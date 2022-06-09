import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js';

class Character {
    constructor(data) {
        Object.assign(this, data);
        this.maxHealth = this.health;
        this.diceArrayHtml = getDicePlaceholderHtml(this.diceCount);
    }

    setDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArrayHtml = this.currentDiceScore.map(score => `<div class="dice">${score}</div>`).join('');
    };

    takeDamage(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce((total, current) => total + current);
        this.health = this.health - totalAttackScore;
        if (this.health <= 0) {
            this.health = 0;
            this.dead = true;
        }
    };

    getHealthBarHtml() {
        const percent = getPercentage(this.health, this.maxHealth);
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent <= 25 ? 'danger' : ''} " 
                        style="width: ${percent}%;">
                    </div>
                </div>`;
    }

    renderCharacter() {
        const {name, avatarSrc, health, diceArrayHtml} = this;
        const healthBar = this.getHealthBarHtml();

        return `<div class="character-card">
                    <h4 class="name">${name}</h4>
                    <img class="avatar" src="${avatarSrc}"/>
                    <p class="health">health: <b> ${health} </b></p>
                    ${healthBar}
                    <div class="dice-container">
                        ${diceArrayHtml}
                    </div>
                </div>`;
    };
};

export default Character;