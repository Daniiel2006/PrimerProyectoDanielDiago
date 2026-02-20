import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  constructor(private router: Router) {}

  registrar() {
    alert('Cuenta creada correctamente');
    this.router.navigate(['/login']);
  }
}