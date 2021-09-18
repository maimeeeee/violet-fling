import React from 'react'
import styled from 'styled-components'
import { BaseContent } from '~/server/types'

const Container = styled.div`
  display: flex;
  height: 41px;
  overflow: auto;
  user-select: none;
`

const Tab = styled.a`
  display: block;
  padding: 12px;
`

export const TabSelectedFile = ({ baseContents }: { baseContents: BaseContent[] }) => {
  return (
    <Container>
      {baseContents.map((b) => b.selected && <Tab key={b.contentId}>{b.name}</Tab>)}
    </Container>
  )
}
