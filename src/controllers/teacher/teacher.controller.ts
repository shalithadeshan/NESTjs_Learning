/* eslint-disable prettier/prettier */
import { TeacherService } from './teacher.service';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('/teachers')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}
  @Get()
  getTeacher(): FindTeacherResponseDto[] {
    // return 'Hello Teacher';
    return this.teacherService.getTeacher();
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    // return `Single Teacher with ID of ${teacherId}`;
    return this.teacherService.getTeacherById(teacherId);
  }
}
