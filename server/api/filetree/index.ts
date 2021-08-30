import type { FileTree } from '$prisma/client'

export type Methods = {
  patch: {
    reqBody: Partial<Pick<FileTree, 'filename'>>
    status: 204
  }
  delete: {
    status: 204
  }
}
