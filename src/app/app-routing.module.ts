import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageReportsComponent} from "./pages/page-reports/page-reports.component";
import {PageProductComponent} from "./pages/products/page-product/page-product.component";
import {NewProductComponent} from "./pages/products/new-product/new-product.component";
import {CltFrsDetailComponent} from "./composents/clt-frs-detail/clt-frs-detail.component";
import {PageClientComponent} from "./pages/clients/page-client/page-client.component";
import {PageSupplierComponent} from "./pages/suppliers/page-supplier/page-supplier.component";
import {NewCltSupComponent} from "./composents/new-clt-sup/new-clt-sup.component";

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
      },
      {
        path:'newarticle',
        component:NewProductComponent,
      },
      {
        path:'clients',
        component:PageClientComponent
      },
      {
        path:'newclient',
        component:NewCltSupComponent,
      },
      {
        path:'suppliers',
        component:PageSupplierComponent
      },
      {
        path:'newsupplier',
        component:NewCltSupComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
