import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'please access /api or /test for more data!';
  }
  

  
}
