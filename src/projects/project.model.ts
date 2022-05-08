import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface ProjectCreationOptions {
  trackId: number;
  trackName: string;
  trackDescription: string;
  caseId: number;
  caseName: string;
  caseDescription: string;
  name: string;
  description: string;
  auditorium: string;
  prototype: string;
  economy: string;
  marketing: string;
}

@Table({ tableName: 'projects', createdAt: false, updatedAt: false })
export class Project extends Model<Project, ProjectCreationOptions> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  trackId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  trackName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  trackDescription: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  caseId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  caseName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  caseDescription: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({ type: DataType.STRING, allowNull: false })
  auditorium: string;

  @Column({ type: DataType.STRING, allowNull: false })
  prototype: string;

  @Column({ type: DataType.STRING, allowNull: false })
  economy: string;

  @Column({ type: DataType.STRING, allowNull: false })
  marketing: string;

  @BelongsTo(() => User)
  users: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: true })
  userId: number;
}
