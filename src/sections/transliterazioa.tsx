import React, { useState } from 'react'
import styled from 'styled-components'
import { LZ } from '../components/lz'
import { useStaticQuery, graphql } from 'gatsby'

const TransliterazioaSection = styled.section`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 4rem 0;

  @media (max-width: 700px) {
    width: 90%;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    padding: 2rem;

    @media (max-width: 700px) {
      padding: 1rem;
    }
  }
`

const TextArea = styled.textarea`
  width: 100%;
  font-size: 1.5rem;
  font-family: 'Fira Sans', sans-serif;
  color: inherit;
  background: transparent;
  padding: 1rem;
  border: 2px solid #101010;
  outline: none;

  &:hover {
    background: #f0f0f0;
  }
`

export const Transliterazioa = () => {
  const data = useStaticQuery(graphql`
    query transliterazioAlfabetoa {
      allAlfabetoaJson {
        edges {
          node {
            id
            izena
            latindarra
            zirilikoa
          }
        }
      }
    }
  `)

  const { edges } = data.allAlfabetoaJson

  const letters = edges.reduce((result, letter) => {
    result[letter.node.latindarra] = letter.node.zirilikoa
    return result
  })

  const fetchLetter = (input: string) => {
    const cyrillic = letters[input.toLowerCase()]
    const letter = input.slice(0, 1)
    if (letter === letter.toUpperCase()) return cyrillic.toUpperCase()
    return cyrillic
  }

  const transliterate = (word: string): string => {
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
          if (letter.toLowerCase() === 'l')
            return result.slice(0, -1) + fetchLetter(latinL + letter)
        }

        return result + fetchLetter(letter)
      }

      return result + letter
    }, '')
  }

  const [input, setInput] = useState('')
  return (
    <TransliterazioaSection id="transliterazioa">
      <h2>
        <LZ l="Transliterazioa" z="Транслитеразиоа" />
      </h2>
      <TextArea
        id="transliterazioa"
        rows={8}
        spellCheck={false}
        value={input}
        onChange={e => setInput(transliterate(e.target.value))}
        // onKeyUp={() => setInput(transliterate(input))}
      ></TextArea>
    </TransliterazioaSection>
  )
}
