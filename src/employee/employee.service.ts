import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { EmployeeEntity } from './employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { EmployeeCreateInput, UpdateEmployeeInput } from './employee.input';
import { EmployeeType } from './employee.type';



@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(EmployeeEntity) private employeeRepo: Repository<EmployeeEntity>,
    ){}

    async getAllEmployees(): Promise<EmployeeEntity[]>{
        return this.employeeRepo.find();
    }

    async deleteEmployee(id): Promise<Boolean>{
        const em = await this.employeeRepo.findOne({id});
        const deleted = await this.employeeRepo.delete(em);
        //console.log(emd.affected.toString);
        if(deleted) {
            return true;
        }
        return false;
    }

    async updateEmployee(id: string, updateEmployeeInput:UpdateEmployeeInput): Promise<EmployeeType> {
        const user = await this.employeeRepo.findOne({id})

        await this.employeeRepo.update(user, { ...updateEmployeeInput });

        const userUpdated = this.employeeRepo.create({ ...user, ...updateEmployeeInput })
        
        return userUpdated;
    }

    async createEmployee(createEmployeeInput: EmployeeCreateInput): Promise<EmployeeEntity>{
        const { firstName, lastName, email, salary, departmentID } = createEmployeeInput;

        const employee = this.employeeRepo.create({
            id: uuidv4(),
            firstName,
            lastName,
            email,
            salary, 
            departmentID
        });

        return this.employeeRepo.save(employee);
    }
}
