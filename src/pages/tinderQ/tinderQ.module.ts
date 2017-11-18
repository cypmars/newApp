import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { TinderQPage } from './tinderQ';
import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    TinderQPage,
  ],
  imports: [
    HttpModule,
    SwingModule,
    IonicPageModule.forChild(TinderQPage)
  ],
  exports: [
    TinderQPage
  ]
})

export class TinderQPageModule { }
