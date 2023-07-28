import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CompletedComponent } from './completed/completed.component';

// Importa l'AppRoutingModule
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, TodoListComponent, CompletedComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
