import { Button } from '../components/Button'
import { Input } from '../components/Input'
import styles from './login.module.scss'

export default function Login(): JSX.Element {
  return (
    <div className={styles.container}>
      <form>
        <h1>Login</h1>

        <Input name="id" label="ID" />

        <Input name="password" label="Password" />

        <Button />
      </form>

      <section>
        <img src="/images/world.png" alt="World" />
      </section>
    </div>
  )
}
