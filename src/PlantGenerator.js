var config = require('./config');

function getRandom (list) {
    return list[Math.floor((Math.random()*list.length))];
}

function getFirstWord() {
    return getRandomBoolean() ? getRandom(config.prefix_first_word) + getRandom(config.suffix_first_word) :
        getRandom(config.full_first_word);
}

function getRandomBoolean() {
    return Math.random() < 0.5;
}

function getSecondWord(firstWord) {
    function addSuffix(word) {
        return word.endsWith("ית");
    }
    if (getRandomBoolean()) {
        return getRandom(config.second_word);
    }
    let word = getRandom(config.prefix_second_word);
    if (addSuffix(firstWord)) {
        word += "ת";
    }
    return word;
}

export function generatePlant() {
    let firstWord = getFirstWord();
    let secondWord = getSecondWord(firstWord);
    return firstWord + " " + secondWord;
}

