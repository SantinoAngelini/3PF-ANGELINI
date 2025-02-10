import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../../interfaces/curso';

@Component({
  selector: 'app-dialog-edit-curso',
  templateUrl: './editarcurso.component.html',
  styleUrls: ['./editarcurso.component.css'],
  standalone:false
})
export class editarcursoComponent{
  curso: Curso;

  constructor(
    public dialogRef: MatDialogRef<editarcursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso | null
  ) {
    this.curso = data ? { ...data } : { id: generateRandomId(), nombre: '', descripcion: '' };
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.curso);
  }
}

// Función para generar un ID aleatorio
function generateRandomId(): number {
  return Math.floor(Math.random() * 1000000);
}