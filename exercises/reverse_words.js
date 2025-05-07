/**
 * Reverse Words in a String
 *
 * Given an input string, reverse the order of the words without
 * reversing the characters in each word.
 */

function reverse_words(str) {
  return str.trim().split(' ').reverse().join(' ')
}

function reverse_words_manual(str) {
  let result = ''
  let current_word = ''

  for (let i = 0; i < str.length; i++) {
    const current_char = str[i]

    if (current_char !== ' ') {
      current_word += current_char
    } else {
      result = current_word + ' ' + result
      current_word = ''
    }
  }

  if (current_word) result = current_word + ' ' + result

  return result.trim()
}

console.log(reverse_words_manual('Hello World'))
