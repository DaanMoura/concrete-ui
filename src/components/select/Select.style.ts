import styled, { css } from 'styled-components'
import colors from '../../theme/colors'
import typography from '../../theme/typography'

import { SelectProps } from './Select'

const StyledSelectWrapper = styled.div`
    width: ${(props: { width: string }) => props.width};
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

const StyledSelect = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 3;
    ${typography.heading5}
    color: ${colors.text.primary};
    border: 4px solid ${colors.structure.stroke};
    border-radius: 8px;
    padding: 8px 16px;
    background: ${colors.state.white.default};
    transform: translateY(0px);
    box-shadow: 0px 4px 0px ${colors.structure.blackShadow};
    transition: .2s;

    &:hover, &:focus {
        outline: none;
        background: ${colors.state.white.hover};
        transform: translateY(-4px);
        box-shadow: 0px 8px 0px ${colors.structure.blackShadow};
    }

    &:active {
        background: ${colors.state.white.active};
        transform: translateY(4px);
        box-shadow: 0px 0px;
    }

    ${(props: SelectProps) => props.disabled && css`
        color: ${colors.text.disabled};
        background: ${colors.structure.background};
        border: 4px solid ${colors.state.white.disabled};
        box-shadow: 0px 0px;
        transform: translateY(4px);
        cursor: initial;
        pointer-events: none;
    `}
    
    cursor: pointer;
`

const StyledSelectList = styled.ul`
    position: absolute;
    z-index: 2;
    width: ${(props: { width: string }) => `calc(${props.width} - 8px)`};
    list-style: none;
    padding: 0;
    margin: 0;
    border: 4px solid ${colors.structure.stroke};
    background: ${colors.structure.background};
    margin-top: -4px;
`

const StyledSelectListItem = styled.li`
    ${typography.heading5}
    color: ${colors.text.primary};
    margin: 0;
    padding: 8px 16px;
    background: ${colors.state.white.default};
    border-bottom: 4px solid ${colors.structure.stroke};
    cursor: pointer;
    transition: .2s;

    &:hover, &:focus {
        background: ${colors.state.white.hover};
    }

    &:active {
        background: ${colors.state.white.active};
    }

    ${(props: { isSelected: boolean }) => props.isSelected && css`
        background: ${colors.base.gray};
    `}
`

export {
    StyledSelectWrapper,
    StyledSelect, 
    StyledSelectList, 
    StyledSelectListItem
}
