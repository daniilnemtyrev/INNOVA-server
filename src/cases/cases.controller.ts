import { Body, Controller, Get, Post } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CaseDto } from './dto/cases.dto';
import { GetCasesDto } from './dto/getCases.dto';

@Controller('cases')
export class CasesController {
  constructor(private caseService: CasesService) {}

  @Post('/create')
  create(@Body() trackDto: CaseDto) {
    return this.caseService.createCase(trackDto);
  }

  @Post('/getCasesByTrackId')
  getCasesByTrackId(@Body() data: GetCasesDto) {
    console.log(data);

    return this.caseService.getCasesByTrackId(data);
  }
}
