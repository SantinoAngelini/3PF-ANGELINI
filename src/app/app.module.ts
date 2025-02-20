import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './pages/alumnos/lista-alumnos/lista-alumnos.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutpruebaComponent } from './layout/layoutprueba/layoutprueba.component';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { FormsModule } from '@angular/forms'; 
import { DialogFormComponent } from './pages/alumnos/dialog-form/dialog-form.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { TamanioTituloDirective } from './directives/tamanio-titulo.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { editarcursoComponent } from './pages/editarcurso/editarcurso.component';
import { LoginComponent } from './login/login.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    ToolbarComponent,
    LayoutpruebaComponent,
    DialogFormComponent,
    FullNamePipe,
    TamanioTituloDirective,
    HomeComponent,
    CursosComponent,
    UsuariosComponent,
    editarcursoComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule, 
    FormsModule,
    ReactiveFormsModule,
    //HttpClientModule
    
     
  ],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent]
})
export class AppModule { }