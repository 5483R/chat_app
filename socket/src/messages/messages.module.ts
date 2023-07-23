import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { RoomsController } from './messages.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  providers: [MessagesGateway, MessagesService, PrismaClient],
  controllers: [RoomsController]
})
export class MessagesModule {}