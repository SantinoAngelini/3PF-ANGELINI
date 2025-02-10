import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { alumno } from '../interfaces/alumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnos: alumno[] = [
    { id: this.generateRandomId(), nombre: 'Kevin', apellido: 'Davezac' },
    { id: this.generateRandomId(), nombre: 'Santino', apellido: 'Angelini' },
    { id: this.generateRandomId(), nombre: 'Franco', apellido: 'Angelini' },
    { id: this.generateRandomId(), nombre: 'Roxana', apellido: 'Tell' },
    { id: this.generateRandomId(), nombre: 'Jorge', apellido: 'Corona' },

  ];

  private alumnosSubject = new BehaviorSubject<alumno[]>(this.alumnos);
  alumnos$ = this.alumnosSubject.asObservable();

  private generateRandomId(): number {
    return Math.floor(Math.random() * 1000000);
  }

  getAlumnos(): Observable<alumno[]> {
    return this.alumnos$;
  }

  agregarAlumno(alumno: alumno): void {
    const nuevoAlumno: alumno = {
      ...alumno,
      id: alumno.id ?? this.generateRandomId() // Solo genera un ID si no existe
    };
    this.alumnos.push(nuevoAlumno);
    this.alumnosSubject.next([...this.alumnos]);
  }


  editarAlumno(alumnoEditado: alumno): void {
    this.alumnos = this.alumnos.map(alumno =>
      alumno.id === alumnoEditado.id ? { ...alumnoEditado } : alumno
    );
    this.alumnosSubject.next([...this.alumnos]);
  }

  eliminarAlumno(id: number): void {
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
    this.alumnosSubject.next([...this.alumnos]);
  }
}