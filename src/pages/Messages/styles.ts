import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  box-sizing: border-box;
  max-height: 100vh;
`

export const MessageInput = styled.input`
  min-width: 200px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 88px);
  padding: 12px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 12px;
  gap: 12px;
`

export const Message = styled.div`
  padding: 12px;
  background-color: teal;
  width: fit-content;
  border-radius: 10px;
  color: #fff;
`

export const Main = styled.div`
  margin: ${({ margin }) => margin};
`

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${({ owner }) => owner ? 'flex-end' : 'flex-start'};
  margin-top: 5px;
`