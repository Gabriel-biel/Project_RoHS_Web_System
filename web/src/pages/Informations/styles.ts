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

export const Form = styled.form`
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
      color: #b2b2b2;
    }
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 200px;
      height: 40px;

      border-radius: 10px;
      margin: 5px;

      background: #43b162;
      color: #fff;
      font-weight: 600;

      transition: background-color 0.2s;
      &:hover {
        background: rgba(46, 245, 13, 0.2);
      }
    }
    a {
      width: 200px;
      display: flex;
      height: 40px;
      justify-content: center;
      align-items: center;

      border-radius: 10px;
      margin: 5px;

      background: #43b162;
      color: #fff;
      font-weight: 600;

      transition: background-color 0.2s;
      &:hover {
        background: rgba(46, 245, 13, 0.2);
      }
    }
  }
`
