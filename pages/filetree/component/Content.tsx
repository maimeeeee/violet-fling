import React from 'react'
import type { Content } from '~/server/types'
import { ContentName } from './ContentName'

export const ContentField = ({ content }: { content: Content }) => {
  return (
    <div>
      <ContentName name={content.name} depth={content.depth} />
      {}
    </div>
  )
}
