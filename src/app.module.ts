import { Module } from '@nestjs/common';
import { LessonModule } from './lesson/lesson.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './lesson/lesson.entity'
import { EmployeeModule } from './employee/employee.module';
import { EmployeeEntity } from './employee/employee.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://umar:123@cluster0.foq8i.mongodb.net/db?retryWrites=true&w=majority',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        LessonEntity,
        EmployeeEntity
      ]
    }),
    LessonModule,
    EmployeeModule,
    
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    
  ],
})
export class AppModule {}
