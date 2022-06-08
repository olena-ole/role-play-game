import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from './utils.js';

function Character(data) {
    Object.assign(this, data);
    this.maxHealth = this.health;
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

    this.getHealthBarHtml = function() {
        const percent = getPercentage(this.health, this.maxHealth);
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent <= 25 ? 'danger' : ''} " 
                        style="width: ${percent}%;">
                    </div>
                </div>`;
    }

    this.renderCharacter = function() {
        const {name, avatarSrc, health, diceCount, diceArray} = this;
        const healthBar = this.getHealthBarHtml();

        return `<div class="character-card">
                    <h4 class="name">${name}</h4>
                    <img class="avatar" src="${avatarSrc}"/>
                    <p class="health">health: <b> ${health} </b></p>
                    ${healthBar}
                    <div class="dice-container">
                        ${diceArray}
                    </div>
                </div>`;
    };
};

export default Character;