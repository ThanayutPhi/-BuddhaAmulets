import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';

const routes = [
  {
    path: "home",
    component: HomeComponent,
    // resolve: { items: TvdsTestService }
    // canActivate: [AuthenGuardService]
  },
  {
    path: '**',
    component: HomeComponent,
    // resolve: { items: TvdsTestService }
    // canActivate: [AuthenGuardService]
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatCardModule,
    FlexLayoutModule,

    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ]
})
export class HomeModule { }
