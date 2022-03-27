import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { Messages } from './chat-messages.model';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
  controllers: [ChatController],
  providers: [ChatService],
  imports: [
    SequelizeModule.forFeature([Messages]),
    forwardRef(() => AuthModule),
  ],
  exports: [ChatService],
})
export class ChatModule {}
