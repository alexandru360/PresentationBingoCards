import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingsModule } from 'meeting/meeting.module';

@Module({
  imports: [ContactsModule, MeetingsModule,
  TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
 })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
