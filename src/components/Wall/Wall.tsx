import React, { useState } from 'react'
import { StyledWall } from './styles'
import Comments from '../Comments'
import { Comment } from '../../redux/reducers/commentReducer';

const Wall = () => {
    const [ comments ] = useState<Comment[]>([{text: 'test', votes: 0 }, {text: 'test2', votes: 0}, {text: 'blah blah lakdfa;dslkfjaosifj olab ahbk hafba lfkb halfkhb afboiha f;bahjb aojfhb a;kfhb a9er ;afjb a;ofjnba une ;afjnb ab', votes: 0}])

    return (
        <StyledWall>
           <Comments comments={comments}/>
        </StyledWall>
    )
}

export default Wall
