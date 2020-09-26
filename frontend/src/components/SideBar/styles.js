import styled from 'styled-components';

export const Container = styled.div`
  background: #92d050;
  width: 25%;
  min-width: 330px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`

export const ButtonSideBarContainer = styled.button`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 13px;
  background: #a1e657;
  border: 0;
  transition: opacity .3s;
  margin-bottom: 2px;

  :hover {
    opacity: 80%;
  }
`

export const ButtonSideBarIcon = styled.div`
  margin-right: 15px;
  margin-top: 4px;
`

export const ButtonSideBarText = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
`