import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import {Route, RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import { OrderBeerButtonComponent } from './order-beer-button/order-beer-button.component';
import { BeerAgeCheckComponent } from './beer-age-check/beer-age-check.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatBadgeModule} from "@angular/material/badge";

const routes: Route[] = [
  {
    path: '',
    component: BeerListComponent
  },
  {
    path: ':id',
    component: BeerDetailsComponent
  }
]

@NgModule({
  declarations: [
    BeerDetailsComponent,
    BeerListComponent,
    OrderBeerButtonComponent,
    BeerAgeCheckComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatBadgeModule
  ]
})
export class BeerModule { }
