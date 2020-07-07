import React, { Dispatch } from 'react'
import { StyledComment, StyledVoteButton, StyledVoteButtonContainer } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducer'
import { CommentAction } from '../../redux/actions/commentActions'
import EmptyLine from '../EmptyLine'


const Comments: React.FC = () => {

    const { comments } = useSelector((state: AppState) => state.comments)
    const commentDispatch = useDispatch<Dispatch<CommentAction>>();

    const numEmptyLines = 10 - comments.length;
    const emptyLines = new Array(numEmptyLines).fill('');

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
        {emptyLines.map((line, idx) => {
            return (
                <EmptyLine key={idx + comments.length} />
            )
        })}
        </>
    )
}

export default Comments
