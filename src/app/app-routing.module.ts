import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SunburstComponent } from './component/sunburst/sunburst.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';



const routes: Routes = [
  {path: 'navigation', component:  SunburstComponent},
  {path: 'dash/:uuid', component: DashboardComponent},
  { path: '',
  redirectTo: '/navigation',
  pathMatch: 'full'
},
{ path: '**', component: SunburstComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
