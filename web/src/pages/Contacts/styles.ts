import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 300px auto;

  grid-template-areas: 'SB MN';

  height: 100vh;
`

export const Main = styled.div`

`
export const ButtonView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 32px;

  button {
    width: 174px;
    height: 40px;
  }
`


