import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/principal', pathMatch: 'full' },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./pages/about-us/about-us.component').then(
        (m) => m.AboutUsComponent
      ),
  },
  { path: 'principal', component: PrincipalComponent },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/servicios/services.component').then(
        (m) => m.ServicesComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
