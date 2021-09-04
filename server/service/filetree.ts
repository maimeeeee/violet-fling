import { depend } from 'velona'
import { PrismaClient } from '@prisma/client'
import type { FileTree, Prisma } from '$prisma/client'

const prisma = new PrismaClient()

export const getFiles = depend(
  { prisma: prisma as { filetree: { findMany(): Promise<FileTree[]> } } },
  async ({ prisma }, limit?: number) => (await prisma.filetree.findMany()).slice(0, limit)
)

export const createFileTree = (filename: FileTree['filename'], parentid: FileTree['parentid']) =>
  prisma.fileTree.create({ data: { filename: filename, parentid: parentid } })

export const deleteFile = (fileid: FileTree['id']) =>
  prisma.fileTree.delete({ where: { id: fileid } })
