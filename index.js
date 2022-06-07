import characterData from './data.js';
import Character from './Character.js';

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);

function render() {
    document.getElementById('hero').innerHTML = wizard.renderCharacter();
    document.getElementById('monster').innerHTML = orc.renderCharacter();
};

render();
