import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px;
`;

export const ImageContainer = styled.div`
  width: 230px;
  height: 90px;
`

export const RightSide = styled.div`
  padding: 0 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const SelectLanguageContainer = styled.div`
  background: #f5f5f8;
  width: 200px;
  height: 30px;
  margin-right: 30px;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px;
`

export const CountryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OptionsContainer = styled.div`
  select {
    background: #f5f5f8;
    padding: 4px;
    border: 0;
    color: #757575;
  }
`

export const UserContainer = styled.div``