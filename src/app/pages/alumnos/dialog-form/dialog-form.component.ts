import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { alumno } from '../../../interfaces/alumno';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css'],
  standalone: false
})
export class DialogFormComponent implements OnInit {
  alumnoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: alumno
  ) {}

  ngOnInit(): void {
    this.alumnoForm = this.fb.group({
      nombre: [this.data?.nombre || '', [Validators.required]],
      apellido: [this.data?.apellido || '', [Validators.required]]
    });
  }

  onSave(): void {
    if (this.alumnoForm.valid) {
      this.dialogRef.close(this.alumnoForm.value); 
    }
  }

  onCancel(): void {
    this.dialogRef.close(); 
  }
}
