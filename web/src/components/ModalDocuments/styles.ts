import styled from 'styled-components'

export const PopupModal = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  position: absolute;

  background-color: rgba(0, 0, 0, 0.7);

  button.close {
  }

  div {
    display: flex;
    width: 90%;
    height: 90%;

    background: white;
    border-radius: 20px;
  }
`

export const ContentPage = styled.div``

export const PartsList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0;
  background: #fff;
  margin-top: 24px;

  table {
    width: 100%;
    display: flex;
    border-collapse: collapse;

    justify-content: center;
    align-items: center;

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
