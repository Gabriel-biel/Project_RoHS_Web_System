import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: FieldError
}

export function Input({
  name,
  label = null,
  error = null,
  ...rest
}: InputProps): JSX.Element {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>

      <input id={name} name={name} {...rest} />
    </div>
  )
}
