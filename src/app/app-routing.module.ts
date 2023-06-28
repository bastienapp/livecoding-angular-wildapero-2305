import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AperoListComponent } from './apero/pages/apero-list/apero-list.component';

const routes: Routes = [
  {
    path: '', component: AperoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
