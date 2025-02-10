import { Pipe, PipeTransform } from '@angular/core';
import { alumno } from '../interfaces/alumno';  

@Pipe({
  name: 'fullName',
  standalone: false,  
})
export class FullNamePipe implements PipeTransform {

  transform(alumno: alumno): string {
    return `${alumno.nombre} ${alumno.apellido}`;  
  }
}