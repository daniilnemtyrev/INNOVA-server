import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { Token } from './tokens/tokens.model';
import { AppGateway } from './chat/chat.gateway';
import { ChatModule } from './chat/chat.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { ProjectsModule } from './projects/projects.module';
import { CasesModule } from './cases/cases.module';
import { TracksModule } from './tracks/tracks.module';
import { Case } from './cases/cases.model';
import { Track } from './tracks/tracks.model';
import { Project } from './projects/project.model';
import { Messages } from './chat/chat-messages.model';
import { TeamsModule } from './teams/teams.module';

@Module({
  controllers: [],
  providers: [AppGateway],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'a45359_innova3',
      password: 'q1w2e3r4t5',
      database: 'a45359_innova3',
      models: [User, Token, Role, UserRoles, Case, Track, Project, Messages],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    ChatModule,
    RolesModule,
    ProjectsModule,
    CasesModule,
    TracksModule,
    TeamsModule,
  ],
})
export class AppModule {}
