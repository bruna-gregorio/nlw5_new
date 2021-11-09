import { getCustomRepository, Repository } from "typeorm"

import { SettingsRepository } from "../repositories/SettingsRepository"
import { Setting } from "../entities/Setting"


class UpdateSettingsService {
  private settingsRepository: Repository<Setting>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async update(username: string, chat: boolean) {
    await this.settingsRepository
      .createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where("username = :username", {
        username
      })
      .execute()
  }
}

export { UpdateSettingsService }