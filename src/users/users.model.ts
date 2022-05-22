import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { Messages } from 'src/chat/chat-messages.model';
import { Project } from 'src/projects/project.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { Token } from 'src/tokens/tokens.model';

interface UserCreationOptions {
  email: string;
  password: string;
}

@Table({ tableName: 'users', createdAt: false, updatedAt: false })
export class User extends Model<User, UserCreationOptions> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  surname: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  name: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  patronymic: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  birthdate: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  post_status: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  request_status: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  place_of_work_stud: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  phone: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  move_to: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  move_from: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  password: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
    defaultValue: 'Активный',
  })
  status: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Project)
  projects: Project[];

  @HasMany(() => Messages)
  messages: Messages[];

  @HasOne(() => Token)
  token: Token;
}
