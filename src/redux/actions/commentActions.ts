interface IAddCommentAction {
    readonly type: 'ADD_COMMENT',
    payload: string,
}

interface IDeleteCommentAction {
    readonly type: 'DELETE_COMMENT',
    payload: number,
}

interface IUpvoteCommentAction {
    readonly type: 'UPVOTE_COMMENT',
    payload: number,
}

interface IDownvoteCommentAction {
    readonly type: 'DOWNVOTE_COMMENT',
    payload: number,
}

export type CommentAction = 
| IAddCommentAction
| IDeleteCommentAction
| IUpvoteCommentAction
| IDownvoteCommentAction