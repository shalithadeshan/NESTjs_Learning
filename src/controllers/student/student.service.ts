/* eslint-disable prettier/prettier */
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';
import { students } from './../../db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  students = students;
  getStudents(): FindStudentResponseDto[] {
    return [...this.students];
  }

  getStudentById(studentID: string): FindStudentResponseDto {
    return this.students.find((student) => student.id === studentID);
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    const newStudent = {
      id: uuid(),
      ...payload,
    };
    this.students.push(newStudent);

    return newStudent;
  }

  updateStudent(
    payload: UpdateStudentDto,
    studentId: string,
  ): UpdateStudentDto {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
      }
      return updatedStudent;
    });
    this.students = updatedStudentList;
    return updatedStudent;
  }

  getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateStudentTeacher(teacherId: string, studentId: string) {
    let updatedStudent: StudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          teacher: teacherId,
          ...student,
        };
      }
      return student;
    });
    this.students = updatedStudentList;
    return updatedStudent;
  }
}
