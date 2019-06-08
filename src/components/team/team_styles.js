import styled from 'styled-components';


export const Container = styled.section`
  align-items: center;
  background: #000A20;
  color: #DDDFE9;
  display: flex;
  flex-direction: column;
  padding: 270px 0 100px;
`;
export const Header = styled.header`
  margin-bottom: 50px;
`;
export const People = styled.div`
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
`;
export const Person = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 16px;
  grid-template-areas:
    'photo basics'
    'bio bio';
  grid-template-columns: 80px 1fr;
  grid-template-rows: 80px max-content;
  padding: 30px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1280px) {
    grid-column-gap: 30px;
    grid-row-gap: 18px;
    grid-template-areas:
      'photo basics'
      'photo bio';
    grid-template-columns: 200px 1fr;
    grid-template-rows: max-content 1fr;
  }
`;
export const Photo = styled.img`
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, .16);
  flex-shrink: 0;
  grid-area: photo;
  height: 80px;
  margin-right: 20px;
  width: 80px;

  @media screen and (min-width: 1280px) {
    height: 200px;
    margin-right: 30px;
    width: 200px;
  }
`;
export const Basics = styled.div`
  grid-area: basics;
`;
export const RoleWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  height: auto;
  margin-bottom: 3px;

  @media screen and (min-width: 1280px) {
    height: 40px;
  }
`;
export const Role = styled.span`
  color: #D8AB4E;
  display: block;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;

  span {
    display: inline-block;
  }
`;
export const Name = styled.span`
  color: #F6F5F8;
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1px;
`;
export const Location = styled.span`
  color: #DDDDDD;
  display: block;
  font-size: 12px;
  font-weight: 400;
`;
export const Bio = styled.span`
  color: #F6F5F8;
  display: block;
  font-size: 14px;
  font-weight: 400;
  grid-area: bio;
`;
