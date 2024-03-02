import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: teal;

  .form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: #fff;

    gap: 24px;
  }
`