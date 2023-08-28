function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(() =>
        Math.floor(Math.random() * 6) + 1
    )
}

function getPercentage(remainingHealth, maximumHealth) {
    return remainingHealth / maximumHealth * 100
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount)
        .fill(`<div class="placeholder-dice"></div>`)
        .join("")
}

export { getDiceRollArray, getDicePlaceholderHtml, getPercentage }
