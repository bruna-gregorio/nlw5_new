import { CreateSettingsService } from "./CreateSettingsService"

class FindUserSettingsService extends CreateSettingsService {
  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({
      username
    })

    return settings
  }
}

export { FindUserSettingsService }