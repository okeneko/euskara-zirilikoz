import React from 'react'
import styled from 'styled-components'
import { LZ } from './lz'

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: #fbfbfb;
  .header-wrap {
    height: 100%;
    width: 90%;
    margin: auto;
    border-bottom: 2px solid #101010;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    padding: 0 1rem;
    font-size: 2rem;
    font-weight: 700;
  }

  .menu ul {
    display: flex;
    align-items: center;

    li a {
      display: block;
      font-size: 1.25rem;
      font-weight: 500;
      padding: 1.5rem 1rem;
    }
  }
`

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-wrap">
        <h1>
          <LZ href="/" l="Euskara Zirilikoz" z="Еускара Зириликоз" />
        </h1>
        <nav className="menu">
          <ul>
            <li>
              <LZ href="#" l="Alfabetoa" z="Алфабетоа" />
            </li>
            {/* <li>
              <LZ href="#transliterazioa" l="Transliterazioa" z="Транслитеразиоа" />
            </li> */}
          </ul>
        </nav>
      </div>
    </HeaderContainer>
  )
}
