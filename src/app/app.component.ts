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
import { placedOrders } from './selectors';

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

  views: Object[] = [
    {
      name: 'My Account',
      description: 'Edit my account information',
      icon: 'assignment ind'
    }
  ];

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

}
