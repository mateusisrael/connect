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
  padding: 100px 12px 12px 12px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 12px;
  position: fixed;
  z-index: 10;

  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
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

  .messages-overflow {
    height: 100%;
    overflow-y: auto;
    padding-bottom: 60px;
    padding-right: 12px;
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
