import React from 'react'
import styled from 'styled-components'

const Container = styled.a<{ depth: number }>`
  display: block;
  padding: 6px 8px;
  padding-left: ${(props) => props.depth * 8}px;
`
const Label = styled.div`
  position: relative;
`

export const ContentName = (props: { name: string; depth: number }) => {
  return (
    <Container depth={props.depth}>
      <Label>{props.name}</Label>
    </Container>
  )
}
