import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JiraInterfaceComponent } from './jira-interface/jira-interface.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JiraInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
