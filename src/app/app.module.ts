import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

//for template for form:

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MenuComponent,
    DishdetailComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    AppRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
],
})
export class AppModule { }
