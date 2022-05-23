import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';

import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Post('/create')
  create(@Body() teamsDto: CreateTeamDto) {
    return this.teamsService.createTeam(teamsDto);
  }
}
