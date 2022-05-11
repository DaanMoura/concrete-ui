import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import {
    StyledLabel,
    StyledCheckbox,
    StyledSpan
} from './Checkbox.style';

const props = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
}

export type CheckboxProps = InferProps<typeof props>;

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const toggleChecked = () => {
        props.onChange(!props.checked)
    }

    return (
        <StyledLabel {...props}>
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

Checkbox.propTypes = props;

export default Checkbox;
