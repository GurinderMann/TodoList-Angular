import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CompletedComponent } from './completed/completed.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    pathMatch: 'full'
  },
  {
    path: 'completed', // Cambiato il percorso a '/completed'
    component: CompletedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
