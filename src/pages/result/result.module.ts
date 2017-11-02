import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { ResultPage } from './result';
import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ResultPage,
  ],
  imports: [
    HttpModule,
    SwingModule,
    IonicPageModule.forChild(ResultPage)
  ],
  exports: [
    ResultPage
  ]
})

export class ResultPageModule { }
