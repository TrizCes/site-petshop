import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CadastroComponent } from './component/cadastro/cadastro.component';
import { CadastroProdutoComponent } from './component/cadastro-produto/cadastro-produto.component';
import { LoginComponent } from './pages/login/login.component';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PasswordRequestComponent } from './component/password-request/password-request.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CadastroProdutoComponent,
    LoginComponent,
    FullComponent,
    ContentComponent,
    NotFoundComponent,
    PasswordRequestComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClientModule, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
