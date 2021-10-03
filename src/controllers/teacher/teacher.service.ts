/* eslint-disable prettier/prettier */
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { teachers } from './../../db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeacherService {
  teachers = teachers;
  getTeacher(): FindTeacherResponseDto[] {
    return [...this.teachers];
  }

  getTeacherById(id: string): FindTeacherResponseDto {
    return this.teachers.find((teacher) => teacher.id === id);
  }
}
