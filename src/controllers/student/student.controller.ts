/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get() // get all students
  getStudents() {
    return 'This action returns all students';
  }

  @Get('/:studentId') // get student by id
  // Param decorator access parameter from the url
  getStudentById(@Param('studentId') studentId: string) {
    // console.log(studentId);
    return `This action returns a specific student of ${studentId}`;
  }

  @Post() // create student
  // Body decorator get post body
  createStudent(@Body() body) {
    // console.log(body);
    return `This action creates a new student with following data ${JSON.stringify(
      body,
    )}`;
  }

  @Put('/:studentId') // update student
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `This action updates a student with ID of ${studentId} with data of ${JSON.stringify(
      body,
    )}`;
  }
}
