import styled, { css } from 'styled-components';
import TextButton from '../common/TextButton';

export const Wrapper = styled.div`
    display: block;
`;

export const OptionName = styled.b`
    display: inline-block;
    ${({ optionPickerType, theme }) => {
        if (optionPickerType === 'default') {
            return `
                margin-bottom: ${theme.spacing(2)};
                font-family: ${theme.typography.fontFamily['2']};
                font-size: ${theme.typography.fontSize['500']};
                font-weight: ${theme.typography.fontSize['700']};
                text-transform: uppercase;
            `
        };
        if (optionPickerType === 'mini') {
            return `
                margin-bottom: ${theme.spacing(2)};
                font-family: ${theme.typography.fontFamily['1']};
                font-size: ${theme.typography.fontSize['300']};
                font-weight: ${theme.typography.fontWeight['400']};
                text-transform: capitalize;
                line-height: 1.14;
            `
        };
    }}
`;
export const OptionList = styled.ul`  
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    margin: calc(-1 * ${({ margin }) => margin || '4px'});
    & > li {
        margin: ${({ margin }) => margin || '4px'};
    }
`;
export const ListItem = styled.li`   
`;

//================== option button styles =============//
export const OptionButton = styled(TextButton)`
    font-family: ${({theme}) => theme.typography.fontFamily['3']};
    letter-spacing: ${({theme}) => theme.typography.letterSpacing['5']};
    line-height: 1.12;
    transition: ${({theme}) => theme.setTransition(null, 'background-color', 'color', 'outline-color')};

    ${({ optionPickerType }) => {
        if (optionPickerType === 'default') {
            return css`
                ${({ optionType, theme, selected }) => {
                    if (optionType === 'text') {
                        return css`
                        min-width: 63px;
                        min-height: 45px;
                        
                        font-weight: ${theme.typography.fontWeight['400']};
                        font-size: ${theme.typography.fontSize['500']};
        
                        border: 1px solid ${theme.colors.dark['300']};
                        cursor: initial;
                        
                        &:not(:disabled):hover {
                            cursor: pointer;
                        }
                        
                        ${selected && css`
                            background-color: ${theme.colors.dark['300']};
                            color: ${theme.colors.light['100']};
                        `}
                    `};
                    if (optionType === 'swatch') {
                        return css`
                            width: 36px;
                            height: 36px;
                            padding: 2px;
                
                            background-color: ${({value}) => value};
                            background-clip: content-box;
            
                            outline: 1px solid;
                            outline-color: transparent;
                            
                            border: none;
                            cursor: initial;
                            
                            &:not(:disabled):hover,
                            &:not(:disabled):focus,
                            &:not(:disabled):active {
                                outline-color: ${theme.colors.accent['100']};
            
                                cursor: pointer;
                            }
                            
                            ${({ selected }) => selected && css`
                                outline-color: ${theme.colors.accent['100']};
                            `}
                        `;
                    };
                }
            }
            `
        }
        if (optionPickerType === 'mini') {
            return css`
                ${({ optionType, theme, selected }) => {
                    if (optionType === 'text') {
                        return css`
                        min-width: 24px;
                        min-height: 24px;
                        
                        font-weight: ${theme.typography.fontWeight['400']};
                        font-size: ${theme.typography.fontSize['300']};
                        line-height: ${theme.typography.lineHeight['1.6']};
        
                        border: 1px solid ${theme.colors.dark['300']};
                        cursor: initial;
                        
                        &:not(:disabled):hover {
                            cursor: pointer;
                        }
                        
                        ${selected && css`
                            background-color: ${theme.colors.dark['300']};
                            color: ${theme.colors.light['100']};
                        `}
                    `};
                    if (optionType === 'swatch') {
                        return css`
                            width: 20px;
                            height: 20px;
                            padding: 2px;
                
                            background-color: ${({value}) => value};
                            background-clip: content-box;
            
                            outline: 1px solid;
                            outline-color: transparent;
                            
                            border: none;
                            cursor: initial;
                            
                            &:not(:disabled):hover,
                            &:not(:disabled):focus,
                            &:not(:disabled):active {
                                outline-color: ${theme.colors.accent['100']};
            
                                cursor: pointer;
                            }
                            
                            ${({ selected }) => selected && css`
                                outline-color: ${theme.colors.accent['100']};
                            `}
                        `;
                    };
                }
            }
            `
        }
    }}`