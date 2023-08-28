import monstersData from './monsters.js'
import herosData from './heros.js'
import Character from './Character.js'

const attackButtonEl = document.getElementById('attack-button')

const monstersArray = Object.keys(monstersData)
const hero = new Character(herosData.wizard)
let monster = getNewMonster()

render()

attackButtonEl.addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = hero.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

function getNewMonster() {
    const nextMonsterData = monstersData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function attack() {
    hero.setDiceHtml()
    monster.setDiceHtml()
    hero.takeDamage(monster.currentDiceScore)
    monster.takeDamage(hero.currentDiceScore)

    render()

    if (hero.dead || monster.dead) {
        attackButtonEl.disabled = true
        setTimeout(() => {
            if (hero.dead || !monstersArray.length) {
                endGame()
            } else {
                attackButtonEl.disabled = false
                monster = getNewMonster()
                render()
            }
        }, 1500)
    }
}

function endGame() {
    const endMessage = hero.health ? `The ${hero.name} Wins` :
        monster.health ? `The ${monster.name} is Victorious` :
            "No victors - both are dead"

    const endEmoji = hero.health ? "🔮" : "☠️"

    document.getElementById("container").innerHTML = `
        <div class="end-game">
            <h2>Game Over</h2> 
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>`
}
