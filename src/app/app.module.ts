import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { AddBookComponent } from './shared-components/add-book/add-book.component';
import { LoginComponent } from './shared-components/login/login.component';
import { RegisterComponent } from './shared-components/register/register.component';
import { HistoryComponent } from './shared-components/history/history.component';
import { BookListComponent } from './shared-components/book-list/book-list.component';

import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputComponent } from './shared-components/input/input.component';
import { BarrowComponent } from './shared-components/barrow/barrow.component';
import { RequestComponent } from './shared-components/request/request.component';
import { AlertComponentComponent } from './alert-component/alert-component.component'; // very important for label buttons to dispaly
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddBookComponent,
    LoginComponent,
    RegisterComponent,
    HistoryComponent,
    BookListComponent,
    InputComponent,
    BarrowComponent,
    RequestComponent,
    AlertComponentComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ConfirmDialogModule, ToastModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
