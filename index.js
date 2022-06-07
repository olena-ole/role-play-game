import characterData from './data.js';
import Character from './Character.js';

function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    render();
}

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

document.getElementById('attack-button').addEventListener('click', attack);

function render() {
    document.getElementById('hero').innerHTML = wizard.renderCharacter();
    document.getElementById('monster').innerHTML = orc.renderCharacter();
};

render();
