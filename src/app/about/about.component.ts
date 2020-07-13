import { Component, OnInit,Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';
import {flyInOut} from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style': 'display: block;'

  },
  animations:[ flyInOut()]
})
export class AboutComponent implements OnInit {

  leaders:Leader[];
  errMsg:String;

  constructor(private leaderService:LeaderService, @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.leaderService.getLeaders().subscribe((leaders=>this.leaders=leaders),errmsg=>this.errMsg=errmsg);
  }

}
