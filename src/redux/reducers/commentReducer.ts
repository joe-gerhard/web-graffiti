import { CommentAction } from '../actions/commentActions';
import * as _ from 'lodash';

export type Comment = {
    text: string,
    votes: number,
}

type commentState = {
    comments: Comment[]
}

const initialCommentState = {
    comments: [{text: 'test', votes: 0}]
}

const commentReducer = (state: commentState = initialCommentState, action: CommentAction) => {
    switch(action.type) {
        case 'ADD_COMMENT': {
            let tempComments = _.cloneDeep(state.comments);
            return {
                ...state,
                comments: [...tempComments, {text: action.payload, votes: 0}]
            }
        }
        case 'DELETE_COMMENT': {
            let tempComments = _.cloneDeep(state.comments);
            tempComments.splice(action.payload, 1);
            return {
                ...state,
                comments: tempComments,
            }
        }
        case 'UPVOTE_COMMENT': {
            let tempComments = _.cloneDeep(state.comments);
            tempComments[action.payload].votes++;
            return {
                ...state,
                comments: tempComments,
            }
        }
        case 'DOWNVOTE_COMMENT': {
            let tempComments = _.cloneDeep(state.comments);
            tempComments[action.payload].votes--;
            return {
                ...state,
                comments: tempComments,
            }
        }
        default:
            return state;
    }
}

export default commentReducer;