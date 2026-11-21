import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TitleColorPipe } from '../pipes/title-color-pipe';

@Component({
  selector: 'app-task-list',
  imports: [DatePipe, UpperCasePipe, TitleColorPipe],
  templateUrl: './task-list.html',
})
export class TaskList {
  tasks = [
    { id: 1, title: 'Lire le cours Angular', dueDate: '2026-11-15' },
    { id: 2, title: 'Installer le CLI', dueDate: '2026-11-16' },
    { id: 3, title: 'Créer TaskFlow', dueDate: '2026-11-17' },
  ];

  clearTasks(): void {
    this.tasks = [];
  }
}
