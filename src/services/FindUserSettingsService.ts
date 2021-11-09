import { getCustomRepository, Repository } from "typeorm"

import { SettingsRepository } from "../repositories/SettingsRepository"
import { Setting } from "../entities/Setting"

class SettingsService {
  private settingsRepository: Repository<Setting>

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository)
  }

  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({
      username
    })

    return settings
  }
}

export { SettingsService }