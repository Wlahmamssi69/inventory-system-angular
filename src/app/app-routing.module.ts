import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageReportsComponent} from "./pages/page-reports/page-reports.component";

const routes: Routes = [
  {
    path:'login',
    component:PageLoginComponent
  },
  {
    path:'inscription',
    component:PageInscriptionComponent
  },
  {
    path: '',
    component:PageDashboardComponent,
    children:[
      {
        path:'reports',
        component:PageReportsComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
