import { TeacherService } from './controllers/teacher/teacher.service';
import { StudentService } from './controllers/student/student.service';
import { StudentTeacherController } from './controllers/teacher/student-teacher.controller';
import { TeacherController } from './controllers/teacher/teacher.controller';
/* eslint-disable prettier/prettier */
import { StudentController } from './controllers/student/student.controller';
// root of the application
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [StudentTeacherController, StudentController, TeacherController],
  providers: [TeacherService, StudentService],
})
export class AppModule {}
