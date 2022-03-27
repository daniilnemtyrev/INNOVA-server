import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { Token } from './tokens/tokens.model';
import { AppGateway } from './chat/chat.gateway';
import { ChatModule } from './chat/chat.module';

@Module({
  controllers: [],
  providers: [AppGateway],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Token],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    ChatModule,
  ],
})
export class AppModule {}
