import React, { Dispatch } from 'react'
import { StyledComment, StyledVoteButton, StyledVoteButtonContainer } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducer'
import { CommentAction } from '../../redux/actions/commentActions'


const Comments: React.FC = () => {

    const { comments } = useSelector((state: AppState) => state.comments)
    const commentDispatch = useDispatch<Dispatch<CommentAction>>();

    return (
        <>
        {comments.map((comment, idx) => {
            return (
                <StyledComment key={idx}>
                    {comment.text}
                    <StyledVoteButtonContainer>
                        {comment.votes}
                        <StyledVoteButton onClick={() => commentDispatch({type: 'UPVOTE_COMMENT', payload: idx})} vote="plus">+</StyledVoteButton>
                        <StyledVoteButton onClick={() => commentDispatch({type: 'DOWNVOTE_COMMENT', payload: idx})} vote="minus">-</StyledVoteButton>
                    </StyledVoteButtonContainer>
                </StyledComment>
            )
        })}
        </>
    )
}

export default Comments
