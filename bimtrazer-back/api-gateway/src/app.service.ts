import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('BlockService') private readonly clientBlockService: ClientProxy,
  ) {}

  hello(): Observable<string> {
    const pattern = { cmd: 'hello' };
    const payload = {};
    return this.clientBlockService.send(pattern, payload);
  }
}
