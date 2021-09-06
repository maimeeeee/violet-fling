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
  console.log('Max Position: ', position)
  return position[0]?._max?.position ?? 0
}
const getParentDepth = async (parentid: number) => {
  const parentDepth = await prisma.fileManage.findFirst({
    where: {
      id: parentid,
    },
  })
  return parentDepth?.depth ?? 0
}
const getDepth = async (parentid: number) => {
  const depth = await prisma.fileManage.findFirst({
    where: {
      parentid: parentid,
    },
  })
  const calcDepth = depth?.depth
    ? depth.depth
    : parentid !== 0
    ? (await getParentDepth(parentid)) + 1
    : 0
  return calcDepth
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
  const newfile = await prisma.fileManage.create({
    data: {
      parentid: parentid,
      position: (await getPosition(parentid)) + 1,
      depth: await getDepth(parentid),
      fileinfo: {
        create: { contentname: contentname },
      },
    },
  })
  return newfile
}
export const deleteFile = (fileid: FileInfo['id']) =>
  prisma.fileInfo.delete({ where: { id: fileid } })
