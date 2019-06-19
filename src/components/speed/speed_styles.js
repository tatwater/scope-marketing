import styled from 'styled-components';
import { Link } from 'gatsby';


export const Container = styled.section`
  align-items: center;
  background: radial-gradient(at top, rgba(230, 187, 98, .8), rgba(230, 187, 98, 0)), linear-gradient(#D8AB4E, #BF9842), #D8AB4E;
  color: #000A20;
  display: flex;
  flex-direction: column;
  padding: 100px 0 320px;
  position: relative;
  text-align: center;
  z-index: 1;

  p {
    max-width: 600px;
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 120px);
    justify-content: center;
    padding: 0 0 220px;
  }
`;
export const Header = styled.header`
  margin: 20px 0 70px;
`;
export const Columns = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  padding: 0 10px;
  width: 100%;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Column = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  @media screen and (max-width: 768px) {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 300px;
    padding: 0 10px;

    & + div {
      padding-top: 60px;
    }
  }
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
  justify-content: center;
  max-width: 680px;
  padding: 60px 30px;
  position: absolute;
    bottom: -130px;
    left: 50%;
  transform: translate(-50%, 0);
  width: calc(100% - 40px);

  h2 {
    font-size: 22px;
    font-weight: 500;
    line-height: 1.4em;
    // margin-bottom: 28px;

    @media screen and (min-width: 410px) {
      font-size: 26px;
    }
    @media screen and (min-width: 480px) {
      font-size: 30px;
    }
  }
  p {
    max-width: 400px;
  }

  @media screen and (min-width: 410px) {
    padding: 60px 60px;
  }
  @media screen and (min-width: 768px) {
    height: 350px;
    padding: 20px 80px 0;
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
