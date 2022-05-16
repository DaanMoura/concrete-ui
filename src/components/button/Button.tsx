import * as React from 'react'

import { colorNames } from '../../theme/colors'

import StyledButton from './Button.style'

interface ButtonProps {
    baseColor?: typeof colorNames[number]
    disabled?: boolean
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props) =>
    <StyledButton {...props}>
        {props.children}
    </StyledButton>

Button.displayName = 'Button'

Button.defaultProps = {
    baseColor: 'white',
    disabled: false
}

export default Button;
