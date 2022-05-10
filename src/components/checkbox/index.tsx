import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import {
    StyledLabel,
    StyledCheckbox,
    StyledSpan
} from './style';

const props = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
}

export type CheckboxProps = InferProps<typeof props>;

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const [checked, setChecked] = React.useState(props.checked);

    const toggleChecked = () => {
        const newChecked = !checked;
        setChecked(newChecked)
        props.onChange(newChecked)
    }

    return (
        <StyledLabel {...props}>
            <StyledCheckbox {...props} checked={checked} type="checkbox" onClick={toggleChecked} />
            <StyledSpan>{props.label}</StyledSpan>
        </StyledLabel>
    )
}
    

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    label: 'Check me'
}

Checkbox.propTypes = props;

export default Checkbox;
