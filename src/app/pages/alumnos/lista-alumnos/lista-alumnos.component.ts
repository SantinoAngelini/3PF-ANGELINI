import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { alumno } from '../../../interfaces/alumno';
import { AlumnosService } from '../../../core/alumnos.service';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';


@Component({
  selector: 'app-lista-alumnos',
  standalone: false,

  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css'
})
export class ListaAlumnosComponent {
  displayedColumns: string[] = ['id', 'nombreCompleto', 'acciones'];
  dataSource: alumno[] = [];

  constructor(private matDialog: MatDialog, private alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.alumnosService.getAlumnos().subscribe(alumnos => {
      this.dataSource = alumnos;
    });
  }

  onDelete(id: string): void {
    if (confirm('¿Está seguro de que desea eliminar este alumno?')) {
      this.alumnosService.eliminarAlumno(id).subscribe(alumno=> {
        this.dataSource = alumno;
      });
    }
  }

  onEdit(alumno: alumno): void {
    this.matDialog
      .open(DialogFormComponent, { data: alumno })
      .afterClosed()
      .subscribe(valorFormulario => {
        if (valorFormulario) {
          const alumnoEditado = { ...alumno, ...valorFormulario };
          console.log('alumno editado:', alumnoEditado);
          this.alumnosService.editarAlumno(alumnoEditado).subscribe(alumnos => {
            this.dataSource = alumnos;
          });
        }
      });
  }

  onCreateStudent(): void {
    this.matDialog
      .open(DialogFormComponent)
      .afterClosed()
      .subscribe(valorFormulario => {
        if (valorFormulario) {
          this.alumnosService.agregarAlumno(valorFormulario).subscribe(alumno=> {
            this.dataSource = alumno;
          });
        }
      });
  }
}

