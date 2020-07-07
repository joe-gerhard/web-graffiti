import { CommentAction } from '../actions/commentActions';

export type Comment = {
    text: string,
    votes: number,
}

type commentState = {
    comments: Comment[]
}

const initialCommentState = {
    comments: []
}

const commentReducer = (state: commentState = initialCommentState, action: CommentAction) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default commentReducer;