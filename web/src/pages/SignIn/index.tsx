import React from 'react'

import logoRohs from '../../assets/rohs.png'
import worldImg from '../../assets/world.png'

import {
  Container,
  LoginContainer,
  ImageContainer,
  FormContainer,
  Footer
} from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <LoginContainer>
        <img src={logoRohs} alt="Rohs" />

        <FormContainer>
          <h1>Faça seu login</h1>

          <label>ID</label>
          <input />

          <label>Senha</label>
          <input type="password" />

          <button type="submit">Entrar</button>
        </FormContainer>

        <Footer>
          <span>All directs reserved by Salcomp @2020</span>
          <br />
          <span>Developed with love by Gabriel</span>
        </Footer>
      </LoginContainer>

      <ImageContainer>
        <img src={worldImg} alt="Mundo" />
      </ImageContainer>
    </Container>
  )
}

export default SignIn
