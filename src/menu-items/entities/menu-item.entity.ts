import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MenuItem {
  constructor(data?: Partial<MenuItem>) {
    Object.assign(this, data);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ type: 'integer', default: null })
  @ManyToOne((type) => MenuItem, (menuItem) => menuItem.children)
  parentId: number;

  @Column({ type: 'datetime' })
  createdAt: string;

  @OneToMany((type) => MenuItem, (menuItem) => menuItem.parentId)
  children: MenuItem[];
}
