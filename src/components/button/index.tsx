import * as React from 'react'
import PropsTypes, { InferProps } from 'prop-types'

import { colorNames } from '../../theme/colors'

import StyledButton from './style'

const props = {
    baseColor: PropsTypes.oneOf(colorNames),
    disabled: PropsTypes.bool,
    onClick: PropsTypes.func,
    children: PropsTypes.node
}

export type ButtonProps = InferProps<typeof props>

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
