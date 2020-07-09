import React, { useState } from 'react'
import { StyledEmptyLine } from './styles'
import { db } from '../../config/firebase';

const EmptyLine = () => {
    const [ value, setValue ] = useState('');

    const handleSubmit = () => {
        if(value !== '') {
            db.collection('comments').add({text: value, votes: 0})
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err)
            })
        }
        
        setValue('');
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <StyledEmptyLine>
            <input 
                type="text"
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                value={value}
            />
            <button onClick={handleSubmit}>Submit</button>
        </StyledEmptyLine>
    )
}

export default EmptyLine
