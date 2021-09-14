export type RootContent = {
  type: 'root'
  contentId: number
  name: string
  depth: number
  opened: boolean
  selected: boolean
}
export type RoopContent = {
  type: 'dir'
  contentId: number
  name: string
  depth: number
  opened: boolean
  selected: boolean
  parentId: number
  children: (RoopContent | BaseContent)[]
}
export type BaseContent = {
  type: 'content'
  contentId: number
  name: string
  depth: number
  opened: boolean
  selected: boolean
  parentId: number
}
