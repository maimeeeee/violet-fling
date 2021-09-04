import { PrismaClient } from '@prisma/client'
import type { FileTree } from '$prisma/client'

const prisma = new PrismaClient()

export const getFiles = () => {
  return prisma.fileTree.findMany()
}

export const createFileTree = (filename: FileTree['filename'], parentid: FileTree['parentid']) =>
  prisma.fileTree.create({ data: { filename: filename, parentid: parentid } })

export const deleteFile = (fileid: FileTree['id']) =>
  prisma.fileTree.delete({ where: { id: fileid } })
