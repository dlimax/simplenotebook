import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppMain }  from './app.main';
import { TopicComponent }  from './app.topic';
import { FSService } from './fsservice';
import { CellComponent }  from './app.cell';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppMain,
    TopicComponent,
    CellComponent
  ],
  bootstrap: [ AppMain ],
  providers: [ FSService ]
})
export class AppModule { }
