import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface ILinkProps {
  isactive: boolean
}

export const Container = styled.div`
  grid-area: SB;
  padding: 32px 20px;
  background: linear-gradient(
      180deg,
      #ededed 44.27%,
      rgba(177, 221, 166, 0.47) 73.44%,
      rgba(104, 132, 112, 0.45) 100%
    ),
    rgba(46, 245, 13, 0.38);

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
    props.isactive &&
    css`
      color: #725de8;
      font-weight: 600;
    `}

  &:hover {
    transform: translateX(10px);
  }
`
