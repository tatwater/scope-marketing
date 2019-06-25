import styled from 'styled-components';
import { Link } from 'gatsby';


export const Container = styled.nav`
  background: #000A20;
  position: fixed;
    top: 0;
    right: 0;
    left: 0;
  z-index: 100;
`;
export const Content = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;

  img {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    height: 120px;
  }
`;
export const CTA = styled.div`
  align-items: center;
  color: #DDDFE9;
  display: flex;
  font-weight: 500;
  justify-content: flex-end;
  letter-spacing: .16em;
  text-transform: uppercase;
`;
export const CTAButton = styled(Link)`
  align-items: center;
  border: 1px solid #D8AB4E;
  border-radius: 3px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  color: #D8AB4E;
  display: inline-flex;
  font-size: 14px;
  font-weight: 500;
  height: 38px;
  justify-content: center;
  letter-spacing: 0;
  margin-left: 24px;
  text-decoration: none;
  text-transform: none;
  transition: background .2s ease,
              box-shadow .2s ease,
              color .2s ease;
  width: 120px;

  &:hover {
    background: #D8AB4E;
    box-shadow: 0 5px 20px rgba(0, 0, 0, .16);
    color: #000A20;
  }
`;
