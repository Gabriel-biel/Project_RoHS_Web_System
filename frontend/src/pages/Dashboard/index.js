import React from 'react';

import Header from '../../components/Header'
import SideBar from '../../components/SideBar'

import { Container, Main, Content } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Main>
        <SideBar />
        <Content>
        </Content>
      </Main>
    </Container>
  );
};

export default Dashboard;
