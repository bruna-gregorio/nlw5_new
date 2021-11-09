import { Request, Response } from "express";

import { SettingsService } from "../services/FindUserSettingsService";


class FindUserSettingsController {
  async findByUsername(request: Request, response: Response) {
    const { username } = request.params

    const settingsService = new SettingsService()

    const settings = await settingsService.findByUsername(username)

    return response.json(settings)
  }
}

export { FindUserSettingsController }