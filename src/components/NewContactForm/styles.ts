import styled from "styled-components";

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

export const Form = styled.form`
  width: 100%;
  padding: 28px 12px 0;
  min-width: 350px;
`

export const InputWrapper = styled.div`
  min-height: 82px;
  display: flex;
  flex-direction: column;
  padding-top: 12px;

  .search-input {
    padding: 10px;
  }

  .error-text, .success-text {
    margin-top: 5px;
    font-size: .85rem;
  }
  .error-text { color: red; }
  .success-text { color: green }

  input {
    border-radius: 4px;
    background-color: var(--neutral-background);
  }

  input::placeholder {
    color: var(--neutral-disabled);
  }
`

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  
  button {
    padding: 10px;
    background-color: var(--brand-color-default);
    color: #fff;
  }
  button:disabled {
    background-color: var(--neutral-disabled);
    pointer-events: none;
  }
`