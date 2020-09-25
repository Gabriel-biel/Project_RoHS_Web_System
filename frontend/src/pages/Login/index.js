import React from 'react'

import {
  Wrapper,
  LoginContainer,
  FormContainer,
  LoginText,
  Form,
  InputContainer,
  Label,
  InputEmail,
  InputPassword,
  ButtonSubmit,
  TextButton,
  ImageContainer
} from './styles'

function Login() {
  return (
    <Wrapper>
      <LoginContainer>
        <FormContainer>
          <LoginText>Faça seu login</LoginText>
          <Form>
            <InputContainer>  
              <Label>
                Email
                <InputEmail placeholder="E-mail" />
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
      </LoginContainer>

      <ImageContainer>
        RightSide
      </ImageContainer>
    </Wrapper>
  )
}

export default Login