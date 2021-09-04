export * from './api'
export * from './branded'

export type UserInfo = {
  id: string
  name: string
  icon: string
}

export type AuthHeader = {
  authorization: string
}

export type FileInfo = {
  id: string
  name: string
  filetype: string
}
