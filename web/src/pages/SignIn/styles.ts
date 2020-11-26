import styled from 'styled-components'
import { Form } from '@unform/web'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: space-between;
`

export const LoginContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;

  img {
    width: 250px;
  }
`

export const FormContainer = styled(Form)`
  min-width: 400px;
  h1 {
    color: #505152;
    font-weight: 600;
    display: block;
    margin: 20px 0;
  }

  label {
    display: block;
    margin-bottom: 8px;
    color: #92d550;
  }
`

export const Footer = styled.footer``

export const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 400px;
  }
`
