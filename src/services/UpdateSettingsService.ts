import { Setting } from "../entities/Setting"
import { CreateSettingsService } from "./CreateSettingsService"


class UpdateSettingsService extends CreateSettingsService {
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