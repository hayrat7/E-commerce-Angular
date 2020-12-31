import {BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {Router, RouterModule, Routes} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NotFoundComponent } from './not-found/not-found.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CaddyComponent } from './caddy/caddy.component';
import {MatTableModule} from '@angular/material/table';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', component: NotFoundComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'caddy', component: CaddyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    NotFoundComponent,
    ProductDetailComponent,
    CaddyComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatRippleModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
