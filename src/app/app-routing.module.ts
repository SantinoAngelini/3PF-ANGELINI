import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'alumnos', loadChildren: () => import('./pages/alumnos/lista-alumnos/lista-alumnos.module').then(m => m.ListaAlumnosModule), canActivate: [AuthGuard]  },
  { path: 'cursos', loadChildren: () => import('./pages/cursos/cursos.module').then(m => m.CursosModule), canActivate: [AuthGuard]  },
  { path: 'usuarios', loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosModule), canActivate: [AuthGuard]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
