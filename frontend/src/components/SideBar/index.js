import React from 'react';

import companyIcon from '../../assets/icons/company.png'
import documentsIcon from '../../assets/icons/documents.png'
import chargerIcon from '../../assets/icons/charger.png'

import { Container, ButtonSideBarContainer, ButtonSideBarIcon, ButtonSideBarText, } from './styles';

const SideBar = () => {
  return (
    <Container>
      <ButtonSideBarContainer>
        <ButtonSideBarIcon>
          <img src={companyIcon} alt="company icon" />
        </ButtonSideBarIcon>
        <ButtonSideBarText>Informações da compania</ButtonSideBarText>
      </ButtonSideBarContainer>

      <ButtonSideBarContainer style={{ background: '#92d050'}}>
        <ButtonSideBarIcon>
          <img src={documentsIcon} alt="company icon" />
        </ButtonSideBarIcon>
        <ButtonSideBarText>Gerenciamento de documentos</ButtonSideBarText>
      </ButtonSideBarContainer>

      <ButtonSideBarContainer style={{ background: '#92d050'}}>
        <ButtonSideBarIcon>
          <img src={chargerIcon} alt="company icon" />
        </ButtonSideBarIcon>
        <ButtonSideBarText>Gerenciamento de Partes</ButtonSideBarText>
      </ButtonSideBarContainer>
    </Container>
);
};

export default SideBar;
