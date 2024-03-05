import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'crear proyecto',
      completed: false,
    },
    {
      id: Date.now(), title: 'crear components',
      completed: false,
    },

  ]);

  newtaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,

    ]
  });


  changeHandler() {
    if (this.newtaskCtrl.valid) {
      const value = this.newtaskCtrl.value.trim();
      if (value !== '') {
        this.addTask(value);
        this.newtaskCtrl.setValue('');
      }

    }
    //patrones de manejo del estado no muta lo actualiza
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    }
    this.tasks.update((tasks) => [...tasks, newTask])
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));

  }

  updateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    })
  }
}
