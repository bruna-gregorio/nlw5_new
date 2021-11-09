import { getCustomRepository, Repository } from "typeorm"

import { UsersRepository } from "../repositories/UsersRepository"
import { User } from "../entities/User"


class FindUsersService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository)
  }

  async findByEmail(email: string) {
    const userExists = await this.usersRepository.findOne({
      email
    })

    return userExists
  }
}

export { FindUsersService }