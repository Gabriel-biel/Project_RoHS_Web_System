import styled from 'styled-components'

export const Grid = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
  position: absolute;

  background-color: rgba(0, 0, 0, 0.7);
`
export const Main = styled.div`
  width: 90%;
  height: 90%;
  background: #c4c4c4;
  position: absolute;

  border-radius: 20px;

  span {
    display: flex;
    justify-content: center;

    text-align: center;
    font-size: 18px;
    font-weight: bold;
    font-family: Roboto;

    margin: 30px 0 40px 0;
  }

  header {
    width: 90%;
    height: 50px;
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
  }
`

export const Form = styled.form`
  width: 568px;
  height: 80%;
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
    border-radius: 5px;
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

    button.cancel {
      background: #ed6262;
      transition: background-color 0.2s;
      &:hover {
        background: rgba(237, 98, 98, 0.51);
      }
    }
  }
`
