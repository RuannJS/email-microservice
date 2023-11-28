import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer/dist';
import { EmailRequest } from './model/email.interface';

@Injectable()
export class AppService {
  constructor(private readonly mailer: MailerService) {}

  sendEmail(data: EmailRequest) {
    this.mailer
      .sendMail({
        to: data.email,
        from: process.env.USER,
        subject: 'Sending from Microservice',
        template: 'index',
        context: {
          name: process.env.NAME,
          github: process.env.GITHUB,
          linkedin: process.env.LINKEDIN,
        },
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
