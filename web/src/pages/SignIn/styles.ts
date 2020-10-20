import styled from 'styled-components'

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

export const FormContainer = styled.form`
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

  input {
    width: 100%;
    height: 56px;
    margin-bottom: 10px;
    border-radius: 6px;
    padding: 0 24px;
  }

  button {
    width: 100%;
    margin: 12px 0;
    height: 56px;
    background: #92d550;
    border-radius: 6px;
    color: #fff;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
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
