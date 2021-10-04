/* eslint-disable prettier/prettier */
import { StudentService } from './student.service';
import { FindStudentResponseDto } from './dto/student.dto';
import { StudentResponseDto } from './dto/student.dto';
import { UpdateStudentDto } from './dto/student.dto';
import { CreateStudentDto } from './dto/student.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';

@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get() // get all students
  getStudents(): FindStudentResponseDto[] {
    // return 'This action returns all students';
    return this.studentService.getStudents();
  }

  @Get('/:studentId') // get student by id
  // Param decorator access parameter from the url
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentResponseDto {
    // console.log(studentId);
    // return `This action returns a specific student of ${studentId}`;
    return this.studentService.getStudentById(studentId);
  }

  @Post() // create student
  // Body decorator get post body
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    // console.log(body);
    // return `This action creates a new student with following data ${JSON.stringify(
    //   body,
    // )}`;
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId') // update student
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    // return `This action updates a student with ID of ${studentId} with data of ${JSON.stringify(
    //   body,
    // )}`;
    return this.studentService.updateStudent(body, studentId);
  }
}
