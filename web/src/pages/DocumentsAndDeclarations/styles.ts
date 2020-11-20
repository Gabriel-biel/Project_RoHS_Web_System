import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface ILinkProps {
  isactive: boolean
}

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

  justify-content: space-between;

  img {
    margin-bottom: 60px;
  }

  img.salcompRed {
    margin: 10rem 0 10rem 0;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
export const LinkSideBar = styled(Link)<ILinkProps>`
  width: 100%;
  height: 40px;
  margin-bottom: 2px;
  color: #505152;
  transition: transform 0.2s;

  display: flex;
  align-items: center;

  ${props =>
    props.isactive &&
    css`
      color: red;
      font-weight: 600;
    `}

  &:hover {
    transform: translateX(10px);
  }
`

export const Main = styled.div`
  padding: 24px;

  overflow: auto;

  h1 {
    width: 500px;

    color: #333;
    text-align: center;

    font-family: Quicksand;
    font-weight: bold;
    font-size: 22px;

    margin: 0 auto;
    margin-top: 20px;
  }
`
export const Anexos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;

  span {
    display: flex;
    font-weight: bold;
    font-size: 16px;
    font-family: Roboto;
  }
`

export const ListSquare = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-top: 10px;
  max-width: 1024px;
`

export const Square = styled.button`
  width: 180px;
  height: 180px;

  background: #fff;
  border: 1px solid #e1e0ef;
  border-radius: 5px;

  margin-bottom: 32px;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 30px;

  &:hover {
    border-color: #4268f6;
  }

  box-shadow: rgba(137, 138, 154, 0.4) 0px 4px 12px 0px;

  svg {
    margin-top: 10px;
  }

  span {
    font-size: 18px;
  }

  p {
    text-align: center;
    color: #999;
  }
`

export const BackButton = styled.div`
  display: flex;

  margin-bottom: 50px;

  justify-content: flex-end;

  button.voltar {
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

export const ButtonView = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 32px;

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

    svg {
      margin-right: 10px;
    }
  }
`
export const DocumentsList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0;

  background: #fff;
  margin-top: 24px;

  table {
    width: 100%;
    border-collapse: collapse;

    input {
      height: 100%;
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

export const DocumentsInfo = styled.tr`
  border-bottom: 1px solid #f1f1f1;
  text-align: center;

  td {
    padding: 12px 0;

    select {
      width: 100%;
      height: 100%;
    }
  }

  span.aprovado {
    color: #43b162;
    font-weight: bold;
  }
  span.reprovado {
    color: #fd1809;
  }
  span.pendente {
    color: #ffe70f;
  }
`
