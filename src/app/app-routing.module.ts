import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageReportsComponent} from "./pages/page-reports/page-reports.component";
import {PageProductComponent} from "./pages/products/page-product/page-product.component";

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
      {
        path:'articles',
        component:PageProductComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
