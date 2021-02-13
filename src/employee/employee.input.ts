import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class EmployeeCreateInput{

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
export class UpdateEmployeeInput{
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