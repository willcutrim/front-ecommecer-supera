import { ButtomContainer, ButtonVariant } from './styles'

interface ButtonProps {
    variant?: ButtonVariant;
    title: string;
    onClick?: () => void;
}

export function Button({variant = 'primary',title, onClick}: ButtonProps){
    return <ButtomContainer variant={variant} onClick={onClick}>{title}</ButtomContainer>
}