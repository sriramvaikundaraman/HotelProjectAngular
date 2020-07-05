import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders():Leader[]{
    return LEADERS;
  }

  getLeader(id:String):Leader{
    return LEADERS.filter((leader)=>{
      if(leader.id===id)
      return leader;
    })[0];
  }

  getFeaturedLeader():Leader{
    return LEADERS.filter((leader)=>{
      if(leader.featured==true)
      return leader;
    })[0];
  }
}
