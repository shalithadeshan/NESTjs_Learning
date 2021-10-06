import { TeacherModule } from './controllers/teacher/teacher.module';
import { StudentModule } from './controllers/student/student.module';
/* eslint-disable prettier/prettier */
// root of the application
import { Module } from '@nestjs/common';

@Module({
  imports: [TeacherModule, StudentModule],
})
export class AppModule {}
