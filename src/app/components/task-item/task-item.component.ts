import { CommonModule } from '@angular/common';
import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { TasksComponent } from '../tasks/tasks.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule,TasksComponent, FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes
  onDelete(task:Task):any{
    this.onDeleteTask.emit(task)
    // console.log(task)
  }
  onToggle(task:Task):any{
    this.onToggleReminder.emit(task)
  }
  

}
