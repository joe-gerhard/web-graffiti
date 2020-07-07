import React from 'react'
import { StyledComment, StyledVoteButton, StyledVoteButtonContainer } from './styles'
import { Comment } from '../Wall/Wall';


type CommentsProps = {
    comments: Comment[],
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {
    return (
        <>
        {comments.map((comment, idx) => {
            return (
                <StyledComment key={idx}>
                {comment.text}
                <StyledVoteButtonContainer>
                    {comment.votes}
                    <StyledVoteButton vote="plus">+</StyledVoteButton>
                    <StyledVoteButton vote="minus">-</StyledVoteButton>
                </StyledVoteButtonContainer>
                </StyledComment>
            )
        })}
        </>
    )
}

export default Comments
