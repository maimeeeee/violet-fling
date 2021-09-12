import useAspidaSWR from '@aspida/swr'
import React from 'react'
import styled from 'styled-components'
import { Fetching } from '~/components/organisms/Fetching'
import { useApi } from '~/hooks'

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
  const { data: content, error } = useAspidaSWR(api.filetree)
  if (!content) return <Fetching error={error} />

  return (
    <TreeContainer>
      <Content>
        {content.map((m) => (
          <React.Fragment key={m.id}>
            <li style={{ marginLeft: m.depth * 8 }}>
              <span>{m.fileinfo[0].contentname}</span>
            </li>
          </React.Fragment>
        ))}
      </Content>
    </TreeContainer>
  )
}

export default FileView
