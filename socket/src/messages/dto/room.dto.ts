export class CreateRoomDto{
    name : string;
    password : string;
    isChannel: boolean;
}

export class CreateMembershipDto{
   roomId : number;
   userId : string;
   IsBanned :  Boolean;
   IsMuted : Boolean;
}

export class CreateRoomwithMemebrs{
    room: CreateRoomDto;
    member: CreateMembershipDto;
  }