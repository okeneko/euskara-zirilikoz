import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet'

import { Header } from '../components/header'
import { Transliterazioa } from '../sections/transliterazioa'
import { Alfabetoa } from '../sections/alfabetoa'
import { Footer } from '../components/footer'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #fbfbfb;
    color: #101010;
    font-family: 'Fira Mono', 'Roboto Mono', monospace;
  }

  a {
    text-decoration: none;
    color: #101010;
  }
`

const Index = () => (
  <>
    <Helmet>
      <title>Euskara Zirilikoz</title>
    </Helmet>
    <GlobalStyle />
    <Header />
    <Transliterazioa />
    <Alfabetoa />
    <Footer />
  </>
)

export default Index
