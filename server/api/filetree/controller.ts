import { createFileTree, getFiles } from '$/service/filetree'
import { defineController } from './$relay'

export default defineController(() => ({
  get: async () => {
    return { status: 200, body: await getFiles() }
  },
  post: async ({ body }) => ({
    status: 201,
    body: await createFileTree(body.filename, body.parentid),
  }),
}))
