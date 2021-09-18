import React, { useMemo } from 'react'
import type { BaseContent, NestContent } from '~/server/types'
import { ContentName } from './ContentName'

const getChildren = (baseContents: BaseContent[], id: BaseContent['contentId']) => {
  return baseContents.filter((b) => b.parentId === id)
}

export const NestField = ({ baseContents }: { baseContents: BaseContent[] }) => {
  const nestWorks = useMemo(
    () =>
      baseContents.map<NestContent>((b) => ({
        type: 'child',
        contentId: b.contentId,
        name: b.name,
        depth: b.depth,
        opened: false,
        selected: false,
        parentId: b.parentId,
        children: getChildren(baseContents, b.contentId),
      })),
    [baseContents]
  )
  return (
    <div>
      {nestWorks.map((content) => (
        <ContentName key={content.contentId} name={content.name} depth={content.depth} />
      ))}
    </div>
  )
}
