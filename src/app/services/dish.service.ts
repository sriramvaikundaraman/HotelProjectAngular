import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes():Promise<Dish[]>{
    return Promise.resolve(DISHES);
  }
  
  getDish(id: string): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => {
      if(dish.id === id)
      return dish;
    }
    )[0]);
  }
  getFeaturedDish():Promise<Dish>{
    return Promise.resolve(DISHES.filter((dish)=>{
      if(dish.featured==true)
      return dish;
    })[0]);
  }
}
