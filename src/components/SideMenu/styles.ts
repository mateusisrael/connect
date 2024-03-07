import styled from 'styled-components'

export const Container = styled.aside`
  padding: 8px;
  height: auto;
  border: 1px solid gray;
  border-radius: 5px;
  > h1 {
    margin: 24px 0;
    font-size: 1rem;
  }

  .chats-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 48px;
  }
`

export const ContactContainer = styled.div`
  padding: 2px 10px;
  cursor: pointer;
  border-radius: 10px;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: #e7fcf1;
  }
`
