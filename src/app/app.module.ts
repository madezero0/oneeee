import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DirctivenameDirective } from './dirctivename.directive';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { SuplierComponent } from './suplier/suplier.component';
import { AssociateComponent } from './associate/associate.component';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Comp2Component,
    DirctivenameDirective,
    HeaderComponent,
    CustomerComponent,
    SuplierComponent,
    AssociateComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
