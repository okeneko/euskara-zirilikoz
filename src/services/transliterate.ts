import * as data from '../data/alfabetoa.json'

export const letters = data.reduce((result, letter) => {
  result[letter.latindarra] = letter.zirilikoa
  return result
})

const fetchLetter = (input: string) => {
  const cyrillic = letters[input.toLowerCase()]
  const letter = input.slice(0, 1)
  if (letter === letter.toUpperCase()) return cyrillic.toUpperCase()
  return cyrillic
}

export const transliterate = (word: string): string => {
  return word.split('').reduce((result, letter, i, word) => {
    if (!!letter.toLowerCase() && !!letters[letter.toLowerCase()]) {
      const prev = word[i - 1]
      if (!!prev && (prev === 't' || prev === 'T' || prev === 'т' || prev === 'Т')) {
        if (
          letter.toLowerCase() === 'x' ||
          letter.toLowerCase() === 'z' ||
          letter.toLowerCase() === 's'
        ) {
          let latinT = prev
          if (prev === 'т') latinT = 't'
          if (prev === 'Т') latinT = 'T'
          return result.slice(0, -1) + fetchLetter(latinT + letter)
        }
      }
      if (!!prev && (prev === 'l' || prev === 'L' || prev === 'л' || prev === 'Л')) {
        let latinL = prev
        if (prev === 'л') latinL = 'l'
        if (prev === 'Л') latinL = 'L'
        if (letter.toLowerCase() === 'l') return result.slice(0, -1) + fetchLetter(latinL + letter)
      }

      return result + fetchLetter(letter)
    }

    return result + letter
  }, '')
}
