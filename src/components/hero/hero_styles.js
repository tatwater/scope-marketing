import styled from 'styled-components';


export const Container = styled.header`
  align-items: center;
  background: #000A20;
  color: #DDDFE9;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: fixed;
    top: 0;
    left: 0;
  text-align: center;
  z-index: 0;
  width: 100vw;

  h1, p {
    padding: 0 20px;
    position: relative;
    z-index: 1;
  }
  h1 {
    max-width: 780px;
  }
  p {
    max-width: 600px;
    line-height: 1.3em;
  }
`;
export const HiddenLogo = styled.div`
  position: absolute;
    top: -1000px;
`;
export const Browser = styled.img`
  max-height: calc(80vh - 100px);
  max-width: 1040px;
  position: absolute;
    top: calc(50% + 10px);
    left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  width: 90%;
  z-index: 0;
`;
