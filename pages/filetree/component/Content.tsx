import React from 'react'
import type { BaseContent, RootContent } from '~/server/types'
import { ContentName } from './ContentName'

export const ContentField = ({ baseContentList }: { baseContentList: BaseContent[] }) => {
  const roots = baseContentList.filter((data) => data.depth === 0)
  const leafs = baseContentList.filter((data) => data.depth !== 0)
  const rootContents = roots.map<RootContent>((c) => ({
    type: 'root',
    contentId: c.contentId,
    name: c.name,
    depth: c.depth,
    opened: false,
    selected: false,
  }))
  return (
    <div>
      {rootContents.map((content: RootContent) => (
        <React.Fragment key={content.contentId}>
          <ContentName name={content.name} depth={content.depth} />
          {/* {leafs.map((c, i) => (
            <NestField key={i} baseContents={c} />
          ))} */}
        </React.Fragment>
      ))}
    </div>
  )
}
