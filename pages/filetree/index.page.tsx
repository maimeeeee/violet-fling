import useAspidaSWR from '@aspida/swr'
import React from 'react'
import styled from 'styled-components'
import { Fetching } from '~/components/organisms/Fetching'
import { useApi } from '~/hooks'
import type { BaseContent } from '~/server/types'
import { TabSelectedFile } from './component/ TabSelectedFile'
import { IconField } from './component/ColumnIcon'
import { ContentField } from './component/Content'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
`
const Content = styled.ul`
  display: flex;
  flex-direction: column;
  width: 24%;
  height: 100vh;
  padding: 0 0.5rem;
  margin: 20px 0;
  text-align: left;
  list-style-type: snone;
`

const FileView = () => {
  const { api } = useApi()
  const { data: contentData, error } = useAspidaSWR(api.filetree)
  if (!contentData) return <Fetching error={error} />

  const contentInfo = contentData.map<BaseContent>((contents) => ({
    type: 'content',
    contentId: contents.id,
    name: contents.fileinfo[0].contentname,
    depth: contents.depth,
    opened: false,
    selected: true,
    parentId: contents.parentid,
  }))

  return (
    <Container>
      <IconField />
      <Content>
        <ContentField baseContents={contentInfo} />
      </Content>
      <TabSelectedFile baseContents={contentInfo} />
    </Container>
  )
}

export default FileView
