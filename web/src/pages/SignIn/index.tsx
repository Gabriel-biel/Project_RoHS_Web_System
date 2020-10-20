import React, { FormEvent, useCallback, useState } from 'react'

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
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault()

      console.log({ id, password })
    },
    [id, password]
  )

  return (
    <Container>
      <LoginContainer>
        <img src={logoRohs} alt="Rohs" />

        <FormContainer onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <label>ID</label>
          <input
            placeholder="Informe sua ID"
            value={id}
            onChange={e => {
              setId(e.target.value)
            }}
          />

          <label>Senha</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Informe sua senha"
            type="password"
          />

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
