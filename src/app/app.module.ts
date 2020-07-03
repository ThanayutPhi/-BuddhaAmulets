import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemeComponentModule } from './theme-component/theme-component.module';
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './main/home/home.module#HomeModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),

    ThemeComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
