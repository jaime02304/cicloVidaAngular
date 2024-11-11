import {
  AfterContentInit,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-ciclo1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ciclo1.component.html',
  styleUrl: './ciclo1.component.css',
})
export class Ciclo1Component
   implements /*OnChanges*/ OnInit, /*AfterContentInit*/ OnDestroy
{
    //@Input() nombre: string = '';
    nombre: string = '';
  // constructor() {
  //   console.log('Constructor lanzado!');
  // }
  //
  // ngOnChanges() {
  //   console.log('ngOnChanges ha sido lanzado');
  // }
  //Cuando se inicia la ruta deseada
  ngOnInit(): void {
    this.MensajesService.setMensaje('ngOnInit lanzado');
    console.log(this.MensajesService.getMensaje());
  }
  //Se dispara cuando se enseña el contenido
  // ngAfterContentInit(): void {
  //   console.log('Soy AdterContentInit ');
  // }
  // Caundo cambias de ruta se destruye y se ejecuta lo siguiente 
  ngOnDestroy(): void {
    console.log('Soy OnDestroy ');
  }

  // Inyectar un servicio
 constructor(private MensajesService: MensajesService){}
}
