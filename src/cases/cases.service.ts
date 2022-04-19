import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TracksService } from 'src/tracks/tracks.service';
import { Case } from './cases.model';
import { CaseDto } from './dto/cases.dto';

interface ICase {
  id: number;
  name: string;
  description: string;
  trackId: string;
}

@Injectable()
export class CasesService {
  constructor(
    @InjectModel(Case) private casesRepository: typeof Case,
    @Inject(forwardRef(() => TracksService))
    private tracksService: TracksService,
  ) {}

  async createCase(dto: CaseDto) {
    const caseDto = await this.casesRepository.create(dto);
    const track = await this.tracksService.getTrackById(dto.trackId);
    const thisTrackCases = await this.getCasesByTrackId(track.trackId);

    if (caseDto && track && thisTrackCases.length === 0) {
      await track.$set('cases', [caseDto.id]);
      return caseDto;
    }

    if (caseDto && track && thisTrackCases.length > 0) {
      await track.$add('cases', caseDto.id);
      return caseDto;
    }

    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND,
    );
  }

  async getCasesByTrackId(id: number) {
    const cases = await this.casesRepository.findAll({
      where: { trackId: id },
    });
    return cases;
  }
}
