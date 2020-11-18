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
      color: #725de8;
      font-weight: 600;
    `}

  &:hover {
    transform: translateX(10px);
  }
`
export const Main = styled.div`
  padding: 24px;

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
export const BackButton = styled.div`
  display: flex;
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
export const LogoMainFooter = styled.div``

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
    width: 200px;
    height: 40px;
    border-radius: 10px;
    background: #43b162;
    border-radius: 10px;
    font-family: Roboto;
    color: #fff;
    font-weight: 400;

    svg {
      margin-right: 20px;
    }
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
      border: solid 1px;
    }

    thead {
      background: #f1f1f1;

      td {
        text-align: center;
        padding: 12px 0;
      }
    }
  }
`

export const Options = styled.td`
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  input {
    width: 18px;
    height: 18px;

    cursor: pointer;
  }

  div {
    display: none;
  }

  &:hover {
    div {
      display: flex;
    }
  }
`

export const InfoParts = styled.tr`
  border-bottom: 1px solid #f1f1f1;
  text-align: center;

  td {
    padding: 12px 0;
  }

  button {
    background: white;
    text-decoration: underline;
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
