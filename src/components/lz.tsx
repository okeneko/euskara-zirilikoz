import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

const LZWrap = styled.a`
  display: inline-block;
  .z {
    display: none;
  }

  &:hover {
    .l {
      display: none;
    }

    .z {
      display: block;
    }
  }
`

export const LZ: React.FC<{ href?: string; l: string; z: string }> = ({ href, l, z }) => {
  return (
    <LZWrap href={href}>
      <span className="l">{l}</span>
      <span className="z">{z}</span>
    </LZWrap>
  )
}
