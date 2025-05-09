function lengthOfLongestSubstring(s) {
  if (!s.length) return 0

  let max = 0
  let map = new Set()
  let first = 0
  let second = 0

  while (second < s.length) {
    const current_char = s[second]

    if (!map.has(current_char)) {
      map.add(current_char)

      second++
      max = Math.max(max, map.size)
    } else {
      map.delete(s[first])

      first++
    }
  }

  return max
}

console.log(lengthOfLongestSubstring('abcabcbb'))
