import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 300px auto;

  grid-template-areas: 'SB MN';

  height: 100vh;
`

export const Main = styled.main`
  grid-area: MN;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    height: 63px;
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 24px;

    div {
      margin: 20px 20px;
    }

    span {
      font-size: 14px;
    }

    p {
      font-size: 12px;
      color: #999;
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 284px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const ListSquare = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  margin-top: -80px;
  max-width: 1024px;
`

export const Square = styled.button`
  width: 310px;
  height: 240px;
  background: #fff;
  margin-bottom: 32px;
  border: 1px solid #e1e0ef;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;

  &:hover {
    border-color: #4268f6;
  }

  box-shadow: rgba(137, 138, 154, 0.4) 0px 4px 12px 0px;

  svg {
    margin-bottom: 30px;
  }

  span {
    font-size: 18px;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    color: #999;
  }
`
