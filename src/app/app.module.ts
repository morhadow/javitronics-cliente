import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../app/Service/service.service';
import { PaginatePipe } from './Pipes/paginate.pipe';
import { CustomMatPaginatorIntl } from './paginator-es';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'

import { HomeComponent } from './common/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { MenuComponent } from './components/menu/menu.component';

import { NewProductoComponent } from './Producto/new/new.component';
import { EditProductoComponent } from './Producto/edit/edit.component';
import { PlistProductoComponent } from './Producto/plist/plist.component';
import { DeleteProductoComponent } from './Producto/delete/delete.component';
import { ViewProductoComponent } from './Producto/view/view.component';

import { NewTipoProductoComponent } from './TipoProducto/new/new.component';
import { PlistTipoProductoComponent } from './TipoProducto/plist/plist.component';
import { ViewTipoProductoComponent } from './TipoProducto/view/view.component';
import { EditTipoProductoComponent } from './TipoProducto/edit/edit.component';
import { DeleteTipoProductoComponent } from './TipoProducto/delete/delete.component';

import { NewFacturaComponent } from './Factura/new/new.component';
import { PlistFacturaComponent } from './Factura/plist/plist.component';
import { ViewFacturaComponent } from './Factura/view/view.component';
import { EditFacturaComponent } from './Factura/edit/edit.component';
import { DeleteFacturaComponent } from './Factura/delete/delete.component';

import { NewCompraComponent } from './Compra/new/new.component';
import { PlistCompraComponent } from './Compra/plist/plist.component';
import { ViewCompraComponent } from './Compra/view/view.component';
import { EditCompraComponent } from './Compra/edit/edit.component';
import { DeleteCompraComponent } from './Compra/delete/delete.component';

import { NewCarritoComponent } from './Carrito/new/new.component';
import { PlistCarritoComponent } from './Carrito/plist/plist.component';
import { ViewCarritoComponent } from './Carrito/view/view.component';
import { EditCarritoComponent } from './Carrito/edit/edit.component';
import { DeleteCarritoComponent } from './Carrito/delete/delete.component';


import { NewTipoUsuarioComponent } from './Tipousuario/new/new.component';
import { PlistTipoUsuarioComponent } from './Tipousuario/plist/plist.component';
import { ViewTipoUsuarioComponent } from './Tipousuario/view/view.component';
import { EditTipoUsuarioComponent } from './Tipousuario/edit/edit.component';
import { DeleteTipoUsuarioComponent } from './Tipousuario/delete/delete.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    NewProductoComponent,
    EditProductoComponent,
    PlistProductoComponent,
    DeleteProductoComponent,
    ViewProductoComponent,
    PaginatePipe,
    NewTipoProductoComponent,
    PlistTipoProductoComponent,
    ViewTipoProductoComponent,
    EditTipoProductoComponent,
    DeleteTipoProductoComponent,
    NewTipoUsuarioComponent,
    ViewTipoUsuarioComponent,
    DeleteTipoUsuarioComponent,
    EditTipoUsuarioComponent,
    PlistTipoUsuarioComponent,
    NewFacturaComponent,
    PlistFacturaComponent,
    ViewFacturaComponent,
    EditFacturaComponent,
    DeleteFacturaComponent,
    NewCompraComponent,
    PlistCompraComponent,
    ViewCompraComponent,
    EditCompraComponent,
    DeleteCompraComponent,
    NewCarritoComponent,
    PlistCarritoComponent,
    ViewCarritoComponent,
    EditCarritoComponent,
    DeleteCarritoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatPaginatorModule,
    MatIconModule
  ],
  providers: [
    ServiceService,
    {
      provide: MatPaginatorIntl, 
      useClass: CustomMatPaginatorIntl
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
