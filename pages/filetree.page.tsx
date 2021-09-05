import useAspidaSWR from '@aspida/swr'
import React, { useState } from 'react'
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
  list-style-type: none;
`

const FileView = () => {
  const { api, onErr } = useApi()
  const { data: content, error, mutate } = useAspidaSWR(api.filetree)
  const [contentname, setContentname] = useState('')
  if (!content) return <Fetching error={error} />

  return (
    <TreeContainer>
      <Content>
        {content.map((m, i) => (
          <React.Fragment key={m.id}>
            <li>
              <span>{m.fileinfo[0].contentname}</span>
            </li>
          </React.Fragment>
        ))}
      </Content>
    </TreeContainer>
  )
}

export default FileView
