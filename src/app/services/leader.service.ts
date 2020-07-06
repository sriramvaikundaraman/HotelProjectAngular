import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { resolve } from 'url';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders():Observable<Leader[]>{
    return of(LEADERS).pipe(delay(1000));
    
  }

  getLeader(id:String):Observable<Leader>{
    return of(LEADERS.filter((leader)=>{
      if(leader.id===id)
      return leader;
    })[0]).pipe(delay(1000));

  }

  getFeaturedLeader():Observable<Leader>{
    return of(LEADERS.filter((leader)=>{
      if(leader.featured==true)
      return leader;
    })[0]).pipe(delay(1000));

  }
}
