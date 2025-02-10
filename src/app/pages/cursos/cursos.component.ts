import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from '../../interfaces/curso';
import { editarcursoComponent } from '../editarcurso/editarcurso.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
  standalone:false
})
export class CursosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'acciones'];
  dataSource: Curso[] = [
    { id: generateRandomId(), nombre: 'Inglés Básico', descripcion: 'Curso para principiantes' },
    { id: generateRandomId(), nombre: 'Inglés Avanzado', descripcion: 'Curso para nivel avanzado' }
  ];

  constructor(private matDialog: MatDialog) {}

  onDelete(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este curso?')) {
      this.dataSource = this.dataSource.filter((curso) => curso.id !== id);
    }
  }

  onEdit(curso: Curso): void {
    this.matDialog
      .open(editarcursoComponent, { data: curso })
      .afterClosed()
      .subscribe((valorFormulario) => {
        if (valorFormulario) {
          this.dataSource = this.dataSource.map((c) =>
            c.id === curso.id ? { ...c, ...valorFormulario } : c
          );
        }
      });
  }

  onCreateCurso(): void {
    this.matDialog
      .open(editarcursoComponent)
      .afterClosed()
      .subscribe((valorFormulario) => {
        if (valorFormulario) {
          this.dataSource = [
            ...this.dataSource,
            { id: generateRandomId(), ...valorFormulario }
          ];
        }
      });
  }
}

function generateRandomId(): number {
  return Math.floor(Math.random() * 1000000);
}