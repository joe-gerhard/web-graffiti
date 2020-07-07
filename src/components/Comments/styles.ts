import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type StyledCommentProps = {
    theme: Theme,
}

export const StyledComment = styled.span(({ theme }: StyledCommentProps) => css`
    border: 1px solid ${theme.darkGrey};
    min-height: 30px;
    border-radius: 4px;
    background: ${theme.light};
    margin: 2px 4px;
    display: flex;
    justify-content: space-between;
    padding: 2px 4px;
    color: ${theme.dark};
    display: flex;
    align-items: center;
    font-size: 14px;
`);

type StyledVoteButtonProps = {
    theme: Theme,
    vote: 'plus' | 'minus',
}

export const StyledVoteButton = styled.button(({ theme, vote }: StyledVoteButtonProps) => css`
    border: none;
    border-radius: 4px;
    background: ${vote === 'plus' ? theme.secondary : theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    color: ${theme.dark};
    margin-left: 2px;

    &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
    }
`);

type StyledVoteButtonContainerProps = {
    theme: Theme,
}

export const StyledVoteButtonContainer = styled.div(({ theme }: StyledVoteButtonContainerProps) => css`
    border: 1px solid ${theme.darkGrey};
    padding: 2px;
    border-radius: 4px;
    display: flex;
`);