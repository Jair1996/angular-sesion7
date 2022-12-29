import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductosPageComponent } from './productos-page/productos-page.component';
import { CrearProductoPageComponent } from './crear-producto-page/crear-producto-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductosPageComponent,
    CrearProductoPageComponent
  ],
  exports: [
    HomeComponent,
    ProductosPageComponent,
    CrearProductoPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
