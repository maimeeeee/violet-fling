export type RootContent = {
  type: 'root'
  contentId: number
  name: string
  depth: number
  opened: boolean
  selected: boolean
}
export type NestContent = {
  type: 'child'
  contentId: number
  name: string
  depth: number
  opened: boolean
  selected: boolean
  parentId: number
  children: (NestContent | BaseContent)[]
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
