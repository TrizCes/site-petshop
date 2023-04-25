import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './security/auth-guard.service';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { PasswordRequestComponent } from './component/password-request/password-request.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadastroProdutoComponent } from './component/cadastro-produto/cadastro-produto.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '', component: FullComponent, canActivate: [AuthGuard],
  children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'cadastro-produto', component: CadastroProdutoComponent, canActivate: [AuthGuard]}
  ]},
  {path: 'login', component: ContentComponent, children:[
    {path: '', component: LoginComponent },
    {path: 'password', component: PasswordRequestComponent},
    {path: 'cadastro', component: CadastroComponent}
  ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
