/*
  {
    nores: [],
    active: null || {
      id: 'KADKSKF123123',
      title: '',
      body: '',
      imageUrl: '',
      date: 12345124123123,
    }
  }
*/

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
