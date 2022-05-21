import React, { useState, useRef } from 'react'
import { FaChevronDown } from 'react-icons/fa'

import {
    StyledSelectWrapper,
    StyledSelect, 
    StyledSelectList, 
    StyledSelectListItem 
} from './Select.style'

import { useClickOutside, useEsc } from '../../hooks'

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
    disabled?: boolean
    options: string[]
    onUpdate: (value: string) => void
    value: string
    placeholder?: string
    width?: string
}

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
        props.onUpdate(value);
    }

    return (
        <StyledSelectWrapper ref={selectWrapperRef} width={props.width ?? '100%'}>
            <StyledSelect onClick={toggleOpen} {...props}>
                <span>{ selectedValue || props.placeholder }</span>
                <FaChevronDown />
            </StyledSelect>
            { (isOpen && !props.disabled) && (
                <StyledSelectList width={props.width ?? '100%'}>
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

export default Select;
export { SelectProps }
