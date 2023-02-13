import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariant ={
    primary: '#00875F',
    secondary: '#00B37E',
    danger: 'red'
}

export const ButtomContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 12px;
    color: #fff;
    border-color: transparent;
    
    ${props => {
        return `background-color: ${buttonVariant[props.variant]}`
    }}

`