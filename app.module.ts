import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './share/services/auth.service';
import { AuthRouteGuard } from './share/guards/auth.route.guard'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
