import characterData from './data.js';
import Character from './Character.js';

let monstersArray = ["orc", "demon", "goblin"];

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()];
    return nextMonsterData ? new Character(nextMonsterData) : {};
}

function attack() {
    wizard.getDiceHtml();
    monster.getDiceHtml();
    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);
    render();
    
    if (wizard.dead) {
        endGame();
    } else if (monster.dead) {
        if (monstersArray.length > 0) {
            monster = getNewMonster();
            render()
        } else {
            endGame();
        }
    }
};

function endGame() {
    const endMessage = wizard.dead && monster.dead ? 'No victors - all creatures are dead' 
        : wizard.dead ? `The ${monster.name} is Victorious` 
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
let monster = getNewMonster();

document.getElementById('attack-button').addEventListener('click', attack);

function render() {
    document.getElementById('hero').innerHTML = wizard.renderCharacter();
    document.getElementById('monster').innerHTML = monster.renderCharacter();
};

render();