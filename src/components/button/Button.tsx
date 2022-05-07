import * as React from 'react'
import styled from 'styled-components'
import PropsTypes, { InferProps } from 'prop-types'

import { BaseColors } from '@/types/ui'
import colors from '../../theme/colors'
import typography from '../../theme/typography'

// export interface ButtonProps {
//     baseColor?: BaseColors
//     onClick?: () => void
//     disabled?: boolean
//     children?: React.ReactNode
// }

const props = {
    baseColor: PropsTypes.oneOf(Object.keys(colors.state)),
    disabled: PropsTypes.bool,
    onClick: PropsTypes.func,
    children: PropsTypes.node
}
type ButtonProps = InferProps<typeof props>

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

    &:hover {
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

const Button: React.FC<ButtonProps> = (props: ButtonProps) =>
    <StyledButton {...props}>
        {props.children}
    </StyledButton>

Button.displayName = 'Button'

Button.defaultProps = {
    baseColor: 'white',
    disabled: false
}

Button.propTypes = props

export default Button;
