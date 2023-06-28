import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AperoListComponent } from './pages/apero-list/apero-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AperoListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class AperoModule { }
