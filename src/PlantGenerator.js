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
    let totalSecondWords = config.second_word.length + config.prefix_second_word_hey.length + config.prefix_second_word_taf.length;
    let rand = Math.random();
    let firstOption = config.second_word.length / totalSecondWords;
    let secondOption = config.prefix_second_word_taf.length / totalSecondWords;
    if (rand <= firstOption) {
        return getRandom(config.second_word);
    } else if (rand <= firstOption + secondOption) {
        let word = getRandom(config.prefix_second_word_taf)
        return addSuffix(firstWord) ? word + "ת" : word;
    } else {
        let word = getRandom(config.prefix_second_word_hey)
        return addSuffix(firstWord) ? word + "ה" : word;
    }
}

export function generatePlant() {
    let firstWord = getFirstWord();
    let secondWord = getSecondWord(firstWord);
    return firstWord + " " + secondWord;
}

