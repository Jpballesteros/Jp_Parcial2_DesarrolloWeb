import { Component,} from '@angular/core';
import { Producto } from '../producto';
import { RouterLink} from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})  

export class ContenidoComponent{
  title = 'JP_Parcial2_DesarrolloWeb';
  existeproducto: boolean;
  listaproductos: Producto[]=[];

  constructor(private productosService: ProductosService) { 
    this.existeproducto = true;
  }
  
  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto() {
    this.productosService.Obtenerproducto().subscribe({
      next:(value:Producto[])=>{
        console.log(value);
        this.listaproductos = value;
      }
    });
  }
  
}
