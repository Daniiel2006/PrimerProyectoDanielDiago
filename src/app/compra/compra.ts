import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router'; 
import { HttpClient, HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [RouterModule, HttpClientModule], 
  templateUrl: './compra.html',
  styleUrls: ['./compra.css']
})
export class Compra implements OnInit {
  
  destinoId: string | null = '';
  precio: number = 450; 

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient 
  ) {}

  ngOnInit(): void {
    this.destinoId = this.route.snapshot.paramMap.get('id');
  }

  anadirAlCarrito(): void {
    const url = 'http://127.0.0.1:8000/api/carrito/agregar/';
    
    const datosViaje = {
      destino: this.destinoId,
      precio: this.precio,
      imagen_url: `fotos/descubrir/${this.destinoId}.png`
    };

    this.http.post(url, datosViaje, { withCredentials: true }).subscribe({
      next: (response) => {
        alert('¡Viaje añadido al carrito!');
        console.log('Respuesta de Django:', response);
      },
      error: (error) => {
        alert('Error al añadir: Asegúrate de estar logueado.');
        console.error(error);
      }
    });
  }
}