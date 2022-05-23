import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from 'src/users/users.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './teams.model';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team) private teamRepository: typeof Team,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
  ) {}

  async createTeam(dto: CreateTeamDto) {
    const team = await this.teamRepository.create({
      name: dto.name,
    });
    await this.usersService.setTeam({ teamId: team.id, userId: dto.userId });
    return team;
  }
}
