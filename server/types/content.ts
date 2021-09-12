import type { ContentId } from './branded'
export type Content = {
  type: 'content'
  id: ContentId
  name: string
  dir: string
  depth: number
  opend: boolean
  children: [Content]
}
