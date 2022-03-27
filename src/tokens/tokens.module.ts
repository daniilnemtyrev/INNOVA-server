import { SequelizeModule } from '@nestjs/sequelize';
import { forwardRef, Module } from '@nestjs/common';
import { TokenService } from './tokens.service';
import { Token } from './tokens.model';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  providers: [TokenService],
  imports: [
    SequelizeModule.forFeature([Token]),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'QWERTY',
    }),
  ],
  exports: [TokenService, JwtModule],
})
export class TokensModule {}
