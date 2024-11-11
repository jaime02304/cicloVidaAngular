import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-ciclo2',
  standalone: true,
  imports: [],
  templateUrl: './ciclo2.component.html',
  styleUrl: './ciclo2.component.css'
})
export class Ciclo2Component implements OnInit {

  constructor(private MensajesService: MensajesService){}

  ngOnInit(): void {
    console.log(this.MensajesService.getMensaje());
  }
}
