import { getCustomRepository, Repository } from "typeorm"

import { MessagesRepository } from "../repositories/MessagesRepository"
import { Message } from "../entities/Message"


class ListMessagesByUserService {
  private messagesRepository: Repository<Message>

  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository)
  }

  async listByUser(user_id: string) {
    const list = await this.messagesRepository.find({
      where: { user_id },
      relations: ["user"]
    })

    return list
  }
}

export { ListMessagesByUserService }