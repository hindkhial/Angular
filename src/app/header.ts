import { Component } from '@angular/core';
import { TaskList } from './task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [TaskList],
  templateUrl: './header.html',
})
export class Header {
  title = 'TaskFlow';
  canDelete = false;

  rename(): void {
    this.title = 'Mes tâches';
  }
}
