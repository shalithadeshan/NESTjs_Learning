/* eslint-disable prettier/prettier */
import { ParseUUIDPipe } from '@nestjs/common';
import { StudentService } from './../student/student.service';
import { FindStudentResponseDto } from './../student/dto/student.dto';
import { StudentResponseDto } from './../student/dto/student.dto';
import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('/teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private studentService: StudentService) {}
  @Get()
  getStudents(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentResponseDto[] {
    // return `get all student that belongs to the Teacher with ${teacherId}`;
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): StudentResponseDto {
    // return `update student with id of ${studentId} to teacher with id of ${teacherId}`;
    return this.studentService.updateStudentTeacher(studentId, teacherId);
  }
}
