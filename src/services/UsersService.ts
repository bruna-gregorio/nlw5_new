import { getCustomRepository } from "typeorm"

import { UsersRepository } from "../repositories/UsersRepository"


class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository)

    const userExists = await usersRepository.findOne({
      email
    })

    if (userExists) {
      return userExists
    }

    const users = usersRepository.create({
      email
    })

    await usersRepository.save(users)

    return users
  }
}

export { UsersService }