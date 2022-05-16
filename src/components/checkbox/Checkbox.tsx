import React from 'react';

import {
    StyledLabel,
    StyledCheckbox,
    StyledSpan
} from './Checkbox.style';

interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    label?: string;
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const toggleChecked = () => {
        if (props.disabled || !props.onChange) {
            return
        }
        props.onChange(!props.checked)
    }

    return (
        <StyledLabel disabled={props.disabled}>
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

// Checkbox.propTypes = props;

export default Checkbox;
