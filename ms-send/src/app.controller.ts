import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { EmailRequest } from './model/email.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('send_email')
  sendEmail(data: EmailRequest) {
    this.appService.sendEmail(data);
  }
}
