import type { FileInfo, FileManage } from '$prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const getPosition = async (parentid: number) => {
  const position = await prisma.fileManage.groupBy({
    by: ['parentid'],
    _max: { position: true },
    where: {
      parentid: parentid,
    },
  })
  return position[0]?.parentid ?? 0
}
const getDepth = async (parentid: number) => {
  const depth = await prisma.fileManage.groupBy({
    by: ['parentid'],
    _max: { depth: true },
    where: {
      parentid: parentid,
    },
  })
  return depth[0]?.parentid ?? 0
}
export const getFiles = async () => {
  const filemanage = await prisma.fileManage.findMany({
    include: {
      fileinfo: true,
    },
  })
  return filemanage
}

export const createFileTree = async (
  contentname: FileInfo['contentname'],
  parentid: FileManage['parentid']
) => {
  const maxPosition = (await getPosition(parentid)) + 1
  const depth = await getDepth(parentid)
  console.log('log ', parentid, 'name? ', contentname)
  const newfile = await prisma.fileManage.create({
    data: {
      parentid: parentid,
      position: maxPosition,
      depth: depth,
      fileinfo: {
        create: { contentname: contentname },
      },
    },
  })
  return newfile
}
export const deleteFile = (fileid: FileInfo['id']) =>
  prisma.fileInfo.delete({ where: { id: fileid } })
