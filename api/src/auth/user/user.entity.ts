import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Define the UserRole enum
export enum UserRole {
  Admin = 'admin',
  User = 'user',
  // other roles...
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  user: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // Add the UserRole as a column
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.User, // Default role if needed
  })
  role: UserRole;
}
