import { Component, OnInit,Input, ViewChild,Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import {Params,ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CommentFormDeclaration } from '../shared/commentform';
import { DISHES } from '../shared/dishes';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish:Dish;
    dishIds:String[];
    prev: String;
    next: String;
    rate:number;
    d = new Date();
    alldishes=DISHES;
    temp:any=[];
    temparray:any;
    errMsg : String;
    dishcopy:Dish;


    commentForm: FormGroup;
    comments:CommentFormDeclaration;


    formErrors = {
      'author': '',
      'comment': ' ',
      'rating':'',
    };
  
    validationMessages = {
      'author': {
        'required':      'First Name is required.',
        'minlength':     'First Name must be at least 2 characters long.',
        'maxlength':     'FirstName cannot be more than 25 characters long.'
      },
      'comment': {
        'required':      'Comment box can never be empty.'     
      },
      'rating':{
        'required': 'Rating cannot be empty'
      }
    };

    @ViewChild('fform') commentFormDirective;

    selectedDish=Dish;
    constructor(private dishservice:DishService,
      private route:ActivatedRoute,
      private location:Location,
      private fb:FormBuilder,
      @Inject('baseURL') private baseURL ) {
        this.createForm();
        
       }

    
    pitch(event: any) {
        console.log(event.value);
        this.rate=event.value;
        
       }

    
  formatLabel(value?: number) {
        if (value >= 1000) {
          return Math.round(value / 1000) ;
        }
       this.rate=value;
        return value;
      }

     

  createForm(){  
  
  this.commentForm=this.fb.group({
          author:['',[Validators.required,Validators.minLength(2),Validators.maxLength(26)]],
          comment:['',Validators.required],
          rating:[this.rate],
          date:['']
       
        });

    this.commentForm.valueChanges.subscribe(data=> this.onValueChanged(data));
    this.onValueChanged();  //To reset validation messages;
  }

  onValueChanged(data?:any)
  {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit(){

   
    this.comments=this.commentForm.value;   
    this.comments.date=this.d.toString();
    this.temp.push({author:this.comments.author,rating: this.comments.rating,comment:this.comments.comment,date:this.d});
    this.dishcopy.comments.push(this.comments);
    this.dishservice.putDish(this.dishcopy).subscribe(dish=>{
       this.dish=dish;
       this.dishcopy=dish;
    }, errmss=>{this.dish=null;this.dishcopy=null;this.errMsg=<any>errmss});

    console.log(this.temp);
    
    
    this.commentForm.reset({
      author:'',
      comment:'',
      rating:5
    });

 
    console.log(this.temp);
    this.commentFormDirective.resetForm();
  
  }
  

  ngOnInit() {

    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
    .subscribe(dish => { this.dish = dish; this.dishcopy=dish; this.setPrevNext(dish.id); }, errmess=>this.errMsg=errmess);

  }

  setPrevNext(dishId: String){
    const index=this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];

  }

  goBack():void{
    this.location.back();
  }

}
