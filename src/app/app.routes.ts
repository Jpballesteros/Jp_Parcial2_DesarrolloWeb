import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { MostrarProductosComponent } from './mostrar-productos/mostrar-productos.component';
import { DetalleDelProductoComponent } from './detalle-del-producto/detalle-del-producto.component';


export const routes: Routes = [

  {path: '', component: PaginaInicioComponent},
  {path: 'Inicio', component: PaginaInicioComponent},
  {path: 'detalle', component: MostrarProductosComponent},
  {path: 'detalle/:id', component: DetalleDelProductoComponent}
];





