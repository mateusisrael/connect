import styled from "styled-components";

export const Container = styled.div`
  padding: 28px 12px 0;
  min-width: 350px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .title {
    font-size: 1.4rem;
  }

  .title-wrapper {
    flex-grow: 1;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 32px;
`

export const ChatItemContainer = styled.div`
  box-sizing: border-box;
`

export const ChatItemContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  padding: 0 4px;
`

export const Line = styled.div`
  height: 1px;
  background-color: var(--neutral-line);
  width: 100%;
  margin-top: 12px;
`

export const ChatItemTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: fit-content;

  .contact-name {
    font-size: 1rem;
  }

  .last-message {
    font-size: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden; 
    max-width: 230px;

    color: var(--neutral-disabled);
  }
`