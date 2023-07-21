import { Body, Controller, Get, Post } from "@nestjs/common";
import { PrismaClient } from '@prisma/client';
import { CreateRoomDto, CreateRoomwithMemebrs } from './dto/room.dto';
import { MessagesService } from "./messages.service";


 
@Controller('createroom')
export class RoomsController {
    constructor(private readonly messagesservice: MessagesService) {}


    @Post()
    async   createRoom(@Body() createroomwithmembers : CreateRoomwithMemebrs){       
        const {room, member} = createroomwithmembers;
        const createdroom = await this.messagesservice.createRoom(room);
        member.roomId = createdroom.RoomId;
        const createdmembership = await this.messagesservice.createMemberShip(member);
        return {
            room : createdroom,
            member : createdmembership,
        };
    }
}