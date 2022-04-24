import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CasesService } from 'src/cases/cases.service';
import { TrackDto } from './dto/tracks.dto';
import { Track } from './tracks.model';

@Injectable()
export class TracksService {
  constructor(
    @InjectModel(Track) private trackRepository: typeof Track,
    private caseService: CasesService,
  ) {}

  async createTrack(dto: TrackDto) {
    const track = await this.trackRepository.create(dto);
    return track;
  }

  async getAllTracks() {
    const tracks = await this.trackRepository.findAll();
    return tracks;
  }

  async getTrackById(id: number) {
    const track = await this.trackRepository.findByPk(id);
    return track;
  }
}
