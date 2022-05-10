import styled, { css } from 'styled-components'
import colors from '../../theme/colors'
import typography from '../../theme/typography'

import { CheckboxProps } from '.'

const StyledLabel = styled.label`
    cursor: pointer;
    ${typography.regular}
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: .2s;

    ${(props: CheckboxProps) => props.disabled && css`
        color: ${colors.text.disabled};
        pointer-events: none;
    `}
`

const StyledCheckbox = styled.input`
    &[type="checkbox"] {
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        display: block;
        content: "";
        border: 2px solid ${colors.structure.stroke};
        border-radius: 4px;
        background: ${colors.state.white.default};
        transition: .2s;

        cursor: pointer;

        &:hover, &:focus {
            outline: none;
            background: ${colors.state.white.hover};
            transform: translateY(-1px) translateX(-1px);
            box-shadow: 2px 2px 0px #000000;
        }

        &:active {
            background: ${colors.state.white.active};
            transform: translateY(1px) translateX(1px);
            box-shadow: 0px 0px;
        }

        &:disabled {
            background: ${colors.state.white.default};
            border: 2px solid ${colors.state.white.disabled};
            cursor: initial;
            pointer-events: none;
        }

        &:checked:after {
            margin-left: 1px;
            font-family: 'FontAwesome';
            content: '\f00c';
            color: ${colors.text.primary};
            transition: .2s;

            ${(props: CheckboxProps) => props.disabled && css`
                color: ${colors.text.disabled};
            `}
        }
    }
`

const StyledSpan = styled.span`
`
    
export {
    StyledLabel,
    StyledCheckbox,
    StyledSpan
}
