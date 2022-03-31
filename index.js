const Discord = require('discord.js')

/**
 * @param {String[]} txt
 * 
 */

function emojify(txt) {
    if(!txt){
        throw new Error('Invalid String.')
    }

    const specialCodes = {
        '0': ':zero:',
        '1': ':one:',
        '2': ':two:',
        '3': ':three:',
        '4': ':four:',
        '5': ':five:',
        '6': ':six:',
        '7': ':seven:',
        '8': ':eight:',
        '9': ':nine:',
        '#': ':hash:',
        '*': ':asterisk:',
        '?': ':grey_question:',
        '!': ':grey_exclamation:',
        ' ': '   '
      }

    let text = txt.slice(txt.indexOf(args[0]), txt.length);

    const emojified = text.toString().toLowerCase().split('').map(letter => {
        if (/[a-z]/g.test(letter)) {
          return `:regional_indicator_${letter}: `
        } else if (specialCodes[letter]) {
          return `${specialCodes[letter]} `
        }
        return letter
    }).join('').replace(/,/g, '     ')

    return emojified
}

module.exports = emojify