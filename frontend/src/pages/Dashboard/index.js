import React from 'react';

import Header from '../../components/Header'

import companyIcon from '../../assets/icons/company.png'
import documentsIcon from '../../assets/icons/documents.png'
import chargerIcon from '../../assets/icons/charger.png'

import { Container, Main, SideBar, ButtonSideBarContainer, ButtonSideBarIcon, ButtonSideBarText, Content } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Main>
        <SideBar>
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
        </SideBar>

        <Content>

        </Content>
      </Main>
    </Container>
  );
};

export default Dashboard;
