/**
 * Valid Palindrome
 *
 * A phrase is a palindrome if, after converting all uppercase letters
 * into lowercase and removing all non-alphanumeric characters,
 * it reads the same forward and backward
 *
 * Given a string s, return true if it is a palindrome, or false
 * otherwise
 */

function clean_string(str) {
  let chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let cleaned_string = ''

  for (let i = 0; i < str.length; i++) {
    let c = str[i]

    if (chars.indexOf(c) !== -1) cleaned_string += c
  }

  return cleaned_string
}

function valid_palindrome(s) {
  s = clean_string(s.toLowerCase().replaceAll(' ', ''))

  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (s[left] !== s[right]) return false

    left++
    right--
  }

  return true
}

console.log(valid_palindrome('A man, a plan, a canal: Panama'))
