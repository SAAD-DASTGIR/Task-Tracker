import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks'
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../service/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] =TASKS
  constructor(private taskService: TaskService){}
  ngOnInit():void {
    this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks)
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
    console.log(task.reminder)
  }
 

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
