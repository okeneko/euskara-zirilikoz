import React from 'react'
import styled from 'styled-components'
import { LZ } from './lz'

const FooterContainer = styled.footer`
  width: 90%;
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* border-top: 2px solid #101010; */

  p {
    font-weight: 500;
  }
`

export const Footer = () => {
  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()} <LZ l="Eneko Ortiz de Zarate" z="Енеко Ортиз де Зарате" />
      </p>
    </FooterContainer>
  )
}
