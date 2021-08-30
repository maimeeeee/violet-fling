import { depend } from 'velona'
import { PrismaClient } from '@prisma/client'
import type { FileTree, Prisma } from '$prisma/client'

const prisma = new PrismaClient()

export const getFilenamebyId = (fileid: FileTree['id']) =>
  prisma.fileTree.findMany({ where: { id: fileid } })

export const createFileTree = (filename: FileTree['filename'], parentid: FileTree['parentid']) =>
  prisma.fileTree.create({ data: { filename: filename, parentid: parentid } })
