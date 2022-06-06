import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    width: ${({ size }) => size || '25px'};
    height: ${({ size }) => size || '25px'};
`;
export const StyledCheckbox = styled.input.attrs(props => ({
    type: 'checkbox',
    id: props.id || 'agreement',
    name: props.name || 'agreement',
}))`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;

    &:checked + label {
        background-color: ${({ theme }) => theme.colors.accent['100']};
        border-color: ${({ theme }) => theme.colors.accent['100']};
        
        &::before {
            opacity: 1;
            visibility: visible;
        }
    }
`;
export const CheckboxLabel = styled.label.attrs(props => ({
    htmlFor: props.htmlFor || 'agreement',
}))`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;

    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.neutral['300']};
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.light['100']};
    transition: ${({ theme }) => theme.setTransition(null, 'background-color', 'border-color')};
    
    &:hover {
        cursor: pointer;
    }

    &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        
        content: "\u2713";

        font-weight: ${({ theme }) => theme.typography.fontWeight['600']};
        font-size: 1.25em;

        color: ${({ theme }) => theme.colors.light['100']};
        transform: translate(-50%, -50%);
        opacity: 0;
        visibility: hidden;

        transition: ${({ theme }) => theme.setTransition(null, 'opacity', 'visibility')};

        &:hover {
            cursor: pointer;
        }
    }
`;