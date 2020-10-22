import { combineReducers } from 'redux';

import PlansReducer from './PlansReducer';

export default combineReducers({
  plans: PlansReducer,
});
