import React from 'react';

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'

import { Container, Main, Content, TopTabs, ButtonContainer } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Main>
        <SideBar />
        <Content>
          <TopTabs>
            <ButtonContainer>
              <button style={{ background: '#f5f5f8', color: '#acacac'}}>Informações básicas</button>
            </ButtonContainer>

            <ButtonContainer>
              <button>Contatos</button>
            </ButtonContainer>
          </TopTabs>
        </Content>
      </Main>
    </Container>
  );
};

export default Dashboard;
