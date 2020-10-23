import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 300px auto;

  grid-template-areas: 'SB MN';

  height: 100vh;
`
export const Main = styled.div`
  grid-area: MN;
  display: flex;
  flex-direction: column;
  flex: 1;

  header {
    width: 100%;
    height: 50px;
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
  }

  span {
    font-size: 21px;
    margin-top: 20px;
    margin-bottom: 25px;
    text-align: center;
  }
`

export const Form = styled.div`
  width: 568px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  label {
    font-size: 14px;
    text-align: left;
  }

  input {
    width: 100%;
    text-align: center;
    height: 60px;
    margin-top: 5px;
    border-radius: 20px;
    background: #fff;
    margin-bottom: 10px;

    &::placeholder {
      font-size: 16px;
      color: #B2B2B2;
    }
  }
`
