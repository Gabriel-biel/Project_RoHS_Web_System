import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 300px auto;

  grid-template-areas: 'SB MN';

  height: 100vh;
`
export const Sidebar = styled.div`
  grid-area: SB;
  padding: 32px 20px;

  background: linear-gradient(
      180deg,
      #ededed 44.27%,
      rgba(177, 221, 166, 0.47) 73.44%,
      rgba(104, 132, 112, 0.45) 100%
    ),
    rgba(46, 245, 13, 0.38);

  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;

  justify-content: columns;

  img {
    margin-bottom: 60px;
  }

  img.salcompRed {
    margin: 10rem 10rem;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
export const Main = styled.div`
  padding: 24px;
  overflow: auto;

  h1 {
    width: 500px;
    color: #333;
    font-family: Quicksand;
    font-weight: bold;
    font-size: 22px;
    margin: 0 auto;
    margin-top: 20px;
  }
`

export const LogoMainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 24px;
`

export const BackButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    width: 125px;
    height: 25px;
    border-radius: 40px;
    background: #3cc8b4;
    color: #fff;
    font-family: Roboto;

    svg {
      margin-right: 10px;
    }
  }
`

export const DescriptionPart = styled.div`
  display: flex;

  div {
    width: 100%;
  }

  div.PartCode {
    width: 480px;
  }

  label {
    font-size: 14px;
    text-align: left;
    color: #847979;
  }

  input {
    width: 90%;
    height: 40px;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
    background: #f8f8f8;
    border-radius: 10px;
  }
`

export const PartsList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0;
  background: #fff;
  margin-top: 24px;

  table {
    width: 100%;
    border-collapse: collapse;

    input {
      height: 90%;
      border: solid 1px;
      text-align: center;
    }

    thead {
      background: #beebb5;

      td {
        text-align: center;
        padding: 12px 0;
        font-weight: bold;
      }
    }
  }
`
export const ButtonSubmit = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  margin-top: 200px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 200px;
    height: 50px;

    border-radius: 10px;
    background: #43b162;
    border-radius: 10px;

    font-family: Roboto;
    color: #fff;
    font-weight: 400;
  }

  button.cancel {
    margin-left: 10px;
    background: #ed6262;
  }
`

export const PartsInfo = styled.tr`
  border-bottom: 1px solid #f1f1f1;
  text-align: center;

  td {
    padding: 12px 0;
  }

  span.aprovado {
    color: #43b162;
  }
  span.reprovado {
    color: #fd1809;
  }
  span.pendente {
    color: #ffe70f;
  }
`
