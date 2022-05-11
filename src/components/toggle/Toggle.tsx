import React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import {
    StyledLabel,
    StyledToggle,
    StyledSpan
} from './Toggle.style';

const props = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
    rightLabel: PropTypes.bool
}

export type ToggleProps = InferProps<typeof props>;

const Toggle: React.FC<ToggleProps> = (props) => {

    const toggleChecked = () => {
        props.onChange(!props.checked)
    }

    return (
        <StyledLabel {...props}>
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

Toggle.propTypes = props;

export default Toggle;
