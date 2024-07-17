import { TPalette } from "../../theme/config/types";
import { ButtonWrapper } from "./styled";
import { TButtonVariant } from "./types";

interface ButtonProps {
  color?: keyof TPalette;
  fullWidth?: boolean;
  children: React.ReactNode;
  variant?: TButtonVariant;
}

function Button({
  color = "primary",
  variant = "contained",
  fullWidth,
  children,
}: ButtonProps) {
  return (
    <ButtonWrapper
      variant={variant}
      color={color}
      fullWidth={Boolean(fullWidth)}
    >
      {children}
    </ButtonWrapper>
  );
}

export default Button;
