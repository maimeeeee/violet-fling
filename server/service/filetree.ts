import type { FileTree } from '$prisma/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getFiles = () => {
  return prisma.fileTree.findMany()
}

export const createFileTree = (
  contentname: FileTree['contentname'],
  parentid: FileTree['parentid']
) => prisma.fileTree.create({ data: { contentname: contentname, parentid: parentid } })

export const deleteFile = (fileid: FileTree['id']) =>
  prisma.fileTree.delete({ where: { id: fileid } })
