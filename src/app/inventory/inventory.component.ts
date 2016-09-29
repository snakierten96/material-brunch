import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { IMenu } from '../store';

@Component({
  selector: 'tb-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryComponent { 
  @Input() menu: IMenu;
}
