import React, { HTMLAttributes, ReactNode } from 'react'
import { ColorName } from '../../theme/colors'

import StyledButton from './Button.style'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    baseColor?: ColorName
    disabled?: boolean
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    children?: ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, ...props}) =>
    <StyledButton {...props}>
        {children}
    </StyledButton>

Button.displayName = 'Button'

Button.defaultProps = {
    baseColor: 'white',
    disabled: false
}

export default Button
export { ButtonProps }
