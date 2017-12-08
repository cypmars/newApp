import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { TinderQ2Page } from './tinderQ2';
import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TinderQ2Page,
  ],
  imports: [
    HttpModule,
    SwingModule,
    IonicPageModule.forChild(TinderQ2Page)
  ],
  exports: [
    TinderQ2Page
  ]
})

export class TinderQPageModule { }
