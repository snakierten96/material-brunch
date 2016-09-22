import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    }
  ];

  tiles: Object[] = [
    { text: 'Parties', cols: 2, rows: 2, color: 'lightblue' },
    { text: 'Table 1', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Table 2', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Table 3', cols: 2, rows: 1, color: 'lightyellow' },
    { text: 'Table 4', cols: 2, rows: 1, color: 'lightslategray' },
    { text: 'Pending Orders', cols: 3, rows: 2, color: '#DDBDF1' },
    { text: 'Inventory', cols: 3, rows: 2, color: 'olive' }
  ];
}
