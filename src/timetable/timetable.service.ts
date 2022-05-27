import { Injectable } from '@nestjs/common';
import { TimetableDto } from './dto/timetable.dto';

@Injectable()
export class TimetableService {
  create(createTimetableDto: TimetableDto) {
    return 'This action adds a new timetable';
  }

  findAll() {
    return `This action returns all timetable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} timetable`;
  }

  update(id: number, updateTimetableDto: TimetableDto) {
    return `This action updates a #${id} timetable`;
  }

  remove(id: number) {
    return `This action removes a #${id} timetable`;
  }
}
