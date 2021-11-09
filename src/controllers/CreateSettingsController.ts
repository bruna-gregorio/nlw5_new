import { Request, Response } from "express";

import { CreateSettingsService } from "../services/CreateSettingsService";


class CreateSettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body

    const createSettingsService = new CreateSettingsService()

    try {
      const settings = await createSettingsService.create({ chat, username })

      return response.json(settings)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }
}

export { CreateSettingsController }