import styled from 'styled-components'

export const DeclarationModal = styled.div`
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
  justify-content: flex-end;

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
    font-weight: 400px;
    font-family: Roboto;
    font-size: 30px;
  }
`

export const ButtonSubmit = styled.div`
  display: flex;
  justify-content: center;

  button {
    display: flex;
    margin-top: 200px;
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
`

export const DeclarationContent = styled.div`
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

export const DeclarationInfo = styled.tr`
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
