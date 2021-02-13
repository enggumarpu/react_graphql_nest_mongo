import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './employee.service';
import { EmployeeEntity } from './employee.entity';
import { EmployeeResolver } from './employee.resolver'

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeEntity])
  ],
  providers: [EmployeeService, EmployeeResolver]
})
export class EmployeeModule {

}
