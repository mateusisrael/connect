import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1;
`

export const Modal = styled.div`
  min-width: 350px;
  min-height: 200px;
  padding: 12px;
  border-radius: 10px;
  z-index: 2;
  background-color: #fff;
  row-gap: 20px;

  .input-container {
    display: flex;
    flex-direction: row;
  }

  .error-text {
    margin-top: 8px;
    font-size: 1rem;
    color: red;
  }
  > p {
    margin-bottom: 8px;
    font-size: 2rem;
  }

  .input-container {
    display: flex;
    flex-direction: row;
  }
`