import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailRequest } from './dto/email.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendEmail(@Body() data: EmailRequest) {
    this.appService.sendEmail(data);
  }
}
