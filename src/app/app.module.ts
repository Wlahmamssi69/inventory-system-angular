import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageReportsComponent } from './pages/page-reports/page-reports.component';
import { MenuComponent } from './composents/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './composents/header/header.component';
import { PageProductComponent } from './pages/products/page-product/page-product.component';
import { DetailProductComponent } from './composents/detail-product/detail-product.component';
import { PaginationComponent } from './composents/pagination/pagination.component';
import { BtnCrudComponent } from './composents/btn-crud/btn-crud.component';
import { NewProductComponent } from './pages/products/new-product/new-product.component';
import { CltFrsDetailComponent } from './composents/clt-frs-detail/clt-frs-detail.component';
import { PageClientComponent } from './pages/clients/page-client/page-client.component';
import { PageSupplierComponent } from './pages/suppliers/page-supplier/page-supplier.component';
import { NewCltSupComponent } from './composents/new-clt-sup/new-clt-sup.component'

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageReportsComponent,
    MenuComponent,
    HeaderComponent,
    PageProductComponent,
    DetailProductComponent,
    PaginationComponent,
    BtnCrudComponent,
    NewProductComponent,
    CltFrsDetailComponent,
    PageClientComponent,
    PageSupplierComponent,
    NewCltSupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule{}

