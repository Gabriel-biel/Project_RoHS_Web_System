import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface IContainerProps {
  isErrored: boolean
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div<IContainerProps>`
  background: #fff;
  padding: 16px;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 8px;

  border: 2px solid #f1f1f1;

  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: '#92d550';
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #92d550;
    `}

  input {
    background: transparent;
    flex: 1;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c43030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
