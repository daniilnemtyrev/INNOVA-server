import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetProjectDto } from './dto/get-project';
import { ProjectDto } from './dto/project.dto';
import { Project } from './project.model';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project) private projectRepository: typeof Project,
  ) {}

  async createProject(dto: ProjectDto) {
    const project = await this.projectRepository.create(dto);
    return project;
  }

  async getProjectById(dto: GetProjectDto) {
    const projects = await this.projectRepository.findOne({
      where: { id: dto.id },
    });

    return projects;
  }
}
