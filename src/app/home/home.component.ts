import { Component, OnInit,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import {Promotion} from '../shared/promotion';
import {PromotionService} from '../services/promotion.service';
import { LeaderService} from '../services/leader.service';
import { Leader } from '../shared/leader';
import { flyInOut,expand} from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host:{
    '[@flyInOut]':'true',
    'style': 'display: block;'

  },
  animations:[ flyInOut(),expand()]
})
export class HomeComponent implements OnInit {

  dish:Dish;
  promotion:Promotion;
  leader:Leader;
  dishErrMsg: String;
  promoErrMsg:String;
  leaderErrMsg:String;

  constructor(private dishService:DishService, private promotionService:PromotionService,private leaderService:LeaderService,
    @Inject('baseURL') private baseURL) 
    {

    }

  ngOnInit() {
    this.dishService.getFeaturedDish().subscribe((dish)=>this.dish=dish,errmsg=>this.dishErrMsg=<any>errmsg);
    this.promotionService.getFeaturedPromotion().subscribe((promotion)=>this.promotion=promotion, errmsg=>this.promoErrMsg=errmsg); 
    this.leaderService.getFeaturedLeader().subscribe((featuredleader)=>this.leader=featuredleader,errmsg=>this.leaderErrMsg=errmsg);
  }

}



