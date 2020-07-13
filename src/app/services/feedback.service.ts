import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService} from './process-httpmsg.service';
import { Feedback} from '../shared/feedback';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  
  constructor(private http:HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

  putFeedback(feedback:Feedback): Observable<Feedback>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.http.post<Feedback>(baseURL+'feedback',feedback,httpOptions).pipe(catchError(this.processHTTPMsgService.handleError));

  }

  /*

  
  putDish(dish: Dish): Observable<Dish>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.http.put<Dish>(baseURL+'dishes/'+dish.id,dish,httpOptions).pipe(catchError(this.processHTTPMsgService.handleError));;
  }




  */
}
