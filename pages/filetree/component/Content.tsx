import React from 'react'
import styled from 'styled-components'
import type { BaseContent, RootContent } from '~/server/types'
import { ContentName } from './ContentName'

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0.5rem;
`

export const ContentField = ({ baseContents }: { baseContents: BaseContent[] }) => {
  const roots = baseContents.filter((data) => data.depth === 0)
  const rootContents = roots.map<RootContent>((c) => ({
    type: 'root',
    contentId: c.contentId,
    name: c.name,
    depth: c.depth,
    opened: false,
    selected: false,
  }))
  return (
    <SubContainer>
      {rootContents.map((content: RootContent) => (
        <React.Fragment key={content.contentId}>
          <ContentName name={content.name} depth={content.depth} />
        </React.Fragment>
      ))}
    </SubContainer>
  )
}
