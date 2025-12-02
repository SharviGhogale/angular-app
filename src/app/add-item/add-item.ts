import { Component,EventEmitter,Output } from '@angular/core';
import { ReactiveFormsModule,FormControl } from '@angular/forms';  

@Component({
  selector: 'app-add-item',
  imports: [ReactiveFormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem {
  newTask = new FormControl(''); //to store form input

  @Output() newTodo = new EventEmitter<string>(); // creating a new eventEmitter of type string and output will be given to parent

  submitTodo(){ // this is a function
    const task = this.newTask.value?.trim(); //creating a variable that is taking the  class store input and trimming it

    if (task){ // if to check if the task actually has a value if not it will not run
      this.newTodo.emit(task); // emit new task after adding to parent
      //console.log(task); // it will log task
      this.newTask.setValue(''); // Once thats done set the value back to an epty string
    }
  }
}
