import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,  CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter()

  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask: boolean = true;

  constructor(private uiService:UiService){}
  onSubmit(){
    if(!this.text){
      alert('Please add a task')
      return 
    }
    const newTask: Task = {
      
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

        this.text =''
        this.day =''
        this.reminder =false
      }
}
