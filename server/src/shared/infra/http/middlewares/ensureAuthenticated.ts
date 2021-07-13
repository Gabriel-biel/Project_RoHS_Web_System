import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '@config/auth'
import { AdminsRepository } from '@modules/admins/infra/typeorm/repositories/AdminsRepository'
import { AppError } from '@shared/errors/AppError'

interface IPayload {
  sub: string
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization

  if (authHeader) {
    throw new AppError('Token missing!', 401)
  }

  const [, token] = authHeader.split(' ')

  const { secret } = authConfig.jwt

  try {
    const { sub: id } = verify(token, secret) as IPayload

    const adminsRepository = new AdminsRepository()

    const admin = await adminsRepository.findById(id)

    if (!admin) {
      throw new AppError('Admin does not exists!', 404)
    }

    return next()
  } catch {
    throw new AppError('Invalid token!', 401)
  }
}
