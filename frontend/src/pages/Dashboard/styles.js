import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #f5f5f8;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 92vh;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
`

export const TopTabs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #96ec3b;
`

export const ButtonContainer = styled.div`
  width: 300px;

  button {
    width: 250px;
    padding: 13px;
    margin-right: 2px;
    border: 0;
    background: #96ec3b;
    color: #fff;
  }
`