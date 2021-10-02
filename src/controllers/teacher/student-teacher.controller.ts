/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('/teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string) {
    return `get all student that belongs to the Teacher with ${teacherId}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('studentId') studentId: string,
    @Param('teacherId') teacherId: string,
  ) {
    return `update student with id of ${studentId} to teacher with id of ${teacherId}`;
  }
}
