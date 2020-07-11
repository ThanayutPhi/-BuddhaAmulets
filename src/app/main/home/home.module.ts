import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';

import { SliderModule } from 'angular-image-slider';


const routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];

@NgModule({
  declarations: [HomeComponent, HomeDialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatCardModule,
    FlexLayoutModule,

    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    SliderModule
  ],
  entryComponents: [
    HomeDialogComponent
  ]
})
export class HomeModule { }
