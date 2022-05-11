import styled, { css } from 'styled-components'
import colors from '../../theme/colors'
import typography from '../../theme/typography'

import { ToggleProps } from './Toggle'

const StyledLabel = styled.label`
    cursor: pointer;
    ${typography.regular}
    width: fit-content;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 8px;
    transition: .2s;

    ${(props: ToggleProps) => props.rightLabel && css`
        flex-direction: row;
    `}

    ${(props: ToggleProps) => props.disabled && css`
        color: ${colors.text.disabled}; 
        pointer-events: none;
    `}
`

const StyledToggle = styled.input`
    &[type="checkbox"] {
        -webkit-appearance: none;
        width: 28px;
        height: 10px;
        display: block;
        content: "";
        border: 2px solid ${colors.structure.stroke};
        border-radius: 12px;

        cursor: pointer;

        &:after {
            content: "";
            display: block;
            position: relative;
            left: -6px;
            bottom: 7px;
            z-index: 1;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 2px solid ${colors.structure.stroke};
            background: ${colors.state.white.default};
            transition: .2s;
        }

        &:hover {
            &:after {
                background: ${colors.state.white.hover};
                box-shadow: 1px 1px 0px ${colors.structure.stroke};
                transform: translateY(-1px) translateX(-1px);
            }
        }

        &:active {
            &:after {
                background: ${colors.state.white.active};
                transform: translateY(1px) translateX(1px);
                box-shadow: 0px 0px;
            }
        }

        &:checked {
            &:after {
                background: ${colors.base.grayDark};
                transform: translateY(-1px) translateX(-1px);
                box-shadow: 1px 1px 0px ${colors.structure.stroke};
                left: 10px;
            }

            &:hover {
                &:after {
                    background: ${colors.state.white.hover};
                    box-shadow: 1px 1px 0px ${colors.structure.stroke};
                    transform: translateY(-1px) translateX(-1px);
                }
            }

            &:active {
                &:after {
                    background: ${colors.state.white.active};
                    transform: translateY(1px) translateX(1px);
                    box-shadow: 0px 0px;
                }
            }
        }

        &:disabled {
            background: ${colors.state.white.default};
            border: 2px solid ${colors.state.white.disabled};
            cursor: initial;
            pointer-events: none;

            &:after {
                background: ${colors.state.white.default};
                border: 2px solid ${colors.state.white.disabled};
            }

            &:checked {
                &:after {
                    box-shadow: 1px 1px 0px ${colors.text.disabled};
                }
            }
        }
    }
`

const StyledSpan = styled.span`
`
    
export {
    StyledLabel,
    StyledToggle,
    StyledSpan
}
