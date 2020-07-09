import React, { Dispatch, useEffect } from 'react'
import { StyledComment, StyledVoteButton, StyledVoteButtonContainer } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../redux/reducers/rootReducer'
import { CommentAction } from '../../redux/actions/commentActions'
import EmptyLine from '../EmptyLine'
import { db } from '../../config/firebase'
import { Comment } from '../../redux/reducers/commentReducer'
import { UIAction } from '../../redux/actions/UIActions'


const Comments: React.FC = () => {

    const { comments: { comments }, UI: { shouldReload } } = useSelector((state: AppState) => state)
    const commentDispatch = useDispatch<Dispatch<CommentAction>>();
    const UIDispatch = useDispatch<Dispatch<UIAction>>();

    useEffect(() => {
        if(shouldReload) {
            db.collection('comments').get({})
            .then(response => {
                let comments: Comment[] = []
                response.forEach(doc => {
                    console.log(doc.data())
                    comments.push({text: doc.data().text, votes: doc.data().votes})
                })
                commentDispatch({type: 'SET_COMMENTS', payload: comments})
                UIDispatch({type: 'SET_SHOULD_RELOAD', payload: false})
            })
            .catch(err => {
                console.log(err)
            })
        }
    })

    const numEmptyLines = 10 - comments.length;
    const emptyLines = new Array(numEmptyLines).fill('');

    const handleUpvote = (idx: number) => {
        commentDispatch({type: 'UPVOTE_COMMENT', payload: idx})
    }

    const handleDownvote = (idx: number) => {
        commentDispatch({type: 'DOWNVOTE_COMMENT', payload: idx})
    }

    return (
        <>
        {comments.map((comment, idx) => {
            return (
                <StyledComment key={idx}>
                    {comment.text}
                    <StyledVoteButtonContainer>
                        {comment.votes}
                        <StyledVoteButton onClick={() => handleUpvote(idx)} vote="plus">+</StyledVoteButton>
                        <StyledVoteButton onClick={() => handleDownvote(idx)} vote="minus">-</StyledVoteButton>
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
