import { ComponentMeta } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";

export default {
    title: 'StyledButton',
    component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary = () => {
    return (
        <StyledButton variant="primary">
            Primary
        </StyledButton>
    )
}

export const Success = () => {
    return (
        <StyledButton variant="success">
            Success
        </StyledButton>
    )
}

export const Transparent = () => {
    return (
        <StyledButton variant="transparent">
            Transparent
        </StyledButton>
    )
}