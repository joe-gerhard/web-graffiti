import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type StyledEmptyLineProps = {
    theme: Theme,
}

export const StyledEmptyLine = styled.div(({ theme }: StyledEmptyLineProps) => css`
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

    input {
        border: none;
        width: 100%;
        height: 100%;
        font-size: 14px;

        &:focus {
            outline: none;
        }
    }

    button {
        border: 1px solid ${theme.darkGrey};
        background: ${theme.light};
        padding: 2px 4px;
        border-radius: 4px;

        &:hover {
            cursor: pointer;
            background: ${theme.lightGrey};
        }
    }
`);
