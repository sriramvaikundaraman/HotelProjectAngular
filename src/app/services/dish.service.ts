import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes():Dish[]{
    return DISHES;
  }
  getDish(id: string): Dish {
    return DISHES.filter((dish) => {
      if(dish.id === id)
      return dish;
    }
    )[0];
  }
  getFeaturedDish():Dish{
    return DISHES.filter((dish)=>{
      if(dish.featured==true)
      return dish;
    })[0];
  }
}
