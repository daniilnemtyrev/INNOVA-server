import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { TokensModule } from 'src/tokens/tokens.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { ChatModule } from 'src/chat/chat.module';
import { Messages } from 'src/chat/chat-messages.model';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    forwardRef(() => ChatModule),
    forwardRef(() => UsersModule),
    forwardRef(() => TokensModule),
    SequelizeModule.forFeature([User]),
    SequelizeModule.forFeature([Messages]),
  ],
  exports: [AuthService],
})
export class AuthModule {}
