import { getCustomRepository, Repository } from "typeorm"

import { MessagesRepository } from "../repositories/MessagesRepository"
import { Message } from "../entities/Message"

interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}


class CreateMessagesService {
  private messagesRepository: Repository<Message>

  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository)
  }

  async create({ admin_id, text, user_id }: IMessageCreate) {
    const message = this.messagesRepository.create({
      admin_id,
      text,
      user_id
    })

    await this.messagesRepository.save(message)

    return message
  }
}

export { CreateMessagesService }