import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
 } from '@angular/core';

 @Component({
   selector: 'tb-menu',
   templateUrl: './menu.component.html',
   changeDetection: ChangeDetectionStrategy.OnPush
 })
 export class MenuComponent {
   @Input() menuItems: any;
   @Input() tableId: any;
   @Input() currentOrder: any;
   @Output() itemAdded: EventEmitter<any> = new EventEmitter<any>();
   @Output() itemRemoved: EventEmitter<any> = new EventEmitter<any>();
 } 