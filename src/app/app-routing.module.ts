import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalerryComponent } from './galerry/galerry.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'galerry', component: GalerryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
