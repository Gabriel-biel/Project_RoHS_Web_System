import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface ILinkProps {
  isActive: boolean
}

export const Container = styled.div`
  grid-area: SB;
  padding: 32px 20px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100vh;

  img {
    margin-bottom: 60px;
  }
`

export const LinkSideBar = styled(Link)<ILinkProps>`
  width: 100%;
  height: 40px;
  margin-bottom: 2px;
  color: #505152;
  transition: transform 0.2s;

  display: flex;
  align-items: center;

  ${props =>
    props.isActive &&
    css`
      color: #725de8;
      font-weight: 600;
    `}

  &:hover {
    transform: translateX(10px);
  }
`
