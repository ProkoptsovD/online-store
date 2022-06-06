import styled, { css } from "styled-components";
import { AddToCartButton } from "../ProductCard/ProductCard.styled";

const inputValid = css`
    && {
        border-color: ${({ theme }) => theme.colors.success['100']};
    }
`;
const inputInValid = css`
    && {
        border-color: ${({ theme }) => theme.colors.danger['100']};
    }
`;

export const Form = styled.form`
    display: block;
    font-family: ${({ theme }) => theme.typography.fontFamily['3']};
    font-weight: ${({ theme }) => theme.typography.fontWeight['500']};
    font-size: ${({ theme }) => theme.typography.fontSize['400']};

    & input, & textarea {
        padding: ${({ theme }) => theme.spacing(2)};
        border: 1px solid;
        border-color: ${({ theme }) => theme.colors.neutral['300']}
        
    }
    & input:focus-within, & textarea:focus-within {
        outline: 1px solid ${({ theme }) => theme.colors.dark['300']};
        border-color: transparent;
    }
    & > :not(:last-child) {
        margin-bottom: ${({ theme }) => theme.spacing(4)};
    }
`;
export const InputLabel = styled.label`
    display: block;
    width: 100%;

    &:nth-child(-n+4) {
        display: inline-block;
        width: 49%;
    }
    &:nth-child(2n) {
        margin-left: 2%;
    }
`;
const TextInput = styled.input.attrs(props => ({
    type: 'text',
    required: true,
    isValid: props.isValid,
}))`
    display: inline-block;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(2)};
`;
export const FirstNameInput = styled(TextInput).attrs(props => ({
    name: props.name || 'firstName',
}))``;
export const LastNameInput = styled(TextInput).attrs(props => ({
    name: props.name || 'lastName',
}))``;
export const EmailInput = styled.input.attrs(props => ({
        type: 'email',
        name: 'email',
        isValid: props.isValid,
}))`
    display: block;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(2)};
    ${({ isValid }) => isValid ? inputValid : isValid === false ? inputInValid : null };
`;
export const PhoneInput = styled.input.attrs(props => ({
        type: 'tel',
        name: 'tel',
        required: true,
        isValid: props.isValid,
    }))`
    display: block;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(2)};
    ${({ isValid }) => isValid ? inputValid : isValid === false ? inputInValid : null };
`;
export const CommentInput = styled.textarea.attrs({
    rows: "10",
    name: 'comment',
    placeholder: 'Enter your comment here...'
})`
    display: block;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing(2)};

    resize: none;
`;
export const SubmitButton = styled(AddToCartButton)`
    margin-bottom: 0px;
`;
