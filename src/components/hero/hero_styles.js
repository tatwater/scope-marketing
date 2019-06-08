import styled from 'styled-components';


export const Container = styled.header`
  align-items: center;
  background: #000A20;
  color: #DDDFE9;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  text-align: center;

  h1, p {
    position: relative;
    z-index: 1;
  }
  p {
    max-width: 600px;
  }
`;
export const Browser = styled.img`
  max-width: 1040px;
  position: absolute;
    top: calc(50% + 10px);
    left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  width: 90%;
  z-index: 0;
`;
