import { Body, Controller, Post } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CaseDto } from './dto/cases.dto';

@Controller('cases')
export class CasesController {
  constructor(private caseService: CasesService) {}

  @Post('/create')
  create(@Body() trackDto: CaseDto) {
    return this.caseService.createCase(trackDto);
  }
}
