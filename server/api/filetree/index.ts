import type { FileTree } from '$prisma/client'

export type Methods = {
  post: {
    reqBody: Pick<FileTree, 'contentname' | 'parentid'>
    resbody: FileTree
  }
  get: {
    resBody: FileTree[]
  }
}
