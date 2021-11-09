import { Request, Response } from "express"

import { CreateUsersService } from "../services/CreateUsersService"


class CreateUsersController {
  async create(request: Request, response: Response): Promise<Response> { // ele so aceito return de response
    const { email } = request.body

    const usersService = new CreateUsersService()

    const user = await usersService.create(email)

    return response.json(user)
  }
}

export { CreateUsersController }