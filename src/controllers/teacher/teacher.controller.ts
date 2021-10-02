/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';

@Controller('/teachers')
export class TeacherController {
  @Get()
  getTeacher() {
    return 'Hello Teacher';
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string) {
    return `Single Teacher with ID of ${teacherId}`;
  }
}
