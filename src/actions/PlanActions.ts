import { Plan } from '../@types';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

interface SendMessageAction {
  type: typeof ADD_TODO;
  payload: Plan;
}

interface DeleteMessageAction {
  type: typeof TOGGLE_TODO;
  meta: {
    timestamp: number;
  };
}

export type PlanActionTypes = SendMessageAction | DeleteMessageAction;
