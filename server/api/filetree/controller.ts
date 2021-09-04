import { defineController } from './$relay'
import { createFileTree, getFiles } from '$/service/filetree'

const print = (text: string) => console.log(text)
export default defineController({ getFiles, print }, ({ getFiles, print }) => ({
  get: async ({ query }) => {
    if (query?.message) print(query.message)

    return { status: 200, body: await getFiles(query?.limit) }
  },
  post: async ({ body }) => ({
    status: 201,
    body: await createFileTree(body.filename, body.parentid)
  })
}))
