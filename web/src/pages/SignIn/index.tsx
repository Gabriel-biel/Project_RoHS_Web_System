import React, { useCallback, useRef } from 'react'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

import { FormHandles } from '@unform/core'

import { useToast } from '../../hooks/toast'
import { useAuth } from '../../hooks/auth'

import logoRohs from '../../assets/rohs.png'
import worldImg from '../../assets/world.png'

import Button from '../../components/Button'
import Input from '../../components/Input'

import {
  Container,
  LoginContainer,
  ImageContainer,
  FormContainer,
  Footer
} from './styles'
import getValidationErrors from '../../utils/getValidationErrors'

interface ISignInFormData {
  identifier: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const history = useHistory()

  const { addToast } = useToast()
  const { signIn, provider } = useAuth()

  console.log(provider)

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          identifier: Yup.string().required('ID obrigatório'),
          password: Yup.string().required('Senha obrigatória')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        await signIn({
          identifier: data.identifier,
          password: data.password
        })

        history.push('/dashboard')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais'
        })
      }
    },
    [addToast, signIn, history]
  )

  return (
    <Container>
      <LoginContainer>
        <img src={logoRohs} alt="Rohs" />

        <FormContainer ref={formRef} onSubmit={data => handleSubmit(data)}>
          <h1>Faça seu login</h1>

          <label>ID</label>
          <Input name="identifier" placeholder="Informe sua ID" />

          <label>Senha</label>
          <Input
            name="password"
            type="password"
            placeholder="Informe sua senha"
          />

          <Button type="submit">Entrar</Button>
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
