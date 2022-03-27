import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface MessagesCreationOptions {
  userId: number;
  name: string;
  text: string;
}

@Table({ tableName: 'messages' })
export class Messages extends Model<Messages, MessagesCreationOptions> {
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  text: string;
}
