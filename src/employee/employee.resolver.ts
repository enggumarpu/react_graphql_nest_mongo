import { Query } from '@nestjs/graphql';
import {EmployeeService} from './employee.service';
import { Resolver, Mutation, Args, Field, InputType } from '@nestjs/graphql';
import { EmployeeType } from './employee.type';

import { IsNull } from 'typeorm';
//import { EmployeeCreateInput } from './employee.input';


@InputType()
class EmployeeCreateInput{
    @Field()
    firstName: string;

    @Field()
    lastName: string;
    
    @Field()
    email: string;

    @Field()
    salary: number;

    @Field()
    departmentID: number;
}
@InputType()
class UpdateEmployeeInput{
    @Field()
    firstName: string;

    @Field()
    lastName: string;
    
    @Field()
    email: string;

    @Field()
    salary: number;

    @Field()
    departmentID: number;
}




@Resolver(of=>EmployeeType)
export class EmployeeResolver{
    constructor(
        private employeeRep: EmployeeService
    ){}
    
    @Query(returns => [EmployeeType])
    getAllLessons(){
        return this.employeeRep.getAllEmployees()
    }    

    @Mutation(returns => EmployeeType)
    updateEmployee(
        @Args('id') id: string,
        @Args('updateEmployeeInput') updateEmployeeInput: UpdateEmployeeInput
    ){
        return this.employeeRep.updateEmployee(
            id, 
            updateEmployeeInput
        )
    }

    @Mutation(returns => Boolean)
    deleteEmployee(
        @Args('id') id: string
    ){
        return this.employeeRep.deleteEmployee(id)
    }
    // @Mutation(returns => EmployeeType)
    // createEmployee(
    //     @Args('firstName') firstName: string,
    //     @Args('lastName') lastName: string,
    //     @Args('email') email: string,
    //     @Args('salary') salary: number,
    //     @Args('departmentID')  departmentID: number,   
    // ){
    //     return this.employeeRep.createEmployee(firstName, lastName, email, salary, departmentID)
    // } 
    @Mutation(returns => EmployeeType)
    createEmployee(
        @Args('createEmployeeInput') createEmployeeInput: EmployeeCreateInput,
    ){
        return this.employeeRep.createEmployee(createEmployeeInput)
    } 
}