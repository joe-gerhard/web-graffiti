import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type StyledWallProps = {
    theme: Theme,
}

export const StyledWall = styled.div(({ theme } : StyledWallProps) => css`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.grey};
    background: ${theme.lightGrey};
    width: 100vw;
    max-width: 1000px;
    height: calc(100vh - 80px);
`);