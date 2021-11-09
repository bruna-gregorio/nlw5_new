import { Request, Response } from "express"

import { ListMessagesByUserService } from "../services/ListMessagesByUserService"


class ListMessagesByUserController {
  async showByUser(request: Request, response: Response) {
    const { id } = request.params

    const messagesService = new ListMessagesByUserService()

    const list = await messagesService.listByUser(id)

    return response.json(list)
  }
}

export { ListMessagesByUserController }