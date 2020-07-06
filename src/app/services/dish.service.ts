import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes():Promise<Dish[]>{
    return new Promise( resolve=>{
      //Simulate a latency
      setTimeout(()=>resolve(DISHES),2000);
    });
  }
  
  getDish(id: string): Promise<Dish> {
    return new Promise( resolve=>{
      //Simulate a latency
      setTimeout(()=>resolve(DISHES.filter((dish) => {
      if(dish.id === id)
      return dish;
    })[0]),2000);
  });
}

  getFeaturedDish():Promise<Dish>{
    return new Promise( resolve=>{
      setTimeout(()=> resolve(DISHES.filter((dish)=>{
        if(dish.featured==true)
        return dish;
      })[0]),2000);
    });
     
 }
}
