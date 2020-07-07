interface IAddCommentAction {
    type: "ADD_COMMENT",
    payload: string,
}

export type CommentAction = 
| IAddCommentAction