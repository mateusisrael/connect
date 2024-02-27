import styled from "styled-components";

export const Container = styled.aside`
  height: auto;
  padding: 0 8px;
  border: 1px solid gray;
  border-radius: 5px;

  >h1 {
    margin: 24px 0;
    font-size: 1rem;
  }
`

export const ContactContainer = styled.div`
  padding: 2px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid gray;
  &:hover {
    background-color: #e7fcf1;
  }
`