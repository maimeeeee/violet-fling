import React from 'react'
import styled from 'styled-components'
import type { ApiMessage } from '~/server/types'

const Container = styled.div`
  display: flex;
  margin-top: 8px;
  margin-left: 8px;
  overflow: hidden;
  font-size: 12px;
`
const Icon = styled.img`
  float: left;
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  border-radius: 18px;
`
const UserName = styled.div`
  float: left;
  margin-top: 12px;
  margin-left: 8px;
  font-weight: bold;
`
const CreateAt = styled.span`
  margin-top: 12px;
  margin-left: 12px;
  font-size: 8px;
  color: #8a9aa4;
  text-align: right;
`

export const MessageHeader = (props: { message: ApiMessage }) => {
  const timeStamp = new Date(props.message.createdAt * 1000)
  const hh = `0${timeStamp.getHours()}`.slice(-2)
  const mm = `0${timeStamp.getMinutes()}`.slice(-2)
  const ss = `0${timeStamp.getSeconds()}`.slice(-2)
  const createAt = `${timeStamp.getFullYear()}/${timeStamp.getMonth() + 1}/${timeStamp.getDate()}
   ${hh}:${mm}:${ss}`
  const src = 'https://placehold.jp/32x32.png'
  return (
    <Container>
      <>
        <Icon src={src} />
        <UserName>{props.message.userName}</UserName>
        <CreateAt>{createAt}</CreateAt>
      </>
    </Container>
  )
}
