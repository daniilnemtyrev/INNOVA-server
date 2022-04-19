import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrackDto } from './dto/tracks.dto';
import { TracksService } from './tracks.service';

@Controller('tracks')
export class TracksController {
  constructor(private trackService: TracksService) {}

  @Post('/create')
  create(@Body() trackDto: TrackDto) {
    return this.trackService.createTrack(trackDto);
  }

  @Get('/getAll')
  getAll() {
    return this.trackService.getAllTracks();
  }
}
