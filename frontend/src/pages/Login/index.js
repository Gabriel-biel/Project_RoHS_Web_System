import React from 'react'
import { useHistory } from 'react-router-dom'

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

  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()

    history.push('dashboard')
  }

  return (
    <Wrapper>
      <LoginContainer>
        <LogoContainer>
          <img src={logoRohs} alt="Logo Rohs"/>
        </LogoContainer>
        <FormContainer>
          <LoginText>Faça seu login</LoginText>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <InputContainer>  
              <Label>
                ID
                <InputEmail placeholder="Sua ID" />
              </Label>
            </InputContainer>

            <InputContainer> 
              <Label>
                Senha
                <InputPassword placeholder="Senha" type="password" />
              </Label>
            </InputContainer>
            <ButtonSubmit type="submit">
              <TextButton>Entrar</TextButton>
            </ButtonSubmit>
          </Form>
        </FormContainer>
      <Footer>
        <FooterText>
          All directs reserved by Salcomp @2020 <br />
          Developed with love by Vinnie ❤
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