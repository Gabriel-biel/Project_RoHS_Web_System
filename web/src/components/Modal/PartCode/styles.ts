import styled from 'styled-components'

export const PopupModal = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
  position: absolute;

  background-color: rgba(0, 0, 0, 0.7);
`

export const PopupContent = styled.div`
  width: 90%;
  height: 90%;
  background: white;

  border-radius: 20px;
`

export const CloseButton = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    margin-left: 80px;
  }

  button {
    display: flex;
    position: relative;
    transform: rotate(45deg);

    width: 40px;
    height: 40px;

    justify-content: center;
    align-items: center;

    border: 0;
    margin: 5px 20px 0 0;
    border-radius: 50%;

    background: #3cc8b4;
    color: #fff;
    font: 20px Roboto Bold;
  }
`

export const EditButton = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    justify-content: flex-end;
    position: relative;

    width: 125px;
    height: 25px;

    justify-content: center;
    align-items: center;

    border-radius: 10px;

    color: #fff;
    background: #ed6262;
    font-family: Quicksand;
  }
`

export const ContentPage = styled.div`
  display: flex;
  flex-direction: column;

  width: 90%;
  height: 90%;

  border-radius: 20px;
  margin: 0 auto;

  background: #f5f5f5;

  h1 {
    text-align: center;
  }
`

export const PartsList = styled.div`
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

export const PartsInfo = styled.tr`
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
