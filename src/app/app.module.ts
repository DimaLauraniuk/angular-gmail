import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MailComponent } from './mail/mail.component';
import { HeaderComponent } from './shared/header/header.component';
import { SinglemailComponent } from './mail/singlemail/singlemail.component';


@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    HeaderComponent,
    SinglemailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
