import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 300px auto;

  grid-template-areas: 'SB MN';

  height: 100vh;
`

export const Main = styled.div`
  h1 {
    width: 500px;
    color: #999;
    font-size: 18px;
    margin: 0 auto;
    margin-top: 20px;
  }
`
export const ButtonView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 32px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 174px;
    height: 40px;
    border-radius: 10px;
    background: linear-gradient(180deg, #EDEDED 47.92%, rgba(255, 255, 255, 0) 93.23%), #2EF50D;
    border-radius: 10px;
    transform: rotate(0.01deg);
    color: #999;
    font-weight: 500;

    img {
      margin-right: 14px;
    }
  }

`
