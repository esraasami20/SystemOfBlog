import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LooginComponent } from './Components/loogin/loogin.component';
import { RegisterComponent } from './Components/register/register.component';
import { AdminComponent } from './Components/admin/admin.component';
import { VistorComponent } from './Components/vistor/vistor.component';
import { ModeratorComponent } from './Components/moderator/moderator.component';
import { HomeComponent } from './Components/home/home.component';
import { BlogService } from './services/blog.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LooginComponent,
    RegisterComponent,
    AdminComponent,
    VistorComponent,
    ModeratorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [HttpClient, BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
