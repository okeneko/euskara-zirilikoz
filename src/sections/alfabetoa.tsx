import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { LZ } from '../components/lz'

const AlfabetoaSection = styled.section`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    text-align: center;
    padding: 2rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    tbody {
      tr:hover {
        background: #f0f0f0;
      }
    }

    th {
      width: 33.33%;
    }

    th,
    td {
      font-size: 1.5rem;
      text-align: center;
      font-weight: 500;
      padding: 1rem 0;
      border-bottom: 1px solid #101010;

      &.mayus,
      &.minus {
        padding: 1rem 0.5rem;
      }

      &.mayus {
        text-transform: uppercase;
        text-align: right;
      }

      &.minus {
        text-align: left;
      }

      &.txikia {
        font-size: 1.25rem;
      }
    }

    tr:last-of-type {
      td {
        border-bottom: none;
      }
    }
  }
`

const TRow = ({ latindarra, zirilikoa, izena }) => (
  <tr>
    <td className="mayus">{zirilikoa}</td>
    <td className="minus">{zirilikoa}</td>
    <td className="txikia">{izena}</td>
    <td className="mayus">{latindarra}</td>
    <td className="minus">{latindarra}</td>
  </tr>
)

export const Alfabetoa = () => {
  const data = useStaticQuery(graphql`
    query Alfabetoa {
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

  return (
    <AlfabetoaSection>
      <h2>
        <LZ l="Alfabetoa" z="Алфабетоа" />
      </h2>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>
              <LZ l="Zirilikoa" z="Зириликоа" />
            </th>
            <th>
              <LZ l="Izena" z="Изена" />
            </th>
            <th colSpan={2}>
              <LZ l="Latindarra" z="Латиндарра" />
            </th>
          </tr>
        </thead>
        <tbody>
          {edges.map(({ node }) => (
            <TRow
              key={node.id}
              zirilikoa={node.zirilikoa}
              izena={node.izena}
              latindarra={node.latindarra}
            />
          ))}
          {/* <TRow zMayus="А" zMinus="a" izena="a" lMayus="A" lMinus="a" />
          <TRow zMayus="Б" zMinus="б" izena="be" lMayus="B" lMinus="b" />
          <TRow zMayus="Д" zMinus="д" izena="de" lMayus="D" lMinus="d" />
          <TRow zMayus="Е" zMinus="е" izena="e" lMayus="E" lMinus="e" />
          <TRow zMayus="Ф" zMinus="ф" izena="efe" lMayus="F" lMinus="f" /> */}
        </tbody>
      </table>
    </AlfabetoaSection>
  )
}
