import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 300px auto;

  grid-template-areas: 'SB MN';

  height: 100vh;
`

export const Main = styled.div`
  padding: 24px;

  h1 {
    width: 500px;
    color: #333;
    font-weight: bold;
    font-size: 18px;
    margin: 0 auto;
    margin-top: 20px;
  }
`
export const LogoMainFooter = styled.div``

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

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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
    background: linear-gradient(
        180deg,
        #ededed 47.92%,
        rgba(255, 255, 255, 0) 93.23%
      ),
      #2ef50d;
    border-radius: 10px;
    transform: rotate(0.01deg);
    color: #999;
    font-weight: 500;

    img {
      margin-right: 14px;
    }
  }
`

export const ContactList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 24px;
  background: #fff;
  margin-top: 24px;
`

export const TableContainer = styled.table`
  width: 100%;
  max-width: 1240px;
  padding: 24px;
`

export const TableRow = styled.tr``

export const TableTitle = styled.th`
  background: #999;
  height: 45px;
`

export const TableLine = styled.td``
