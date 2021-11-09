import { Request, Response } from "express";

import { UpdateSettingsService } from "../services/UpdateSettingsService";

class UpdateSettingsController {
  async update(request: Request, response: Response) {
    const { username } = request.params
    const { chat } = request.body

    const updateSettingsService = new UpdateSettingsService()

    const settings = await updateSettingsService.update(username, chat)

    return response.json(settings)
  }
}

export { UpdateSettingsController }