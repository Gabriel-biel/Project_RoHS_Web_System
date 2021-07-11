import { ICreateAdminDTO } from '../dtos/ICreateAdminDTO'
import { Admin } from '../infra/typeorm/entities/Admin'

export interface IAdminsRepository {
  create(data: ICreateAdminDTO): Promise<void>
  findAdmin(): Promise<Admin | undefined>
}
