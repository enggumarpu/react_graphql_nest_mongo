import { Injectable, ParseUUIDPipe } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LessonEntity } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(LessonEntity) private lessonRepo: Repository<LessonEntity>
    ){}

    async getAllLessons(): Promise<LessonEntity[]>{
        return this.lessonRepo.find();
    }
    async getLesson(id: string): Promise<LessonEntity>{
        return this.lessonRepo.findOne({id})
    }
    async createLesson (name, startDate, endDate): Promise<LessonEntity>{
        const lessonSer = this.lessonRepo.create({
            id: uuidv4(),
            name,
            startDate,
            endDate,
        });
        return this.lessonRepo.save(lessonSer);

    }
}
