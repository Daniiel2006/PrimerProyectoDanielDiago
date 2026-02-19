import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './compra.html',
  styleUrls: ['./compra.css']
})
export class Compra implements OnInit {
  
  destinoId: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  
    this.destinoId = this.route.snapshot.paramMap.get('id');
  }
}