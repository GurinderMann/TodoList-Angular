import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from './../todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  completedTodos: Todo[] = [];
  isLoading: boolean = true;

  constructor(private todoSvc: TodosService, private router: Router) {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  ngOnInit() {
    this.loadCompletedTodos();
  }

  loadCompletedTodos() {
    this.completedTodos = this.todoSvc.getCompletedTodos();
  }




}
