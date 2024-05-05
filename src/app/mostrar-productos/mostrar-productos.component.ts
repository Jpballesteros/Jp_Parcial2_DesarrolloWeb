import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BarraMenuComponent } from '../barra-menu/barra-menu.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar-productos',
  standalone: true,
  imports: [RouterOutlet, BarraMenuComponent, FooterComponent, RouterLink, CommonModule],
  templateUrl: './mostrar-productos.component.html',
  styleUrl: './mostrar-productos.component.css'
})
export class MostrarProductosComponent {
productos: any;

}
