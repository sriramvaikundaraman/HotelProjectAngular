import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes():Observable<Dish[]>{
    return of(DISHES).pipe(delay(1000));
  
  }
  
  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => {
      if(dish.id === id)
      return dish;
    })[0]).pipe(delay(1000));
}

  getFeaturedDish():Observable<Dish>{
    return of(DISHES.filter((dish)=>{
      if(dish.featured==true)
      return dish;
    })[0]).pipe(delay(1000));
     
 }




 getDishIds():Observable< String[] | any>{
   return of(DISHES.map(dish=>dish.id)).pipe(delay(1000));

 }
}
