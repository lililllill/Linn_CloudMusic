import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from '../pages/pages.module';
import { ServicesModule } from '../services/services.module';
import { ShareModule } from '../share/share.module';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    PagesModule,
    ServicesModule,
    ShareModule,
    AppRoutingModule
  ],
  // exports:[
  //   BrowserModule,
  //   AppRoutingModule,
  //   HttpClientModule,
  //   BrowserAnimationsModule,
  //   PagesModule
  // ]
})
export class CoreModule { 
  constructor(parentModule:CoreModule){
    if(parentModule){ 
      throw new Error('coreMudole 只能被appModule引入');
    }
  }
}
