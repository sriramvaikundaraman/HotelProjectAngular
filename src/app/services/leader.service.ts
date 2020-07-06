import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders():Promise<Leader[]>{
    return Promise.resolve(LEADERS);
  }

  getLeader(id:String):Promise<Leader>{
    return Promise.resolve(LEADERS.filter((leader)=>{
      if(leader.id===id)
      return leader;
    })[0]);
  }

  getFeaturedLeader():Promise<Leader>{
    return Promise.resolve(LEADERS.filter((leader)=>{
      if(leader.featured==true)
      return leader;
    })[0]);
  }
}
