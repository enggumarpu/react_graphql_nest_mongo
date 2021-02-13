import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { stringify } from 'querystring';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
    constructor( private lessonRepos: LessonService  
    ){}
    @Query(returns => LessonType)
    getlesson(
        @Args('id') id: string,
    ){
        // return {
        //     id: '111111113333',
        //     name: 'hello',
        //     startDate: new Date().toISOString(),
        //     endDate: new Date().toISOString(),  
        // };
        return this.lessonRepos.getLesson(id);
    }
    @Query(returns => [LessonType])
    getAllLessons(){
        return this.lessonRepos.getAllLessons()
    }
    @Mutation(returns => LessonType)
    createLesson(
        @Args('name') name: string,
        @Args('startDate') startDate: string,
        @Args('endDate') endDate: string
    ){
        return this.lessonRepos.createLesson(name, startDate, endDate);
    }
    
}