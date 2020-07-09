import { UIAction } from '../actions/UIActions';

type UIState = {
    shouldReload: boolean,
}

const initialUIState = {
    shouldReload: true,
}

const UIReducer = (state: UIState = initialUIState, action: UIAction) => {
    switch(action.type) {
        case 'SET_SHOULD_RELOAD': {
            return {
                ...state,
                shouldReload: action.payload,
            }
        }
        default:
            return state;
    }
}

export default UIReducer;