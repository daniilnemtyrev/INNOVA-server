import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface InviteCreationOptions {
  invitedUserId: number;
  teamId: number;
  senderName: string;
}

@Table({ tableName: 'invites', createdAt: false, updatedAt: false })
export class Invite extends Model<Invite, InviteCreationOptions> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  invitedUserId: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  teamId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  senderName: string;

  @BelongsTo(() => User)
  user: User;
}
