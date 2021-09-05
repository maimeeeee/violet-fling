import { FileInfo, FileManage } from '$prisma/client'

export type Methods = {
  post: {
    reqBody: Pick<FileManage, 'parentid'> & Pick<FileInfo, 'contentname'>
    resbody: FileManage
  }
  get: {
    resBody: (FileManage & { fileinfo: FileInfo[] })[]
  }
}
