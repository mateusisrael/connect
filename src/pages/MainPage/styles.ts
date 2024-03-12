import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  box-sizing: border-box;
  height: 100vh;
`

export const MessageInput = styled.input`
  min-width: 200px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 12px;
`

export const Message = styled.div`
  padding: 12px;
  width: fit-content;
  border-radius: 10px;
  color: #fff;
  max-width: 75%;
`

export const Main = styled.div`
  margin: ${({ margin }) => margin};
  display: flex;
  flex-direction: column;
  .messages-overflow {
    flex-grow: 1;
    overflow-y: auto;
    padding: 12px 12px 60px 12px;
    background-color: var(--neutral-background);
    border-radius: 8px;
  }
`

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${({ owner }) => (owner ? 'flex-end' : 'flex-start')};
  margin-top: 5px;

  > div {
    background-color: ${({ owner }) => (owner ? 'teal' : 'rgba(11,20,26,0.8)')};
  }
`
