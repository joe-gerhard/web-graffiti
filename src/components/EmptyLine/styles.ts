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
    font-size: 14px;
`);
