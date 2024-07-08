import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AngularEditorModule],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
