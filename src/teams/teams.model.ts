import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Track } from 'src/tracks/tracks.model';
import { User } from 'src/users/users.model';

interface CaseCreationOptions {
  name: string;
  trackId: number;
  description: string;
}

@Table({ tableName: 'teams', createdAt: false, updatedAt: false })
export class Team extends Model<Team, CaseCreationOptions> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  name: string;

  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @HasMany(() => User)
  users: User[];
}
