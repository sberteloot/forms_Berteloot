import { Component } from '@angular/core';
import { AlumnoModel } from 'src/app/models/alumno.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface AlumnoFormGroup {  
  nombre: FormControl<string | null>;
  apellido: FormControl<string | null>;
  email: FormControl<string | null>;
  fNacimiento: FormControl<Date | null>;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  titulo : string = "Alumnos";
  listadoAlumnos : AlumnoModel[] = [];
  numerador : number = 1;

  // Controles
  nombreFormControl = new FormControl('');
  apellidoFormControl = new FormControl('');
  emailFormControl = new FormControl('');
  fNacimientoFormControl = new FormControl(new Date());

  // FormGroup
  alumnoFormGroupModel : FormGroup<AlumnoFormGroup> = new FormGroup({
    apellido : this.apellidoFormControl,
    nombre : this.nombreFormControl,
    email : this.emailFormControl,
    fNacimiento : this.fNacimientoFormControl
  });
 
  enviar():void{
    console.log(this.apellidoFormControl)
    this.listadoAlumnos.push(new AlumnoModel(this.numerador, 
                                            this.apellidoFormControl.value || '',
                                            this.nombreFormControl.value || '', 
                                            this.emailFormControl.value || '',
                                            this.fNacimientoFormControl.value || new Date
                                            ));
    this.numerador++;
    console.log(this.listadoAlumnos);
  }

}
