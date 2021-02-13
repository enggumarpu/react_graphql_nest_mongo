import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class EmployeeType {

    @Field(type => ID)
    id: string;
    @Field()
    firstName: string;
    @Field()
    lastName: string;
    @Field()
    email: string;
    @Field()
    salary: number
    @Field()
    departmentID: number

} 