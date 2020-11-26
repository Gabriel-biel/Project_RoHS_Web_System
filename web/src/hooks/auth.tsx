import React, { createContext, useCallback, useContext, useState } from 'react'
import api from '../services/api'

interface IAuthState {
  token: string
  provider: object
}

interface ISignInCredentials {
  identifier: string
  password: string
}

interface IAuthContext {
  provider: object
  signIn(credentials: ISignInCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Rohs:token')
    const provider = localStorage.getItem('@Rohs:provider')

    if (token && provider) {
      return { token, provider: JSON.parse(provider) }
    }

    return {} as IAuthState
  })

  const signIn = useCallback(
    async ({ identifier, password }: ISignInCredentials) => {
      const response = await api.post('sessions', {
        identifier,
        password
      })

      const { token, provider } = response.data

      localStorage.setItem('@Rohs:token', token)
      localStorage.setItem('@Rohs:provider', JSON.stringify(provider))

      setData({ token, provider })
    },
    []
  )

  const signOut = useCallback(() => {
    localStorage.removeItem('@Rohs:token')
    localStorage.removeItem('@Rohs:provider')

    setData({} as IAuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ provider: data.provider, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
