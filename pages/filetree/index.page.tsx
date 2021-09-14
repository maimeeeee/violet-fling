import useAspidaSWR from '@aspida/swr'
import React from 'react'
import styled from 'styled-components'
import { Fetching } from '~/components/organisms/Fetching'
import { useApi } from '~/hooks'
import type { BaseContent } from '~/server/types'
import { ContentField } from './component/Content'

const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10%;
  min-height: 100vh;
  padding: 0 0.5rem;
`
const Content = styled.ul`
  width: 300px;
  padding: 0;
  margin: 20px auto 0;
  text-align: left;
  list-style-type: snone;
`

const FileView = () => {
  const { api } = useApi()
  const { data: contentData, error } = useAspidaSWR(api.filetree)
  if (!contentData) return <Fetching error={error} />

  const contentInfoList = contentData.map<BaseContent>((contents) => ({
    type: 'content',
    contentId: contents.id,
    name: contents.fileinfo[0].contentname,
    depth: contents.depth,
    opened: false,
    selected: false,
    parentId: contents.parentid,
  }))

  return (
    <TreeContainer>
      <Content>
        <ContentField baseContentList={contentInfoList} />
      </Content>
    </TreeContainer>
  )
}

export default FileView
