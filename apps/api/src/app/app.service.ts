import { Injectable } from '@nestjs/common';
import { Message } from '@typescript-stack/types';

@Injectable()
export class AppService {
  getData(): Message {
    return {
      title: 'Sweet',
      value: 'This message is working'
    };
  }
}
