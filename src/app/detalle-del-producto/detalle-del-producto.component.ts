import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-detalle-del-producto',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './detalle-del-producto.component.html',
  styleUrl: './detalle-del-producto.component.css'
})
export class DetalleDelProductoComponent implements OnInit {  
  product: any = null;

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.params['id'];
    this.productosService.Obtenerproductoporid(productId).subscribe(data => {
      this.product = data;
    });
  }
}
