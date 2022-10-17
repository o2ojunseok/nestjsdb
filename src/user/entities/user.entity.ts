import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ unique: true, length: 30, nullable: false, })
  userName: string;

  @Column({ nullable: false })
  password: string;
}
