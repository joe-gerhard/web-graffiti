import { UIAction } from '../actions/UIActions';

type UIState = {

}

const initialUIState = {

}

const UIReducer = (state: UIState = initialUIState, action: UIAction) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default UIReducer;