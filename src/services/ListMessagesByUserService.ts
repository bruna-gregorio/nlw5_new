import { CreateMessagesService } from "../services/CreateMessagesService"


class ListMessagesByUserService extends CreateMessagesService {
  async listByUser(user_id: string) {
    const list = await this.messagesRepository.find({
      where: { user_id },
      relations: ["user"]
    })

    return list
  }
}

export { ListMessagesByUserService }