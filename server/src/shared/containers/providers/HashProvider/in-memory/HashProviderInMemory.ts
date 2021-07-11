import { IHashProvider } from '../models/IHashProvider'

export class HashProviderInMemory implements IHashProvider {
  async generateHash(payload: string): Promise<string> {
    return payload
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed
  }
}
