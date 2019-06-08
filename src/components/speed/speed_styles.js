import styled from 'styled-components';
import { Link } from 'gatsby';


export const Container = styled.section`
  align-items: center;
  background: radial-gradient(at top, rgba(230, 187, 98, .8), rgba(230, 187, 98, 0)), linear-gradient(#D8AB4E, #BF9842), #D8AB4E;
  color: #000A20;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 120px);
  justify-content: center;
  padding-bottom: 220px;
  position: relative;
  text-align: center;

  p {
    max-width: 600px;
  }
`;
export const Header = styled.header`
  margin: 20px 0 70px;
`;
export const Columns = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
`;
export const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 300px;
`;
export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 72px;
  justify-content: center;
  user-select: none;
  width: 72px;
`;

export const CTA = styled.div`
  align-items: center;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, .16);
  color: #535D76;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: center;
  max-width: 680px;
  padding: 20px 80px 0;
  position: absolute;
    bottom: -130px;
    left: 50%;
  transform: translate(-50%, 0);
  width: calc(100% - 40px);

  h2 {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.4em;
    // margin-bottom: 28px;
  }
  p {
    max-width: 400px;
  }
`;
export const CTAButton = styled(Link)`
  align-items: center;
  background: #D8AB4E;
  border-radius: 3px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  color: #000A20;
  display: inline-flex;
  font-size: 18px;
  font-weight: 500;
  height: 50px;
  justify-content: center;
  letter-spacing: 0;
  margin-top: 32px;
  padding-top: 1px;
  text-decoration: none;
  text-transform: none;
  transition: background .2s ease,
              box-shadow .2s ease,
              color .2s ease;
  width: 180px;

  &:hover {
    background: none;
    border: 1px solid #D8AB4E;
  }
`;
