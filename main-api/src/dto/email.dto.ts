import { IsArray, IsString, IsNotEmpty } from 'class-validator';

export class EmailRequest {
  @IsNotEmpty()
  @IsArray()
  email: string;
}
