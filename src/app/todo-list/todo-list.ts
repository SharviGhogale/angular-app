import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  @Input() todoList: string[] = []; // receiving info from the parent app.ts

  @Output() todoDeleted = new EventEmitter<number>(); // to output info to the parent app.ts

  delete(index: number){ // create a delete function indidivual task
    this.todoDeleted.emit(index); // sending the index which we want to delete to the parent
    
  }
}
