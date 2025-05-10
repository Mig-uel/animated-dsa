/**
 * Valid Anagram
 *
 * Given two strings, s and t, return true if t is an anagram of s,
 * and false otherwise.
 *
 * An anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, using all the original letters exactly once
 */
function valid_anagram(s, t) {
  if (s.length !== t.length) return false

  const map = {}

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    map[char] ? ++map[char] : (map[char] = 1)
  }

  // loop second string
  for (let i = 0; i < t.length; i++) {
    const char = t[i]

    // check if a char is not in the map or
    // if the char is already at 0
    if (!(char in map) || map[char] === 0) return false

    map[char]--
  }

  return true
}

console.log(valid_anagram('hello', 'hello'))
