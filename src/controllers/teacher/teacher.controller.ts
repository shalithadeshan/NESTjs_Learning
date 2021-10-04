/* eslint-disable prettier/prettier */
import { TeacherService } from './teacher.service';
import { FindTeacherResponseDto } from './dto/teacher.dto';
import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';

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
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindTeacherResponseDto {
    // return `Single Teacher with ID of ${teacherId}`;
    return this.teacherService.getTeacherById(teacherId);
  }
}
