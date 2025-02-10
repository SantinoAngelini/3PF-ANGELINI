import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './pages/cursos/cursos.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ListaAlumnosComponent } from './pages/alumnos/lista-alumnos/lista-alumnos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'alumnos', component: ListaAlumnosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'usuarios', component: UsuariosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
