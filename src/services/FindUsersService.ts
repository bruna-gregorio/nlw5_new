import { CreateUsersService } from "./CreateUsersService"


class FindUsersService extends CreateUsersService {
  async findByEmail(email: string) {
    const userExists = await this.usersRepository.findOne({
      email
    })

    return userExists
  }
}

export { FindUsersService }