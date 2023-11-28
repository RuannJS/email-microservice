import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';
import { EmailRequest } from './dto/email.dto';

@Injectable()
export class AppService {
  constructor(@Inject('ms-send') private readonly sender: ClientProxy) {}

  sendEmail(data: EmailRequest) {
    this.sender.emit('send_email', data);
  }
}
