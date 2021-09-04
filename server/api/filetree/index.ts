import type { FileTree } from '$prisma/client'

export type Methods = {
  post: {
    reqBody: Pick<FileTree, 'filename' | 'parentid'>
    resbody: FileTree
  }
  get: {
    resBody: FileTree[]
  }
}
