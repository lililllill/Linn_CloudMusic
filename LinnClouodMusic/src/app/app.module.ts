import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { CoreModule } from './core/core.module';
// CoreModule用于分担appModule的压力


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  // 存放服务
  bootstrap: [AppComponent]
  // 定义入口组件
  
})
export class AppModule { }
