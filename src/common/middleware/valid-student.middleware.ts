/* eslint-disable prettier/prettier */
import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { students } from 'src/db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('ValidStudentMiddleware');
    const studentID = req.params.studentId;
    const studentExists = students.some((student) => {
      return student.id === studentID;
    });
    if (!studentExists) {
      throw new HttpException('Student not found', 404);
    }
    next();
  }
}
