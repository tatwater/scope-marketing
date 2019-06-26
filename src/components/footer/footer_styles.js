import styled from 'styled-components';


export const Container = styled.footer`
  align-items: center;
  background: #000A20;
  color: #DDDFE9;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 70px;
  position: relative;
  text-align: center;
  z-index: 1;
`;
export const Content = styled.div`
  width: 90%;
`;
export const Copyright = styled.span`
  color: #212C40;
  display: block;
  font-size: 12px;
  margin-top: 10px;
`;
export const Footnotes = styled.div`
  background: #000A20;
  margin-top: 30px;
`;
export const Footnote = styled.span`
  color: #212C40;
  display: block;
  font-size: 12px;
  line-height: 1.3em;
  margin-top: 4px;
  max-width: 100%;

  a:hover {
    text-decoration: underline;
  }
`;
