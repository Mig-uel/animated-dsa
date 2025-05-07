/**
 * Valid Parenthesis
 *
 * Given a string, s, containing just the characters '(', ')',
 * '{', '}', '[', ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open brackets are closed by the same type of brackets
 * 2. Open brackets are closed in the correct order
 */

function valid_parenthesis(s) {
  const stack = []

  const pair = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < s.length; i++) {
    const current_char = s[i]

    if (current_char === '(' || current_char === '[' || current_char === '{') {
      stack.push(current_char)
    } else {
      const popped = stack.pop()

      if (current_char !== pair[popped]) return false
    }
  }

  return stack.length === 0
}

console.log(valid_parenthesis('({[)]}'))
