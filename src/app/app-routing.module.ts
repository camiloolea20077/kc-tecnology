import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/servicios/services.component'



const routes: Routes = [
  {path:'about-us', component:AboutUsComponent},
  {path:'',redirectTo:'/principal', pathMatch:'full'},
  {path:'principal',component:PrincipalComponent},
  {path:'servicios', component:ServicesComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
