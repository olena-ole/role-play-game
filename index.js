import characterData from './data.js';
import Character from './Character.js';

function attack() {
    wizard.getDiceHtml();
    orc.getDiceHtml();
    wizard.takeDamage(orc.currentDiceScore);
    orc.takeDamage(wizard.currentDiceScore);
    render();
    if (wizard.dead || orc.dead) {
        endGame();
    }
};

function endGame() {
    const endMessage = wizard.dead && orc.dead ? 'No victors - all creatures are dead' 
        : wizard.dead ? 'The Orc is Victorious' 
        : 'The Wizard Wins';
    
    const endEmoji = !wizard.dead ? "🔮" : "☠️";

    document.querySelector('body').innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>
    `;
};

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

document.getElementById('attack-button').addEventListener('click', attack);

function render() {
    document.getElementById('hero').innerHTML = wizard.renderCharacter();
    document.getElementById('monster').innerHTML = orc.renderCharacter();
};

render();