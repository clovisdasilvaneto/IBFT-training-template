import { TPalette } from "../../theme/config/types";
import { ButtonWrapper } from "./styled";
import { TButtonVariant } from "./types";

export interface ButtonProps {
  color?: keyof TPalette;
  fullWidth?: boolean;
  children: React.ReactNode;
  variant?: TButtonVariant;
  className?: string;
}

function Button({
  className,
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
      className={className}
    >
      {children}
    </ButtonWrapper>
  );
}

export default Button;
