import { Component, Input } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-listadoalumnos',
  templateUrl: './listadoalumnos.component.html',
  styleUrls: ['./listadoalumnos.component.css']
})
export class ListadoalumnosComponent {
  @Input()
  listadoAlumnos : AlumnoModel[] = [];
}
