import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'tb-orders',
  templateUrl: 'orders.component.html'
})
export class OrdersComponent {
  @Input() order: any;
  @Output() itemAdded: EventEmitter<any> = new EventEmitter<any>();
  @Output() itemRemoved: EventEmitter<any> = new EventEmitter<any>();
  @Output() deliverOrder: EventEmitter<any> = new EventEmitter<any>();
}