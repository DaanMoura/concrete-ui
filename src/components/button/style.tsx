import styled from 'styled-components'
import colors from '../../theme/colors'
import typography from '../../theme/typography'

import { ButtonProps } from '.'

const StyledButton = styled.button`
    ${typography.heading5}
    color: ${colors.text.primary};
    border: 4px solid ${colors.structure.stroke};
    border-radius: 8px;
    padding: 8px 16px;  
    background: ${(props: ButtonProps) => colors.state[props.baseColor || 'white'].default};
    transform: translateY(0px);
    box-shadow: 0px 4px 0px ${colors.structure.blackShadow};
    transition: .2s;

    &:hover, &:focus {
        outline: none;
        background: ${(props: ButtonProps) => colors.state[props.baseColor || 'white'].hover};
        transform: translateY(-4px);
        box-shadow: 0px 8px 0px ${colors.structure.blackShadow};
    }

    &:active {
        background: ${(props: ButtonProps) => colors.state[props.baseColor || 'white'].active};
        transform: translateY(4px);
        box-shadow: 0px 0px;
    }

    &:disabled {
        color: ${colors.text.disabled};
        background: ${colors.structure.background};
        border: 4px solid ${colors.state.white.disabled};
        box-shadow: 0px 0px;
        transform: translateY(4px);
        cursor: initial;
    }

    cursor: pointer;
`

export default StyledButton;
