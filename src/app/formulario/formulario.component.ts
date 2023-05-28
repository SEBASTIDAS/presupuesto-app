import { Component } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  tipo: string = "ing"
  descripcionInput: String;
  valorInput: number;

  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) { }

  tipoOperacion(evento: Event) {
    const elementoSeleccionado = evento.target as HTMLSelectElement;
    this.tipo = elementoSeleccionado.value;
    //this.tipo=evento.target.value;

  }

  agregarValor() {
    if (this.tipo === 'ing')
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    else this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));

  }

}
