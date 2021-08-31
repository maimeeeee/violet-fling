import { defineController } from './$relay'
import { createFileTree } from '$/service/filetree'

export default defineController(() => ({
  post: async ({ body }) => ({
    status: 201,
    body: await createFileTree(body.filename, body.parentid)
  })
}))
