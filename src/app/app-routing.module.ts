import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './shared-components/book-list/book-list.component';
import { AddBookComponent } from './shared-components/add-book/add-book.component';
import { LoginComponent } from './shared-components/login/login.component';
import { RegisterComponent } from './shared-components/register/register.component';
import { BarrowComponent } from './shared-components/barrow/barrow.component';
import { RequestComponent } from './shared-components/request/request.component';
import { HistoryComponent } from './shared-components/history/history.component';


const routes: Routes = [
  { path: 'list', component: BookListComponent },
  { path: 'create', component: AddBookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'borrow', component: BarrowComponent },
  { path: 'request', component: RequestComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
