import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SquareComponent } from './square/square.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VedicComponent } from './vedic/vedic.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VedicComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
