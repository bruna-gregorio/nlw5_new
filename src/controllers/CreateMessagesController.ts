import { Request, Response } from "express"

import { CreateMessagesService } from "../services/CreateMessagesService"


class CreateMessagesController {
  async create(request: Request, response: Response) {
    const { admin_id, text, user_id } = request.body

    const createMessagesService = new CreateMessagesService()

    const message = await createMessagesService.create({
      admin_id,
      text,
      user_id
    })

    return response.json(message)
  }
}

export { CreateMessagesController }