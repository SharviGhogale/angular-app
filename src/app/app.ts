import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddItem } from './add-item/add-item';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AddItem,TodoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');

  todos: string[]=[]; //creating a basic avariable that is a string empty array

  addTodo(newTodo: string){ // create a function and pass in a parameter which is a string
    if(newTodo){ // check if parameter is empty or not
      this.todos.push(newTodo); // if not empty push to todos array
      //console.log(this.todos);
    }
  }

  handleDeletedTodo(index: number){
    this.todos.splice(index,1); // splice is to remove a specific item from a specific index
    
  }
}
