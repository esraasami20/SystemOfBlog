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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
