import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity('admins')
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  admin_id: number

  @Column()
  password: string

  @CreateDateColumn()
  created_at: Date
}
