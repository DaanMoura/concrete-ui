import React, { useState, useRef } from 'react'
import PropsTypes, { InferProps } from 'prop-types'
import { FaChevronDown } from 'react-icons/fa'

import {
    StyledSelectWrapper,
    StyledSelect, 
    StyledSelectList, 
    StyledSelectListItem 
} from './style'

import { useClickOutside, useEsc } from '../../hooks'

const props = {
    disabled: PropsTypes.bool,
    options: PropsTypes.arrayOf(PropsTypes.string),
    value: PropsTypes.string,
    onChange: PropsTypes.func,
    placeholder: PropsTypes.string,
    width: PropsTypes.string
}

export type SelectProps = InferProps<typeof props>

const Select: React.FC<SelectProps> = (props: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(props.value);

    const selectWrapperRef = useRef(null)
    useClickOutside(selectWrapperRef, () => setIsOpen(false))
    useEsc(() => setIsOpen(false))
    
    const isSelected = (value: string) => value === selectedValue;
    const toggleOpen = () => setIsOpen(!isOpen);

    const handleChange = (value: string) => {
        setSelectedValue(value);
        setIsOpen(false);
        props.onChange(value);
    }

    return (
        <StyledSelectWrapper ref={selectWrapperRef} width={props.width}>
            <StyledSelect onClick={toggleOpen} {...props}>
                <span>{ selectedValue || props.placeholder }</span>
                <FaChevronDown />
            </StyledSelect>
            { (isOpen && !props.disabled) && (
                <StyledSelectList width={props.width}>
                    { props.options.map((option) => (
                        <StyledSelectListItem 
                            {...{isSelected: isSelected(option)}}
                            onClick={() => handleChange(option)}
                        >
                            { option }
                        </StyledSelectListItem>
                    )) }
                </StyledSelectList>
            ) }
        </StyledSelectWrapper>
    )
}

Select.displayName = 'Select'

Select.defaultProps = {
    disabled: false,
    placeholder: 'Select...',
    width: '100%'
}

Select.propTypes = props

export default Select;