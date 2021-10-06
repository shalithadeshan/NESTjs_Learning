/* eslint-disable prettier/prettier */
import { StudentModule } from './../student/student.module';
import { StudentTeacherController } from './student-teacher.controller';
import { TeacherController } from './teacher.controller';
import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';

@Module({
  imports: [StudentModule],
  controllers: [StudentTeacherController, TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
