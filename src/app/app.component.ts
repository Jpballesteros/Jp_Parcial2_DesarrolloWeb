import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Producto } from './producto';
import { ProductosService } from './productos.service';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BarraMenuComponent, ContenidoComponent, FooterComponent,]
})
export class AppComponent {
  title = 'Jp_Parcial2_DesarrolloWeb';
  existeproducto: boolean;
  listaproductos: Producto[]=[];

  constructor(private productosService: ProductosService){
    this.existeproducto = true;
  }

  ngOnInit(): void {
    this.Obtenerproducto();
  }

  Obtenerproducto(){
    this.productosService.Obtenerproducto().subscribe({ 
      next:(value:Producto[])=>{
        console.log(value);
        this.listaproductos = value;
      }
    })
  }

}
