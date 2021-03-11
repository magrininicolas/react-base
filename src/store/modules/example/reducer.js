import * as types from '../types';

const initialState = {
  clickedButton: false,
};

// eslint-disable-next-line func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case types.CLICKED_BUTTON_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.clickedButton = !newState.clickedButton;
      return newState;
    }

    case types.CLICKED_BUTTON_FAILURE: {
      console.log('Ocorreu um erro');
      return state;
    }

    case types.CLICKED_BUTTON_REQUEST: {
      console.log('Fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
