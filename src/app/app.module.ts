import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { HeaderComponent } from './shared/header/header.component';
import { SinglemailComponent } from './mail/singlemail/singlemail.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatPaginatorModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatInputModule, MatListModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'mail', component: MailComponent },
  { path: 'login', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    HeaderComponent,
    SinglemailComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
