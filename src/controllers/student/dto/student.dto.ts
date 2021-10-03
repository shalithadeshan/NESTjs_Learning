/* eslint-disable prettier/prettier */
export class FindStudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class StudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class CreateStudentDto {
  name: string;
  teacher: string;
}

export class UpdateStudentDto {
  id: string;
  name: string;
  teacher: string;
}
