import { Injectable } from '@angular/core';
import { BehaviorSubject, concat, concatMap, Observable } from 'rxjs';
import { alumno } from '../interfaces/alumno';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor( private httpClient: HttpClient) {}



  private alumnos: alumno[] = [

  ];

  private alumnosSubject = new BehaviorSubject<alumno[]>(this.alumnos);
  alumnos$ = this.alumnosSubject.asObservable();

  private generateRandomId(): string {
    return Math.floor(Math.random() * 1000).toString();
  }

  getAlumnos(): Observable<alumno[]> {
    return this.httpClient.get<alumno[]>(`${environment.baseApiUrl}/alumnos`);
  }

  agregarAlumno(alumno: alumno): Observable<alumno[]> {
    const nuevoAlumno: alumno = {
      ...alumno,
      id: alumno.id ?? this.generateRandomId()
    };
    this.alumnos.push(nuevoAlumno);
    this.alumnosSubject.next([...this.alumnos]);
    return this.httpClient.post<alumno>(`${environment.baseApiUrl}/alumnos`, nuevoAlumno)
    .pipe(concatMap(() => this.getAlumnos()))
}


editarAlumno(alumnoEditado: alumno): Observable<alumno[]> {
  this.alumnos = this.alumnos.map(alumno =>
    alumno.id === alumnoEditado.id ? { ...alumnoEditado } : alumno
  );
  this.alumnosSubject.next([...this.alumnos]);
  return this.httpClient.patch<alumno>(`${environment.baseApiUrl}/alumnos/${alumnoEditado.id}`, alumnoEditado)
    .pipe(concatMap(() => this.getAlumnos()));
}

  eliminarAlumno(id: string): Observable<alumno[]> {
    this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
    this.alumnosSubject.next([...this.alumnos]);
    return this.httpClient.delete<alumno>(`${environment.baseApiUrl}/alumnos/${id}` )
    .pipe(concatMap(() => this.getAlumnos()))
  }
}