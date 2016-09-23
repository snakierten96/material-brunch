import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';
import { IParty } from '../store';

@Component({
  selector: 'tb-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  @Input() table: any;
  @Input() parties: Observable<IParty>;
  @Output() seatParty: EventEmitter<any> = new EventEmitter<any>();
}
