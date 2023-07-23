import { Body, Controller, Get, Post } from "@nestjs/common";
import { PrismaClient } from '@prisma/client';
import { CreateRoomDto, CreateRoomwithMemebrs } from './dto/room.dto';
import { MessagesService } from "./messages.service";


 
@Controller('room')
export class RoomsController {
    constructor(private readonly messagesservice: MessagesService) {}


    @Post('/create')
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


    //get messages base on room id 
    //delete group  base on room id {1-delete membrships+ 2-delete messages + 3-delete room}
    //kick from group
    //add membership
    //quite group
    //send message(store on database)
}