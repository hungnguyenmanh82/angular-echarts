import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { Bar2Component } from './bar2/bar2.component';
import { BarComponent } from './bar/bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'bar', component: BarComponent },
  { path: 'bar2', component: Bar2Component },
  { path: 'horizontal-bar', component: HorizontalBarComponent },
  { path: '', pathMatch: 'full', redirectTo: 'bar' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
