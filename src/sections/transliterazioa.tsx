import React, { useState } from 'react'
import styled from 'styled-components'
import { LZ } from '../components/lz'
import { letters, transliterate } from '../services/transliterate'

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
  /* border-radius: 1rem; */
  outline: none;

  &:hover {
    background: #f0f0f0;
  }
`

export const Transliterazioa = () => {
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
