import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs';
import { 
  IAppState,
  IParty, ITables, IMenu,
  rootReducer,
  middleware,
  enhancers
} from './store';
import { LineupActions, TableActions } from './actions';
import { placedOrders } from './selectors/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @select() lineup$: Observable<IParty>;
  @select() tables$: Observable<ITables>;
  @select() menu$: Observable<IMenu>;
  @select(placedOrders) placedOrders$: Observable<any>;

  constructor(
    private _ngRedux: NgRedux<IAppState>,
    private _tableActions: TableActions,
    private _lineupActions: LineupActions) {

    this._ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      [ ...enhancers ]
    );

  }

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
  
  tables: Object[] = [
    { title: 'Table 1', color: 'lightgreen' },
    { title: 'Table 2', color: 'lightpink' },
    { title: 'Table 3', color: 'lightyellow' },
    { title: 'Table 4', color: 'lightslategray' }
  ];
}
