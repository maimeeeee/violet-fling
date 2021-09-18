import styled from 'styled-components'

const IconColumn = styled.div`
  display: inline-block;
  flex-direction: column;
  row-gap: 6px;
  width: 60px;
  height: 100vh;
  padding: 6px;
  text-align: center;
  user-select: none;
`

const FileIcon = styled.div`
  position: relative;
  box-sizing: border-box;
  display: block;
  width: 32px;
  height: 24px;
  margin: 0 auto;
  overflow: hidden;
  border: 2px solid transparent;
  border-top: 0;
  border-right: 0;
  border-radius: 1px;
  border-top-right-radius: 4px;
  box-shadow: 0 0 0 2px;
  transform: scale(var(--ggs, 1));
`

export const IconField = () => {
  return (
    <IconColumn>
      <FileIcon />
    </IconColumn>
  )
}
