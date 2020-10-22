import { PlanActionTypes } from '../actions/PlanActions';

interface Plans {
  id: string;
}

const initialState: Plans[] = [];

const plans = (state = initialState, action: PlanActionTypes): Plans[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default plans;
