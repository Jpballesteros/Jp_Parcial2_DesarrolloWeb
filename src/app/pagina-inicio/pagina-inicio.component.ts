import { Component } from '@angular/core';
import { BarraMenuComponent } from '../barra-menu/barra-menu.component';
import { ContenidoComponent } from '../contenido/contenido.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [RouterOutlet, BarraMenuComponent, ContenidoComponent, FooterComponent],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {

}
