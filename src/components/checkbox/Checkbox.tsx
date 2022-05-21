import React, { HTMLAttributes } from 'react';

import {
    StyledLabel,
    StyledCheckbox,
    StyledSpan
} from './Checkbox.style'

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    disabled?: boolean;
    onToggle: (value: boolean) => void;
    label?: string;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const toggleChecked = () => {
        if (props.disabled || !props.onToggle) {
            return
        }
        props.onToggle(!props.checked)
    }

    return (
        <StyledLabel disabled={props.disabled} onToggle={toggleChecked} >
            <StyledCheckbox {...props} type="checkbox" onClick={toggleChecked} />
            <StyledSpan>{props.label}</StyledSpan>
        </StyledLabel>
    )
}
    

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
    disabled: false,
    label: 'Check me'
}


export default Checkbox
export { CheckboxProps }
