import { Module, NestModule,MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeetingsModule } from './meeting/meeting.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { ServeStaticMiddleware } from '@nest-middlewares/serve-static';

@Module({
  
  imports: [MeetingsModule,
    ServeStaticModule
    .forRoot({
      rootPath: join(__dirname, '..', 'dist','bingo-cards-ui'),
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    ServeStaticMiddleware.configure('/test' );
    consumer
      .apply(ServeStaticMiddleware)
      .forRoutes('/test');
  }
}