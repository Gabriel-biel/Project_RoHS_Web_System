import React from 'react'

import logoRohs from '../../assets/rohs.png'
import world from '../../assets/world.png'

import {
  Wrapper,
  LoginContainer,
  LogoContainer,
  FormContainer,
  LoginText,
  Form,
  InputContainer,
  Label,
  InputEmail,
  InputPassword,
  ButtonSubmit,
  TextButton,
  ImageContainer,
  WorldImageContainer,
  Footer,
  FooterText
} from './styles'

function Login() {
  return (
    <Wrapper>
      <LoginContainer>
        <LogoContainer>
          <img src={logoRohs} alt="Logo Rohs"/>
        </LogoContainer>
        <FormContainer>
          <LoginText>Faça seu login</LoginText>
          <Form>
            <InputContainer>  
              <Label>
                ID
                <InputEmail placeholder="Sua ID" />
              </Label>
            </InputContainer>

            <InputContainer> 
              <Label>
                Senha
                <InputPassword placeholder="Senha" />
              </Label>
            </InputContainer>
            <ButtonSubmit>
              <TextButton>Entrar</TextButton>
            </ButtonSubmit>
          </Form>
        </FormContainer>
      <Footer>
        <FooterText>
          All directs reserved by Salcomp @2020
        </FooterText>
      </Footer>
      </LoginContainer>

      <ImageContainer>
        <WorldImageContainer>
          <img src={world} alt="World Image" style={{ width: '80%'}}/>
        </WorldImageContainer>
      </ImageContainer>
    </Wrapper>
  )
}

export default Login