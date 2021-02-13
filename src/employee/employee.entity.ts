import { Entity, ObjectIdColumn, PrimaryColumn, Column, Unique } from 'typeorm';

@Entity()
export class EmployeeEntity{

    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string

    @Column()
    salary: number

    @Column()
    departmentID: number
}