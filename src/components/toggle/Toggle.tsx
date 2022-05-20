import React, { HTMLAttributes } from 'react';

import {
    StyledLabel,
    StyledToggle,
    StyledSpan
} from './Toggle.style';

interface ToggleProps extends HTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    disabled?: boolean;
    onToggle: (value: boolean) => void;
    rightLabel?: boolean;
    label?: string;
}


const Toggle: React.FC<ToggleProps> = (props) => {

    const toggleChecked = () => {
        if (props.disabled || !props.onToggle) {
            return
        }
        props.onToggle(!props.checked)
    }

    return (
        <StyledLabel
            disabled={props.disabled} 
            rightLabel={props.rightLabel}
            onToggle={toggleChecked} 
        >
            <StyledToggle {...props} type="checkbox" onClick={toggleChecked} />
            <StyledSpan>{props.label}</StyledSpan>
        </StyledLabel>
    )
}
    

Toggle.displayName = 'Toggle';

Toggle.defaultProps = {
    disabled: false,
    label: 'Toggle me',
    rightLabel: false
}

export default Toggle
export { ToggleProps }
