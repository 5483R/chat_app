export class CreateRoomDto{
    name : string;
    password : string;
    isChannel: boolean;
}

export class CreateMembershipDto{
   roomId : number;
   userId : string;
   IsBanned :  boolean;
   IsMuted : boolean;
}

export class CreateRoomwithMemebrs{
    room: CreateRoomDto;
    member: CreateMembershipDto;
  }