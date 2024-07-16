import { TPalette } from "../../theme/config/types";
import { ButtonWrapper } from "./styled";

interface ButtonProps {
  color?: keyof TPalette;
  fullWidth?: boolean;
  children: React.ReactNode;
}

function Button({ color = "primary", fullWidth, children }: ButtonProps) {
  return (
    <ButtonWrapper color={color} fullWidth={Boolean(fullWidth)}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;
