import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  displayDetails = false;
  toggleLog: Date[] = [];

  toggleDisplay() {
    this.displayDetails = !this.displayDetails;
    this.toggleLog.push(new Date());
  }
}
