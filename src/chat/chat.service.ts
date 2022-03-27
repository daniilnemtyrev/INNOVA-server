import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Messages } from './chat-messages.model';
import { MessageDto } from './dto/messages.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Messages) private messagesRepository: typeof Messages,
  ) {}
  async saveMessages(messageDto: MessageDto[]) {
    console.log(messageDto);
    await Promise.all(
      messageDto.map(async (message): Promise<MessageDto> => {
        return await this.messagesRepository.create(message);
      }),
    );
  }
}
